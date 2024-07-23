import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

export default function Home() {

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDY0NzcyMDFmZGM3YmI1ZWRmMGQwYjYyNDUwNjljNSIsIm5iZiI6MTcyMTY5MjU2NS43MTk1NTgsInN1YiI6IjY2OTg1ZDZiMzkyMWNiNDFiMjI5OGFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9NzE11TKSXv_tEGq3st9l3244K0gDZgZTJls4PwTV5I'
  }
};

fetch("https://api.themoviedb.org/3/discover/movie?api_key=906477201fdc7bb5edf0d0b6245069c5", options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  
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
          {movies.map(movie){
            return <>
            <Image src={"https://image.tmdb.org/t/p/w500/22dj38IckjzEEUZwN1tPU5VJ1qq.jpg"} width={200} height={180}/>
            </>
            
          }}
          </div>

      
      </main>
    </>
  );
}
