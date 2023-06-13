import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({children}){
    return(
        <div>
        <Navbar>
        </Navbar>
        
        <div>{children}</div>
        <Footer/>
        </div>
    )
    
}
export default MainLayout