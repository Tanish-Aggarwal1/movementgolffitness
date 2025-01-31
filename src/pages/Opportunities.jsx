import React from 'react'
import { Container } from "../Components/index";

function Opportunities() {
  return (
    <Container>
      <section className="font-playfair flex flex-col items-center gap-2 bg-gray-500 pt-6">
        
        <hr className="my-4 w-8 border-t-3 border-white" />
        <h1 className="text-2xl font-bold text-white">Mission</h1>
        <p className="w-[90%] text-center text-xl text-white">
          Enhance the golfing community by enabling players to improve their
          game, play pain-free, and enjoy the sport longer.
        </p>
        </section>
        <section>
        <h1 className="font-playfair text-2xl font-bold text-white">
          Sponsorship Opportunity
        </h1>
        
        <hr className="my-4 w-8 border-t-3 border-white" />

        <div className="mb-10 flex w-[95%] text-center justify-around gap-10">
          <div className="flex-col min-w-[30%] items-center justify-center border-2  py-3">
            <h2>Professional athlete</h2>
            
              <p>Connect with supporting business</p>
            
          </div>
          <div className="flex-col min-w-[30%] items-center justify-center border-2  py-3">
            <h2>Business Professional</h2>
            <p>Support the Junior Athlete programs. Connect with professional athletes.</p>
          </div>
          <div className="flex-col min-w-[30%] items-center justify-center border-2  py-3">
            <h2>Junior Athlete</h2>
            <p>Apply for free consulting and programming.</p>
          </div>
        </div>
        <p className="flex items-center justify-center border-2  mb-10 px-3 py-3 text-center ">
          Click for more information on sponsorship opportunities.
        </p>
      </section>
    </Container>
  )
}

export default Opportunities
