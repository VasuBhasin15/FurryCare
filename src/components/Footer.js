import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto py-4 px-6 text-center"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Furry Care</h3>
            <ul>
              <li className="mb-2"><Link to="/AboutUs">About</Link></li>
              <li className="mb-2"><Link to="/ContactUs">Contact</Link></li>
              <li className="mb-2"><Link to="/">Join us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Work</h3>
            <ul>
              <li className="mb-2"><a href="#">Active Campaigns</a></li>
              <li className="mb-2"><a href="#">Successful Campaigns</a></li>
              <li className="mb-2"><a href="#">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <ul>
              <li className="mb-2"><a href="#"><ion-icon name="logo-facebook"></ion-icon> Facebook</a></li>
              <li className="mb-2"><a href="#"><ion-icon name="logo-twitter"></ion-icon> Twitter</a></li>
              <li className="mb-2"><a href="#"><ion-icon name="logo-instagram"></ion-icon> Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="">&copy; 2023 FurryCare. All rights reserved.</p> 
      </div>
    </footer>
  );
};

export default Footer;
