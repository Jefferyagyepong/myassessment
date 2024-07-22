import Head from "next/head";
import Header from "@/components/Header";
import React, {  useEffect } from 'react'

export default function Home() {
  cons [movies, setMovies] = useState ([])
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
        <title>Jeffery Agyepong | Web Developer</title>
        

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
            <Image style={{width:"300px", height:"250px",margin-left:"10px", margin-top:"10px"}} src={"https://image.tmdb.org/t/p/w500${data.poster}"}/>
            </>
            
          })}
          </div>

      
      </main>
    </>
  );
}
