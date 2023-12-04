import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }

                try {
                    const response = await axios.post(
                        process.env.NEXT_PUBLIC_api_url + "login",
                        {
                            email: credentials.email,
                            password: credentials.password,
                        },
                        {
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    const { user } = response.data;

                    // Return the user object if the response is successful
                    if (response.status === 200) {
                        return user;
                    }

                    // Return null if user data could not be retrieved
                    return null;
                } catch (error) {
                    console.log(error);
                    throw new Error("Failed to authenticate");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_PUBLIC_SECRET_KEY,
    pages: {
        signIn: "/",
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            return user.token;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
