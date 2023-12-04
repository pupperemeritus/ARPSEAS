import "./globals.css";
import { JetBrains_Mono, Kanit, Roboto } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import Head from "next/head";

const jetBrains_mono = Kanit({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "ARPSEAS",
    description: "Its researchin' time",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <body className={jetBrains_mono.className}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
