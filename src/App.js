import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import MainLayout from './layout/MainLayout';

function App() {
  const handleDonateClick = () => {
    window.location.assign('https://donate.stripe.com/test_8wM7wt3XH43TbrafYY');
  };
  return (
    <MainLayout>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:flex-row w-full h-full">
          <div className="flex flex-col w-full md:w-1/2 mt-24 text-white flex justify-center items-center font-[sans] text-3xl">
            <h2 className="text-center mb-6 text-4xl animated-text">
              A Heaven for Strays, A Home for Hearts
            </h2>
            <p className="text-center italic mb-12 ">
              Join us in making tails wag again!
            </p>
            <div className="flex flex-col items-center">
              <button
                className="bg-white hover:bg-red-700 text-black font-bold py-2 px-4 md:w-64  lg:w-64 rounded-full sm:w-32 sm:px-6 sm:py-3 mb-2"
                onClick={handleDonateClick}
              >
                Donate Now
              </button>
              <br />
              <p className="inv text-center ">Invest in HOPE!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-24 bg-black">
            <Carousel
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
            >
              <div>
                <img src="dog1.png" alt="Slide 1" />
              </div>
              <div>
                <img src="dog2.png" alt="Slide 2" />
              </div>
              <div>
                <img src="dog5.png" alt="Slide 3" />
              </div>
              <div>
                <img src="dog6.png" alt="Slide 4" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;