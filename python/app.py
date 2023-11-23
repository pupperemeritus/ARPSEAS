from fastapi import FastAPI
from transformers import pipeline
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


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


pipe = pipeline("summarization", device=0, model="sshleifer/distilbart-cnn-12-6")


class InputText(BaseModel):
    text: str


@app.post("/summarize")
async def summarize(input_text: InputText):
    print("received summarize request")
    text = input_text.text
    summarization_outputs = []
    if len(text) > 512:
        batches = split_string_by_length(text, 512)
        for i in range(len(batches)):
            summarization_outputs.append(
                pipe(
                    batches[i],
                    max_length=len(batches[i]),
                    min_length=30,
                    do_sample=False,
                )[0]
            )
    else:
        return pipe(text, max_length=200, min_length=30, do_sample=False)[0][
            "summary_text"
        ]
    return {
        "summary": " ".join([summ["summary_text"] for summ in summarization_outputs])
    }
