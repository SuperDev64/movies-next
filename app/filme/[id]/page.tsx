import Image from "next/image";
import {Metadata} from "next";
import MovieDetails from "@/components/MoviePage/MovieDetails";
import Hero from "@/components/MoviePage/Hero";
import Buttons from "@/components/MoviePage/Buttons";
import Genres from "@/components/MoviePage/Genres";

interface PageParams {
  params: {
    id: string | number
  }
}

interface IMovie {
  id: string;
  poster_path: string;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  tagline: string;
  spoken_languages: {
    name: string
  }[];
  genres: {
    name: string
  }[];
  revenue: number;
}

const fetchMovieData = async (id: string | number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmNlM2RhY2UzNjljOGViODJmMzIwODc4MWU1NzllYyIsIm5iZiI6MTczMDk0MzgyMi4zODIwMDAyLCJzdWIiOiI2NzJjMWI0ZTU1MDgyMDljZjdhZDM5MTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CSMQKgVUe8slAtDPn5XLmt2rlyP2W24l23O6pYRI5SE'
    }
  };

  const data = await fetch(url, options)
  const movie: IMovie = await data.json()

  return movie
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const movie: IMovie = await fetchMovieData(params.id);

  return {
    title: movie.title + " | Movies Database",
    description: movie.overview,
  }
}

export default async function Page({params: {id}}: PageParams) {
  const movie: IMovie = await fetchMovieData(id);

  return (
      <div className="min-h-screen">
        <Hero url={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}/>

        <div className="-mt-64 relative z-10 mx-auto max-w-screen-xl px-4">
          <div className="flex gap-8 mb-16">
            <div className="shrink-0">
              <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                  className="max-w-full rounded-l object-cover shadow-sm rounded"
                  width={240}
                  height={360}
              />
            </div>

            <div className="text-white pt-16">
              <h1 className="text-5xl font-medium">
                {movie.title}
                <span className="text-4xl text-neutral-200 font-light"> ({movie.release_date.slice(0, 4)})</span>
              </h1>

              <p className="text-xl mt-6 min-h-7">{movie.tagline}</p>

              <div className="flex gap-4 mt-6 font-bold min-h-14">
                <Buttons movieId={movie.id} />
              </div>

              <div className="flex mt-14 gap-4">
                <Genres genres={movie.genres} />
              </div>
            </div>
          </div>

          <MovieDetails movie={movie} />
        </div>
      </div>
  )
}