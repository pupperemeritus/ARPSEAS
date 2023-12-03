//import '../styles/globals.css'
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <header className="absolute top-0 left-0 right-0 bg-transparent z-20 p-4 text-white ">
                <span className="text-4xl">arpseas</span>
                <span className=""></span>
            </header>
            <div className="bg-gradient-to-r from-teal-950 to-emerald-600 h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-8 py-12 text-white">
                    <div className="text-6xl text-center ">
                        Research Simplified.
                    </div>
                    <p className="text-xl my-8">
                        A web app that helps you summarize any research paper in
                        minutes.
                    </p>
                    <div className="grow-0 flex flex-row flex-nowrap justify-center">
                        <Link href="/signin">
                            {" "}
                            <button className="grow-0 m-4 bg-gradient-to-r from-pink-600 to-red-700 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                                Sign in
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="grow-0 m-4 bg-gradient-to-r from-pink-600 to-red-700 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                                Sign up
                            </button>
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </>
    );
}
