import { Container } from "@/ui";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Brush, Camera, CameraReels, Image } from "react-bootstrap-icons";

function Page() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Navbar active={3} />
      <Container>
        <span className="h-[80px] md:hidden"></span>
        <h1 className="text-6xl font-bold">Hire Me!</h1>
        <div className="p-4 lg:p-0 flex flex-col gap-3">
          <Card
            Icon={CameraReels}
            title={"Video Editing"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create index files for each tier, and export our components from each one to make it as easy as possible for the people using our library to import them."
            }
            exp={3}
          />
          <Card
            Icon={Camera}
            title={"Photographic"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create index files for each tier, and export our components from each one to make it as easy as possible for the people using our library to import them."
            }
            exp={3}
          />
          <Card
            Icon={Brush}
            title={"Design"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create index files for each tier, and export our components from each one to make it as easy as possible for the people using our library to import them."
            }
            exp={3}
          />
          <Card
            Icon={Image}
            title={"Infographic"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create index files for each tier, and export our components from each one to make it as easy as possible for the people using our library to import them."
            }
            exp={3}
          />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default Page;
