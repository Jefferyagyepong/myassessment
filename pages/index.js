import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import React, {  useEffect } from 'react';

export default function Home() {
  const [movies, setMovies] = useState ([])
  const getMovies = async () =>{
    try{
      await fetch ("https://api.themoviedb.org/3/discover/movie?api_key=906477201fdc7bb5edf0d0b6245069c5")
      .then(res => res.json())
      .then(json => setMovies(json.results))
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    getMovies()
  }, [])
  return (
    <>
      <Head>
        <title>IFMA</title>
        

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta
          name="description"
          content="movie app"
        />
     
      
      </Head>
      <main>
        <Header/>
        <div>
          {movies.map((data)=>{
            return <>
            <Image width= {250} height={150}src={'https://image.tmdb.org/t/p/w500${data.poster_path}'}/>
            </>
            
          })}
          </div>

      
      </main>
    </>
  );
}
