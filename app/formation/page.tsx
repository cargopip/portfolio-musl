import { Container } from "@/ui";
import Footer from "@/components/Footer/Footer";
import FormationCard from "@/components/FormationCard/FormationCard";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Brush, Camera, CameraReels, Image } from "react-bootstrap-icons";

function Page() {
  return (
    <main className="flex items-center justify-between flex-col min-h-screen">
      <Navbar active={5} />
      <span className="h-[100px] md:hidden"></span>
      <h1 className="text-6xl font-bold">Formations</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormationCard
            href="#"
            Icon={CameraReels}
            title={"VideoEditing"}
            p={
              "Now we create our first component. Because we are creating a library, we are going to create."
            }
          />
          <FormationCard
            href="#"
            Icon={Camera}
            title={"Photographic"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create."
            }
          />
          <FormationCard
            href="#"
            Icon={Brush}
            title={"Design"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create."
            }
          />
          <FormationCard
            href="#"
            Icon={Image}
            title={"Infographic"}
            p={
              "Now we can create our first component. Because we are creating a library, we are going to create."
            }
          />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default Page;
