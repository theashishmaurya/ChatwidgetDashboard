import type { NextPage } from "next";
import Head from "next/head";
import { Container, Hero } from "../components/layout";
import Footer from "../components/layout/footer/footer";
import Navbar from "../components/layout/navbar";
import Feature from "../components/layout/section/feature";

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Navbar />
        <Hero />
        <Feature />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
