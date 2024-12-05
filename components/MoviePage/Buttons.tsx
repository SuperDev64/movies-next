import {SignedIn} from "@clerk/nextjs";
import Image from "next/image";
import heartIcon from "@/public/heart.svg";

export default function Buttons() {
  return (
      <>
        <SignedIn>
          <button
              className="inline-block rounded-full border border-gray-800 text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 size-12"
          >
            <Image
                src={heartIcon}
                alt="Favoritos"
                title="Acessar favoritos"
                className="inline-block"
            />
          </button>
        </SignedIn>

        <button
            className="inline-block rounded-full border border-transparent text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 px-6 h-12"
        >
          Ver trailer
        </button>
      </>
  )
}