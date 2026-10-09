import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login – SP Packwell",
  description: "Sign in to your SP Packwell account to track orders and manage quotes.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Sign in to your SP Packwell account</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email or Phone
              </label>
              <input
                type="text"
                placeholder="you@company.com or +91 98765 43210"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-muted-foreground"
              />
            </div>
            <Button className="w-full" size="lg">Sign In</Button>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-brand-600 hover:underline font-medium">
              Register here
            </Link>
          </div>

          <div className="mt-4 p-4 bg-muted/50 rounded-xl text-center text-xs text-muted-foreground">
            🚧 Auth system coming soon. For orders, please{" "}
            <Link href="/quote" className="text-brand-600 hover:underline">request a quote</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}
