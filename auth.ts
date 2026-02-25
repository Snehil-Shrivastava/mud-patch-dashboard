import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import argon2 from "argon2";

// Dummy user store — replace with DB queries later
const DUMMY_USERS = [
  {
    id: "PATCH1103",
    email: "demo@mudpatch.com",
    // In a real app, you will NEVER store plain-text passwords.
    // This is a placeholder for an argon2 hash of "password123".
    // When you implement registration, you will generate this using `await argon2.hash("password123")`
    hashedPassword: await argon2.hash("mudpatch@website"),
    firstName: "Demo",
    lastName: "User",
  },
];

// Extend the session type to include our custom fields
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
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
        // 1. Ensure credentials exist
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // 2. Fetch the user from your database
        const user = DUMMY_USERS.find((u) => u.email === credentials.email);

        // If user doesn't exist or doesn't have a password (e.g. they signed up with Google)
        if (!user || !user.hashedPassword) {
          return null;
        }

        try {
          // 3. Verify the password using argon2
          // Note: Since DUMMY_USERS has a fake hash right now, this will fail until you put a real hash or connect your DB.
          const isPasswordValid = await argon2.verify(
            user.hashedPassword,
            credentials.password as string,
          );

          if (!isPasswordValid) {
            return null; // Invalid password
          }

          // 4. Passwords match, return the user object
          return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            name: `${user.firstName} ${user.lastName}`,
          };
        } catch (error) {
          console.error("Argon2 verification error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      return session;
    },
  },
});
