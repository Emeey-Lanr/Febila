"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/about-us.css";
import Image from "next/image";
import taiwo from "@/public/images/taiwo.jpg";
import impact from "@/public/images/impact.jpg";
import goals from "@/public/images/goals.jpg";
import Sidebar from "@/components/Sidebar";
const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-80 flex justify-center items-center">
        <h1 className="text-center text-6xl text-gray-600">About Us</h1>
      </div>

      <main className="w-full bg-green-600 flex justify-center  py-10 sm:block">
        <div className="w-[30%] sm:w-[90%] sm:mx-auto">
          <h2 className="font-bold text-white text-4xl py-10">Our Mission</h2>
        </div>
        <div className="w-[60%] sm:w-[90%] sm:mx-auto">
          <p className="text-white ">
            Febila prioritizes providing critical resources to underserved
            communities. We address health disparities, water scarcity, and
            educational limitations by supporting medical facilities, clean
            water initiatives, and educational programs. Our goal is to create a
            foundation for a better life.
          </p>
          <p className="text-white mt-20">
            We believe a strong economy empowers individuals and communities.
            Through our diverse business ventures in real estate, fashion,
            forex, and book publishing, we create jobs, support economic growth,
            and generate resources to fuel our philanthropic efforts.
          </p>
        </div>
      </main>
      <main className="w-full  flex justify-center overflow-hidden  relative sm:block">
        <Image src={impact} alt="" className="w-full absolute object-cover" />
        <div className="w-full h-full bg-[#000000ac] absolute"></div>
        <div className="w-[30%] relative py-10 sm:w-[90%] sm:mx-auto">
          <h2 className="font-bold text-white text-4xl">Our Vision</h2>
        </div>
        <div className="w-[60%] relative py-10 sm:w-[90%] sm:mx-auto">
          <p className="text-white ">
            We envision a future where empowered individuals and communities
            become self-sufficient and create a ripple effect of positive
            change. We believe in fostering local leadership and building
            capacity for long-term sustainability.
          </p>
          <p className="text-white mt-20">
            We work towards bridging the gap between those with access to
            resources and those facing hardship. Through strategic partnerships
            and innovative solutions, we strive to create a more equitable world
            where everyone has the opportunity to thrive.
          </p>
        </div>
      </main>
      <div className="w-full  flex justify-center  py-10 sm:block">
        <div className="w-[30%] sm:w-[90%] sm:mx-auto">
          <h2 className="font-bold text-gray-600 text-4xl py-10">Our Values</h2>
        </div>
        <div className="w-[60%] sm:w-[90%] sm:mx-auto">
          <p className="text-gray-600 ">
            We stand for enabling individuals and communities to reach their
            full potential. We believe access to essential resources like
            healthcare, education, and clean water is fundamental for
            self-sufficiency and thriving.
          </p>
          <p className="text-gray-600 mt-20">
            We are committed to creating a positive and lasting impact, both
            through our philanthropic work and responsible business practices.
            We believe in using resources wisely and fostering a healthy planet
            for future generations.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-center text-2xl">Meet The Team</h3>
        <div className="w-full flex justify-center mt-10 sm:grid sm:grid-cols-2">
          <div className="relative overflow-hidden h-[250px] w-[50%] sm:w-full">
            <Image
              src={taiwo}
              alt=""
              className="w-full h-[250px] absolute object-cover"
            />
            <div className="w-full h-full bg-[#000000ac] absolute"></div>
            <p className="text-lg font-bold relative text-center top-[100px]  text-white">
              Oluokun Taiwo
            </p>
            <p className="font-sm relative text-center top-[100px]  text-white">
              Manager
            </p>
          </div>
          <div className="relative overflow-hidden h-[250px] w-[50%] sm:w-full">
            <Image
              src={goals}
              alt=""
              className="w-full h-[250px] absolute object-cover"
            />
            <div className="w-full h-full bg-[#000000ac] absolute"></div>
            <p className="text-lg  font-bold relative  top-[100px] text-white text-center">
              Oluokun Taiwo
            </p>
            <p className="font-sm  relative text-white top-[100px]  text-center">
              Product Manager
            </p>
          </div>
          <div className="relative overflow-hidden h-[250px] w-[50%] sm:w-full">
            <Image
              src={goals}
              alt=""
              className="w-full h-[250px] absolute object-cover"
            />
            <div className="w-full h-full bg-[#000000ac] absolute"></div>
            <p className="text-lg font-bold text-white text-center relative top-[100px]">
              Oluokun Taiwo
            </p>
            <p className="text-white text-center relative top-[100px]">Media</p>
          </div>
          <div className="relative overflow-hidden h-[250px] w-[50%] sm:w-full">
            <Image
              src={goals}
              alt=""
              className="w-full h-[250px] absolute object-cover"
            />
            <div className="w-full h-full bg-[#000000ac] absolute"></div>
            <p className="text-lg font-bold relative text-white text-center top-[100px]">
              Oluokun Taiwo
            </p>
            <p className="font-sm relative text-white text-center top-[100px]">
              CTO
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
