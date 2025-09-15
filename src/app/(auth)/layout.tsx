"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image
            className="relative"
            width={152}
            height={56}
            src="/logo.png"
            alt="logo"
          />
          <Button variant="outline">
            <Link href={pathname === "/sign-in" ? "/sign-up" : "sign-in"}>
              {pathname === "/sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col justify-center items-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
