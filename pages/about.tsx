import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import React from "react";
import data from "@/data";
import Container from "@/UI/layout/Container";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

const { aboutPage } = data;
const { title, p, images } = aboutPage;

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-screen overflow-x-hidden">
        <Navbar active={1} />
        <div className="w-full flex items-center justify-center flex-col">
          <Container>
            <div className="flex flex-col gap-5 mt-5 w-full">
              <h1 className="text-5xl font-bold max-w-[700px] ">{title}</h1>
              <p className="max-w-[700px] text-gray-600">{p}</p>
            </div>
          </Container>
          <div className="flex items-center justify-center overflow-hidden h-[400px]">
            <div className="flex gap-8 left-0 justify-center items-center">
              {images.map((image, i) => {
                const deg =
                  i === 0 || i === 3 ? 4 : i === 1 || i === 4 ? -1 : 4;

                return (
                  <div
                    key={i}
                    style={{ transform: `rotate(${deg}deg)` }}
                    className="w-[300px]"
                  >
                    <Image
                      src={image}
                      alt="project image"
                      width={300}
                      height={340}
                      className={`w-[300px] h-[340px] rounded-[24px] hover:scale-[1.09] transition-all duration-300`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default About;
