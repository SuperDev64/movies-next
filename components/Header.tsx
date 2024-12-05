import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-950 fixed top-0 z-20 left-0 right-0">
          <div className="mx-auto flex h-20 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 justify-between lg:px-8">
            <div className="w-24"></div>

            <Link href="/" className="font-bold uppercase tracking-tight text-neutral-100 text-lg">
              Movies Database
            </Link>
          </div>
        </header>
    )
}