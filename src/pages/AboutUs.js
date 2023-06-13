import React from 'react'
import MainLayout from '../layout/MainLayout'

const AboutUs = () => {
  return (
    <MainLayout>
        <div className="bg-black flex justify-center items-center py-16 mt-16">
      <div className="container mx-auto px-4 md:flex md:justify-between items-center">
        <div className="md:w-1/2">
          <img src="dog7.png" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
          <h2 className="text-white text-4xl font-bold mb-4">About Us</h2>
          <p className="f text-gray-700 leading-relaxed">
          Founded by<span className='text-red-500'> VASU BHASIN</span>, at Furry Care, we believe that every dog deserves a loving home
           and the care they need to live a happy, healthy life. We are a 
           passionate team dedicated to providing exceptional care for stray
            dogs and helping them find their forever homes. 
            Our mission is to create a safe and nurturing environment for these furry friends, 
            ensuring they receive the love, attention, and medical support they need to thrive.
          </p><br/>
          <h3 className='text-white text-xl font-bold'>Our Journey</h3>
          <p className="f text-gray-700 leading-relaxed mt-4">
          Furry Care was founded with a simple yet profound goal in mind: 
          to make a difference in the lives of stray dogs. Our journey began 
          when a group of like-minded individuals recognized the urgent need 
          for a dedicated organization that would provide a safe haven for these 
          neglected and abandoned animals. With a shared passion for animal welfare, 
          we set out to create a haven where compassion meets canines.
          </p><br/>
          <h3 className='text-white text-xl font-bold'>How you can help:</h3>
          <p className="f text-gray-700 leading-relaxed mt-4">
          At Furry Care, we believe that compassion knows no bounds. You too can make a difference in the lives of these beautiful creatures. 
          Whether through volunteering, fostering, 
          donating, or spreading the word about our cause, your support can help us 
          provide the love and care these stray dogs desperately need.
          </p>
          <p className="text-lg text-red-500 leading-relaxed mt-4">
          Join us in our mission to create a world where every dog is cherished and cared for.
           Together, we can make tails wag and bring joy to the lives of countless furry friends.
            </p>
        </div>
      </div>
    </div>
      
    </MainLayout>
    )
}

export default AboutUs