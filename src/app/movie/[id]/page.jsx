import Image from 'next/image';
import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function MoviePage({params}) {
  const {id} = params

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
  const movie = await res.json()

  console.log(movie)
 
  return (
    <div className='w-full'>
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
      <Image width={500} height={300} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="Movie poster" className='rounded-lg' placeholder='blur' blurDataURL='/spinner.svg' style={{maxWidth: "100%", height:"100%"}}></Image>
      <div className="p-2">
        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
        <p className='text-lg'><span className='font-semibold mr-1'>Overview:</span>{movie.overview}</p>
      </div>

      </div>
    </div>
  )
}
