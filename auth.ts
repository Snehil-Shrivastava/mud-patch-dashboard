import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// Dummy user store — replace with DB queries later
const DUMMY_USERS = [
  {
    id: "1",
    email: "demo@mudpatch.com",
    password: "password123",
    firstName: "Demo",
    lastName: "User",
  },
];

// Extend the session type to include our custom fields
declare module "next-auth" {
  interface Session {
    user: {
      firstName?: string;
      lastName?: string;
    } & DefaultSession["user"];
  }
  interface User {
    firstName?: string;
    lastName?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = DUMMY_USERS.find((u) => u.email === credentials.email);
        if (!user || user.password !== credentials.password) return null;
        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          name: `${user.firstName} ${user.lastName}`,
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      return session;
    },
  },
});
