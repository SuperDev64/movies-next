import Hero from "@/components/Hero";
import Separator from "@/components/Separator";
import Movie from "@/components/Movie";
import moviesList from "@/movies.json"

export default function Home() {
  return (
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
        <div className="mx-auto max-w-3xl text-center">
          <Hero/>
          <Separator text="Filmes em Destaque"/>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {
            moviesList.results.map((movie) => {
              return (
                  <Movie key={movie.id} details={movie}/>
              )
            })
          }
        </div>
      </div>
  );
}
