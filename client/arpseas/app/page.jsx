import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
    return (
        <div className="bglogin full-viewport flex flex-col items-center justify-center">
            <Header className="h-1/6" />
            <div className="h-4/6 w-full py-48 bg-gray-200 text-blue-900 text-center  flex flex-col fg">
                <div className="flex-grow">
                    <p className="my-2 text-2xl">
                        Welcome to ARPSEAS - Your Gateway to Knowledge
                    </p>
                    <p className="my-2 text-lg">
                        {" "}
                        The horizon of research opens up to you
                    </p>

                    <button className="rounded-full bg-blue-300 text-white text-center py-4 px-8 mx-2">
                        Log in
                    </button>
                    <button className="rounded-full bg-blue-300 text-white text-center py-4 px-8 mx-2">
                        Sign up
                    </button>
                </div>
            </div>
            <Footer className="h-1/6" />
        </div>
    );
}
