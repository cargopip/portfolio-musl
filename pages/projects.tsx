import Container from "@/UI/layout/Container";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";

import data from "@/data";
import Gallery from "@/components/Gallery/Gallery";
const { projects } = data;
const { gallery } = projects;
function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-screen overflow-x-hidden">
        <Navbar active={2} />
        <Container>
          <h1 className="text-6xl font-bold">Gallery</h1>
          <Gallery gallery={gallery} />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default Projects;