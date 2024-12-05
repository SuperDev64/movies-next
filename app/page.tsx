import Hero from "@/components/Hero";
import Separator from "@/components/Separator";
import Movie from "@/components/Movie";

interface IMovies {
  results: {
    id: string;
    poster_path: string;
    title: string;
    overview: string;
  }[]
}

export default async function Home() {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=2';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlM2RhY2UzNjljOGViODJmMzIwODc4MWU1NzllYyIsIm5iZiI6MTczMDk0MzgyMi4zODIwMDAyLCJzdWIiOiI2NzJjMWI0ZTU1MDgyMDljZjdhZDM5MTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CSMQKgVUe8slAtDPn5XLmt2rlyP2W24l23O6pYRI5SE'
    }
  };

  const data = await fetch(url, options)
  const movies:IMovies = await data.json()

  return (
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
        <div className="mx-auto max-w-3xl text-center">
          <Hero/>
          <Separator text="Filmes em Destaque"/>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {
            movies.results.map((movie) => {
              return (
                  <Movie key={movie.id} details={movie}/>
              )
            })
          }
        </div>
      </div>
  );
}
