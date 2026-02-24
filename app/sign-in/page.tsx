"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import mudpatchLogo from "@/public/mudpatch_logo.svg";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCredentialsSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
    } else {
      router.refresh();
      router.push("/post-use-collections");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/post-use-collections" });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image src={mudpatchLogo} alt="Mud Patch Logo" height={80} />
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#e8e0db] p-8">
          <h1 className="text-2xl font-semibold text-[#5C3D2E] mb-1">
            Welcome back
          </h1>
          <p className="text-[#9C7B6E] text-sm mb-8">
            Sign in to your Mud Patch account
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-[#e8e0db] rounded-2xl py-3 px-4 text-[#5C3D2E] font-medium hover:bg-[#fafafa] transition-colors mb-6"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#e8e0db]" />
            <span className="text-[#9C7B6E] text-xs">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-[#e8e0db]" />
          </div>

          {/* Credentials Form */}
          <form
            onSubmit={handleCredentialsSignIn}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#5C3D2E]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@mudpatch.com"
                required
                className="border border-[#e8e0db] rounded-xl px-4 py-3 text-sm text-[#3D2B1F] placeholder:text-[#c4b0a8] focus:outline-none focus:ring-2 focus:ring-[#3F5E3E]/40 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#5C3D2E]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="border border-[#e8e0db] rounded-xl px-4 py-3 text-sm text-[#3D2B1F] placeholder:text-[#c4b0a8] focus:outline-none focus:ring-2 focus:ring-[#3F5E3E]/40 transition"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#3F5E3E] text-white rounded-2xl py-3 font-medium hover:bg-[#334d33] transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-[#9C7B6E] mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-[#3F5E3E] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}
