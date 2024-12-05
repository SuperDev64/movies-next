import {Metadata} from "next";
import Movie from "@/components/Movie";
import Hero from "@/components/Hero";
import Separator from "@/components/Separator";

export const metadata: Metadata = {
  title: "Movies Database",
  description: "Listagem de Filmes",
};

interface IMovies {
  results: {
    adult: boolean;
    id: string;
    poster_path: string;
    title: string;
    overview: string;
  }[]
}

const fetchMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlM2RhY2UzNjljOGViODJmMzIwODc4MWU1NzllYyIsIm5iZiI6MTczMDk0MzgyMi4zODIwMDAyLCJzdWIiOiI2NzJjMWI0ZTU1MDgyMDljZjdhZDM5MTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CSMQKgVUe8slAtDPn5XLmt2rlyP2W24l23O6pYRI5SE'
    }
  };

  const data = await fetch(url, options)
  const movies: IMovies = await data.json()

  return movies
}

export default async function Page() {
  const movies: IMovies = await fetchMovies();

  return (
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:min-h-screen">
        <div className="mx-auto max-w-3xl text-center">
          <Hero
              showSearch={false}
              title="Os melhores filmes já feitos"
              description="Confira os melhores filmes já feitos segundo nossos usuários"
          />
          <Separator text=""/>
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
  )
}