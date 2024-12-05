import Image from "next/image";
import heartIcon from "@/public/heart.svg";

export default function Hero() {
    return (
        <>
          <h1 className="bg-gradient-to-r from-slate-300 to-slate-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
            Encontre seu próximo filme favorito
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-neutral-100">
            Use o campo de busca abaixo e salve seus filmes para assistir depois!
          </p>

          <div className="flex gap-8 mt-12">
            <input
                type="text"
                className="grow rounded-lg border-gray-200 p-4 pe-12 sm:text-lg/relaxed shadow-sm"
                placeholder="Buscar um filme"
            />

            <button
                className="inline-block rounded-full border border-gray-800 text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 size-16"
            >
              <Image
                  src={heartIcon}
                  alt="Favoritos"
                  title="Acessar favoritos"
                  className="inline-block"
              />
            </button>
          </div>
        </>
    )
}