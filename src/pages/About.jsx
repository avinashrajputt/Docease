import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            omnis commodi natus culpa sed. Pariatur quasi nihil voluptas, nemo
            laudantium repudiandae eius nobis fugiat ad iure quis fuga, maxime
            sint?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            exercitationem et eveniet voluptatibus. Quo repudiandae voluptatem
            officiis? Nihil necessitatibus placeat odio, beatae voluptas,
            voluptatibus ex, facilis accusantium fuga facere doloribus.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            accusantium sunt assumenda adipisci laudantium voluptatibus quia
            veritatis ex sequi placeat omnis, labore voluptatem rem blanditiis
            quisquam atque reprehenderit doloribus illum!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-radious px-10 md:px-16 py-8 sm:py-16 flex flex:-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficient</b>
          <p>Streamlined appointment scheduling that fits into busy lifestyle</p>
        </div >
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex:-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex:-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Tailored recommendation and reminder to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
