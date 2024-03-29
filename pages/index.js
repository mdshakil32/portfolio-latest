import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Projects2 from "@/components/Projects2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Md Shakil Chowdhury</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <Intro />
        <Header />
        <Banner />
        <About />
        <TechStack />
        <Projects2 />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
