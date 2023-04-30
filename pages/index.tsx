import Container from "@/UI/layout/Container";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import data from "@/data";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

const { homePage } = data;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-[40px]">
        <Navbar active={0} />
        <div className="mt-[100px] md:mt-0">
          <Container>
            <div className="flex gap-[80px]">
              <div className="flex flex-col gap-[90px] lg:gap-9">
                <h1 className="text-5xl font-bold">
                  {homePage.title[0]}{" "}
                  <span className="text-red-600 text-6xl">Muslim</span> I am a{" "}
                  <span
                    style={{ fontFamily: "Dancing Script" }}
                    className="text-6xl"
                  >
                    Infographer
                  </span>{" "}
                  and a film maker
                </h1>
                <div className="flex flex-col gap-6 text-gray-500">
                  {homePage.paragraphs.map((e, i) => {
                    return (
                      <p key={i} className="leading-7">
                        {e}
                      </p>
                    );
                  })}
                </div>
              </div>
              <Image
                src={homePage.image}
                alt="profile image"
                width={380}
                height={380}
                className="bg-contain rounded-[16px] rotate-[3deg] h-[380px] w-[380px] hidden lg:block"
              />
            </div>
          </Container>
        </div>
        <Footer />
      </main>
    </>
  );
}
