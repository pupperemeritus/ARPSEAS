import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { AuthContext, AuthProvider } from "@/components/AuthContext";
const jetBrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
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
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
