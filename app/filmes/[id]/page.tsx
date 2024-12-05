import movieDetails from "@/movieDetails.json"
import Image from "next/image";
import heartIcon from "@/public/heart.svg";

export default async function MoviePage() {
  return (
      <div className="min-h-screen">
        <div
            className="py-56 relative bg-cover bg-center after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gray-950/85"
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//${movieDetails.backdrop_path})`}}
        ></div>

        <div className="-mt-64 relative z-10 mx-auto max-w-screen-xl px-4">
          <div className="flex gap-8 mb-16">
            <div className="shrink-0">
              <Image
                  alt={movieDetails.title}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieDetails.poster_path}`}
                  className="max-w-full rounded-l object-cover shadow-sm rounded "
                  width={240}
                  height={360}
              />
            </div>

            <div className="text-white pt-16">
              <h1 className="text-5xl font-medium">
                {movieDetails.title}
                <span className="text-4xl text-neutral-200 font-light"> ({movieDetails.release_date.slice(0, 4)})</span>
              </h1>

              <p className="text-xl mt-6">{movieDetails.tagline}</p>

              <div className="flex gap-4 mt-6 font-bold">
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

                <button
                    className="inline-block rounded-full border border-transparent text-center text-sm text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-800 px-6"
                >
                  Ver trailer
                </button>
              </div>

              <div className="flex mt-14 gap-4">
                {movieDetails.genres.map((genre, index) => {
                  return (
                      <p
                          key={index}
                          className="whitespace-nowrap rounded-full border border-neutral-500 px-4 py-1 text-sm text-neutral-200"
                      >
                        {genre.name}
                      </p>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="max-w-screen-lg mx-auto text-lg text-white">
            <p className="mb-12">{movieDetails.overview}</p>

            <div className="grid grid-cols-3 divide-x text-center font-bold leading-6 rounded-lg  overflow-hidden divide-slate-800 border border-slate-800 p-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Idioma original</h3>
                <p>{movieDetails.spoken_languages[0].name}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Data de Lançamento</h3>
                <p>{movieDetails.release_date.split("-").reverse().join("/")}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Receita</h3>
                <p>{movieDetails.revenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}