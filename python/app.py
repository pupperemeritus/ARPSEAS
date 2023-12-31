from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import dotenv
import os

dotenv.load_dotenv()

app = FastAPI()

origins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "https://localhost:3000",
    "https://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "http://localhost:3001",
    "https://localhost:3001",
    "https://127.0.0.1:3001",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # If your frontend includes credentials (e.g., cookies)
    allow_methods=[
        "*"
    ],  # You can specify specific HTTP methods (e.g., ["GET", "POST"])
    allow_headers=["*"],  # You can specify specific headers (e.g., ["Authorization"])
)


def split_string_by_length(string, length):
    string_buf = ""
    split_list = string.split(".")
    res = []
    for i in split_list:
        if len(i) > length - 2:
            # If the sentence is longer than the specified length,
            # split it into smaller chunks of length `length - 2`
            chunks = [i[j : j + length - 2] for j in range(0, len(i), length - 2)]
            for chunk in chunks:
                res.append(chunk.strip() + ".")
        elif len(i) + len(string_buf) > length - 2:
            res.append(string_buf.strip())
            string_buf = i + ". "
        else:
            string_buf += i + ". "
    res.append(string_buf)
    return res


pipe = pipeline(
    "summarization",
    device=int(os.getenv("DEVICE")),
    model="sshleifer/distilbart-cnn-12-6",
)


class InputText(BaseModel):
    text: str


@app.post("/summarize")
async def summarize(input_text: InputText):
    print("received summarize request")
    text = input_text.text
    summarization_outputs = []
    num_words_text = len(text.split())
    if num_words_text > 512:
        batches = split_string_by_length(text, 512)
        print("> 512")
        for i in range(len(batches)):
            print(num_words := len(batches[i].split()))
            summarization_outputs.append(
                pipe(
                    batches[i],
                    max_length=(num_words * 0.8) // 1,
                    min_length=num_words // 5,
                    do_sample=False,
                )[0]
            )
    else:
        print("< 512")
        return {
            "summary": pipe(
                text,
                max_length=(num_words_text * 0.8) // 1,
                min_length=num_words_text // 5,
                do_sample=False,
            )[0]["summary_text"]
        }
    return {
        "summary": " ".join([summ["summary_text"] for summ in summarization_outputs])
    }
