import { SessionProvider as Provider } from "next-auth/react";

("use client");

export default function SessionProvider({ children }) {
    return <Provider>{children}</Provider>;
}
