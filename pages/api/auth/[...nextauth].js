import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),

    providers: [
        // OAuth authentication providers
        Providers.Apple({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }),

        // Sign in with passwordless email link
        // Providers.Email({
        //     server: process.env.MAIL_SERVER,
        //     from: "<no-reply@example.com>",
        // }),
    ],
    // // SQL or MongoDB database (or leave empty)
    // database: process.env.DATABASE_URL,

    pages: {
        //signIn: "/signin",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET,
})