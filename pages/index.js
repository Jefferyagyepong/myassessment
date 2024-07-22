import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Jeffery Agyepong | Web Developer</title>
        

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta
          name="description"
          content="movie app"
        />
     
        <link rel="icon" href="/lee.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <Header/>

      
      </main>
    </>
  );
}
