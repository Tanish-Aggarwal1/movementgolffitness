import React from "react";
import { Container } from "../Components/index";

function Home() {
  return (
    <Container>
      <section className="font-playfair flex min-h-[85vh] flex-col items-center justify-center gap-5 bg-[url('https://static.wixstatic.com/media/90beeb_7d2ed84de0f44d90b6fc250187380e93~mv2.jpg/v1/fill/w_1900,h_804,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/90beeb_7d2ed84de0f44d90b6fc250187380e93~mv2.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <p className="text-9xl font-extrabold">MOVEMENT</p>
        <p className="text-4xl font-bold">Golf Fitness</p>
      </section>

      <section className="font-playfair flex flex-col items-center gap-2 bg-gray-500 pt-6">
        <p className="text-4xl font-bold text-white">
          Performance. Pain. Longevity
        </p>
        <hr className="my-4 w-8 border-t-3 border-white" />
        <p className="text-2xl font-bold text-white">Mission</p>
        <p className="w-[30%] text-center text-xl text-white">
          Enhance the golfing community by enabling players to improve their
          game, play pain-free, and enjoy the sport longer.
        </p>
        <hr className="my-4 w-8 border-t-3 border-white" />
        <p className="font-playfair text-2xl font-bold text-white">
          Program Consulting​
        </p>
        <p className="w-[60%] text-center text-lg text-white">
          Click an option below that best describes you and complete the
          associated form.
        </p>
        <hr className="my-4 w-8 border-t-3 border-white" />

        <div className="mb-10 flex w-[40%] flex-wrap justify-around gap-10">
          <div className="flex min-w-[40%] items-center justify-center border-2 border-black bg-black py-3 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black">
            form-1
          </div>
          <div className="flex min-w-[40%] items-center justify-center border-2 border-black bg-black py-3 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black">
            form-2
          </div>
          <div className="flex min-w-[40%] items-center justify-center border-2 border-black bg-black py-3 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black">
            form-3
          </div>

          <p className="flex items-center justify-center border-2 border-white bg-transparent px-3 py-3 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black">
            Click for more information on sponsorship opportunities.
          </p>
        </div>
      </section>

      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-5 bg-[url('https://static.wixstatic.com/media/90beeb_0decc19423a44d94a2d88c8546a174b4~mv2.jpg/v1/fill/w_1900,h_502,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/90beeb_0decc19423a44d94a2d88c8546a174b4~mv2.jpg')] bg-cover bg-center bg-no-repeat pt-6 text-white">
        <p className="text-3xl font-bold">Mental Performance Consulting</p>
        <hr className="my-4 w-8 border-t-3 border-white" />
        <img
          src="https://static.wixstatic.com/media/90beeb_1a821fbcd0b043d5bddd7e0eced2672a~mv2.jpg/v1/fill/w_315,h_109,al_c,lg_1,q_80,enc_avif,quality_auto/Headstrong_edited_edited.jpg"
          className="w-[200px]"
          alt="HeadSTRONG"
        />
        <p className="text-xl">Discover your potential.</p>
        <hr className="my-4 w-8 border-t-3 border-white" />
        <img
          src="https://static.wixstatic.com/media/90beeb_6f7b87a0b85e4277b2ded98020da36bb~mv2.png/v1/fill/w_156,h_117,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Headstrong2_edited_edited.png"
          className="w-[200px]"
          alt="another HeadSTRONG"
        />
      </section>
    </Container>
  );
}

export default Home;
