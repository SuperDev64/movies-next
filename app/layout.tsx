import './globals.css'
import {Metadata} from "next";
import React from "react";
import {ClerkProvider} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Movies Database",
  description: "Listagem de Filmes",
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
      >
        <html lang="en">
        <body>
        <div className="bg-gradient-to-b from-gray-950 to-gray-900">
          <Header/>
          {children}
        </div>
        </body>
        </html>
      </ClerkProvider>
  )
}
