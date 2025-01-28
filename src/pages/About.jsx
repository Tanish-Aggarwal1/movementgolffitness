import React from "react";
import { Container } from "../Components/index";

function About() {
  return (
    <Container>
      <section className="font-playfair flex min-h-[85vh] flex-col items-center justify-center gap-5 bg-[url('https://static.wixstatic.com/media/90beeb_7d2ed84de0f44d90b6fc250187380e93~mv2.jpg/v1/fill/w_1900,h_508,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/90beeb_7d2ed84de0f44d90b6fc250187380e93~mv2.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <p className="text-7xl font-bold">About</p>
        <hr className="my-4 w-8 border-t-3 border-white" />
      </section>

      <section className="font-playfair flex flex-col items-center gap-2 bg-gray-500 pt-6">
        <p className="text-4xl font-bold text-white">
          Maximize Your Golf Performance
        </p>
        <hr className="my-4 w-8 border-t-3 border-white" />
        <p className="text-2xl font-bold text-white">Mission</p>
        <p className="w-[30%] text-center text-xl text-white">
          Remote program consultation that meets your individual needs to help
          collaborate and create a strong team.
        </p>
        <hr className="my-4 w-8 border-t-3 border-white" />

        <p className="w-[60%] text-center text-lg text-white">
          Complete one of the forms on the Home page to tell us about yourself
          and connect further.
        </p>

        <p className="text-2xl font-semibold text-white mt-5">
          In-person services located in Oakville, ON.
        </p>
        <ul className="list-disc mb-5">
          <li>Force plates ​</li>

          <li>3D Motion Analysis</li>

          <li>Ball/club optimization</li>

          <li>Orthopaedic testing</li>

          <li>Physical testing</li>

          <li>Programming</li>

          <li>Training​​​</li>
        </ul>
      </section>
    </Container>
  );
}

export default About;
