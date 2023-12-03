import "./globals.css";
import { JetBrains_Mono, Kanit, Roboto } from "next/font/google";
import { CookiesProvider } from "react-cookie";

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
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className={jetBrains_mono.className}>
                <CookiesProvider>{children}</CookiesProvider>
            </body>
        </html>
    );
}
