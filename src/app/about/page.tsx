import React from "react";
import Image from "next/image";
import style from "../style/about.module.css"

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl w-full p-8">
        <h1 className="text-5xl font-bold text-center mb-8 mt-[20]">About Us</h1>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a passionate team of developers, designers, and strategists dedicated 
              to creating beautiful, user-friendly, and innovative digital solutions. With 
              years of experience in web development, we specialize in crafting exceptional 
              portfolios, websites, and applications that leave a lasting impression.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether its a personal website or a large-scale project, we focus on delivering 
              high-quality, scalable, and results-driven solutions. Our mission is to bridge 
              the gap between creativity and technology, ensuring seamless experiences for our 
              clients and their users.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-96">
            <Image
              src="/images/noorr.jpg" // Ensure this image exists in the public folder
              alt="Our Team"
              layout="fill"
              className={`object-cover ${style.image}`}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
            To empower individuals and businesses with cutting-edge digital experiences that 
            inspire and drive success.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">My Mission</h3>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
          I aim to empower businesses and individuals by crafting websites and applications 
          that dont just meet expectations but exceed them. Whether its a sleek portfolio, 
          a thriving e-commerce platform, or a custom web application, my goal is to deliver 
          work that drives engagement and leaves a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
}
