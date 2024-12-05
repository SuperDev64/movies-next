import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-950 fixed top-0 z-20 left-0 right-0">
          <div className="mx-auto flex h-20 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 justify-between lg:px-8">
            <div className="flex items-center">
              <Link href="/" className="font-bold uppercase tracking-tight text-neutral-100 text-lg">
                Movies Database
              </Link>

              <nav className="ml-8 pl-8 border-l border-l-gray-800">
                <ul className="list-none flex text-white gap-6">
                  <li>
                    <Link className="text-inherit hover:underline" href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="text-inherit hover:underline" href="/filmes-populares">Melhores Filmes</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="w-24 text-right">
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                      className="rounded border border-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800"
                  >
                    Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </div>
          </div>
        </header>
    )
}