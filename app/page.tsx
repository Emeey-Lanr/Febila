"use client";
import Image from "next/image";
import "@/styles/home.css";
import "@/styles/animation_home.css";
import book from "@/public/images/magazine.jpg";
import children from "@/public/images/children.jpg"
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store";
import { useEffect, useState } from "react";

import estate3 from "@/public/images/estate5.jpg";
import bitcoin from "@/public/images/bitcoin.jpg"
import farm1 from "@/public/images/land.jpg"
import farm2 from "@/public/images/farm2.jpg"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import misson from "@/public/images/hero1.png"
import {FaHospital, FaBook, FaWater, FaAnchor, FaArrowRight} from "react-icons/fa"

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);

  const timeoutFunc = (time: number) => {
    setTimeout(() => {
      setIndex(index + 1);
      if (index === heroData.data.length - 1) {
        setIndex(0);
      }
    }, time);
  };
  useEffect(() => {
    timeoutFunc(4000);
  });

  const heroData = useSelector((state: RootState) => state.hero.value);
  const heroIndicationBtn = (id: number) => {
    setIndex(id);
    timeoutFunc(4000);
  };
  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <div className="background_design1 bg-green-500"></div>
        <div className="hero_content items-center  border-t border-t-blue-100 md:block">
          <div className="py-20 mx-auto flex justify-center items-center md:w-full">
            <div className="w-full">
              <h1 className="text-4xl w-11/12 mx-auto py-2 text-center  text-grey-600 font-medium hero_text leading-20">
                UNLOCKING INIFINITE <br /> POSIBILITIES FOR{" "}
                <span className="text-green-500 font-bold text-5xl">YOU</span>
              </h1>
              <p
                className={`py-2 text-sm  w-11/12 mx-auto   leading-12 text-center text-gray-500`}
              >
                <span className="font-bold text-lg text-center">FEBILA</span> a
                gateway to endless opportunities and transformative experiences,{" "}
                <br />
                where every click brings you closer to the extraordinary, where
                your aspirations become reality
              </p>

              <div className="py-2 mt-6  w-11/12 mx-auto flex justify-center items-center">
                <button className="flex justify-between px-2 py-2 items-center w-40 h-10 rounded-full bg-green-500">
                  <span className="text-xs text-white w-4/5 font-bold text-center">
                    Contact Us
                  </span>
                  <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>

            <div className="background_design2"></div>
            <div className="background_design3"></div>
          </div>
        </div>

        <div className="border-t border-t-blue-100 w-full h-1 py-4" />
        {/* Welcome */}
        <div className="flex justify-center items-center h-24">
          <h1 className="text-xl">
            Welcome to{" "}
            <span className="text-4xl font-bold text-green-500">FEBILA</span>
          </h1>
        </div>
        <div className="about_details_div">
          <div className="about_details">
            <div className="flex justify-around items-center pb-20">
              <div className="flex items-center">
                <span></span>
                <span className="text-2xl italic font-bold text-gray-300 ">
                  Cryptocurrency
                </span>
              </div>
              <div className="flex items-center lg:px-20">
                <span></span>
                <span className="text-2xl italic font-bold text-gray-300 ">
                  Agriculture
                </span>
              </div>
              <div className="flex items-center lg:px-20">
              
                <span className="text-2xl italic font-bold text-gray-300 ">
                  Publishing
                </span>
              </div>
              <div className="flex  items-center lg:px-20">
             
                <span className="text-2xl italic font-bold text-gray-300 ">
                  Real-Estate
                </span>
              </div>

              <div className="flex items-center">
                <span></span>
                <span className="text-2xl italic font-bold text-gray-300 ">
                  Logistics & Transportation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center lg:block  lg:w-full ">
          <div className="w-1/2 lg:mx-auto lg:w-4/5 xsm:w-full ">
            <Image
              className="w-4/5  rounded-t-full mx-auto xsm:w-full"
              src={children}
              alt=""
            />
          </div>

          <div className="w-1/2 lg:w-11/12  lg:mx-auto lg:mt-10 sm:mx-auto  foundation_content">
            <div className="w-5/6 mx-auto sm:w-full">
              <h1 className="text-center leading-10 text-gray-600 text-4xl sm:text-center">
                <span className="text-green-500 font-bold">Febila</span>{" "}
                Foundation
              </h1>
              <p className="text-sm text-center leading-10 text-gray-600 py-8 lg:text-center">
                A beacon of hope committed to transforming lives and building a
                brighter future. Our foundation is dedicated to making a
                meaningful impact in crucial areas that shape the well-being of
                communities worldwide
              </p>
            </div>

            <div className="flex justify-around w-full lg:justify-between sm:block sm:w-full">
              <div className="bg-green-500 py-5 px-5 rounded-md w-2/5 sm:mx-auto sm:w-full foundation_content_info">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                    <FaBook className="text-green-500" />
                  </span>{" "}
                  <span className="text-2xl text-white pl-3">Education</span>
                </div>
                <div>
                  <p className="text-xs leading-10  text-justify text-white">
                    Education is a powerful tool for empowerment, we are
                    committed to bridging educational gaps and fostering a love
                    for learning.
                  </p>
                </div>
              </div>
              <div className="bg-white mt-4 py-5 px-5 rounded-md w-2/5  sm:w-full ">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center">
                    <FaHospital className="text-white" />
                  </span>{" "}
                  <span className="text-2xl text-gray-600 pl-3">Health</span>
                </div>
                <div>
                  <p className="text-xs leading-10  text-justify text-grey-500">
                    We believe that good health is the foundation for a
                    fulfilling life. We tirelessly work towards providing access
                    to quality healthcare.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-full mt-4 lg:justify-between sm:block">
              <div className="bg-white py-5 px-5 rounded-md w-2/5  sm:w-full ">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center">
                    <FaWater className="text-white" />
                  </span>{" "}
                  <span className="text-2xl text-gray-600 pl-3">Water</span>
                </div>
                <div>
                  <p className="text-xs leading-10  text-justify text-grey-500">
                    Water is life, and we recognize its essential role in
                    sustaining communities. Febila Foundation is dedicated to
                    ensuring access to clean and safe water sources.
                  </p>
                </div>
              </div>
              <div className="bg-white mt-4 py-5 px-5 rounded-md w-2/5 sm:w-full xsm:w-full">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-green-500 flex justify-center items-center">
                    <FaAnchor className="text-white" />
                  </span>{" "}
                  <span className="text-2xl text-gray-600 pl-3">
                    Poverty Alleviation
                  </span>
                </div>
                <div>
                  <p className="text-xs leading-10  text-justify text-grey-500">
                    Poverty creates barriers to progress, and the Febila
                    Foundation is committed to breaking those barriers through
                    targeted interventions, vocational training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 py-10 flex justify-around items-center lg:block lg:w-full estate_div">
          <div>
            <h1 className="text-4xl py-2  leading-14 lg:w-11/12  lg:mx-auto lg:text-center sm:text-left">
              <span className="font-bold text-green-500">Febila </span> Real
              Estate & <br />
              Associate
            </h1>
            <p className="text-sm leading-12 text-gray-600 lg:text-center lg:mx-auto lg:w-11/12 sm:text-left">
              Febila breathe life into edifice, we serve as helping hands{" "}
              <br className="xsm:hidden" /> for accountable mangement and
              selling of properties.
            </p>
            <div></div>
          </div>
          <div className="w-1/2 estate_div lg:w-11/12 lg:mx-auto">
            <div className="estate-background flex justify-center items-center">
              <button className="w-12 h-12 rounded-full bg-white">
                <span></span>
              </button>
            </div>
            <div className="estate-foreground">
              <Image className="img w-full h-full" src={estate3} alt="" />
            </div>
          </div>
        </div>

        {/* FEBILA FARMING */}
        <div className="flex w-full items-center mt-60 lg:block">
          <div className="w-1/2 lg:w-full">
            <div className="w-4/5 mx-auto farming_img_div">
              <Image
                src={farm1}
                className="w-full h-40 rounded-md object-cover img"
                alt=""
              />
            </div>
            <div className="w-4/5 mt-5 mx-auto farming_img_div">
              <Image
                src={farm2}
                className="w-full h-40 rounded-md object-cover img"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 lg:w-11/12  lg:mx-auto lg:mt-10">
            <h1 className="text-4xl leading-14 text-center w-4/5  lg:text-left lg:w-full">
              <span className="text-green-500 font-bold ">Febila</span> Farms
            </h1>
            <p className="text-sm w-4/5 py-5 leading-10 text-gray-600 text-center lg:mx-auto lg:w-full lg:text-justify">
              We believe in the power of agriculture to nourish communities and
              preserve the environment because agriculture is not just a
              practice but a commitment to sustainable and responsible farming
            </p>
            <div className="w-2/5 mx-auto flex items-center py-5 lg:w-full">
              <div className="w-2 h-2 rounded-md bg-green-500 mx-3"></div>
              <p className="text-sm w-11/12 text-gray-600  flex items-center">
                <span>
                  Uncover the potential of agricultural investment at Febila and
                  the goodies it brings
                </span>
              </p>
            </div>
            <div className="w-2/5 flex items-center py-5 lg:w-full lg:mx-auto">
              <div className="w-2 h-2 rounded-md bg-green-500 mx-3"></div>
              <p className="text-sm w-11/12 text-gray-500  flex items-center">
                <span>
                  We offer opportunities for individuals and businesses to be
                  part of our mission.
                </span>
              </p>
            </div>
            <div className="w-2/5 mx-auto flex items-center py-5 lg:w-full lg:mx-auto">
              <div className="w-2 h-2 rounded-md bg-green-500 mx-3"></div>
              <p className="text-sm w-11/12 text-gray-600  flex items-center">
                <span>
                  Not just as consumers but as partners in sustainable
                  agriculture
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Fashion */}
        <div className="mt-40 py-10 sm:py-0">
          <h1 className="text-center leading-14 text-4xl sm:text-left sm:mx-auto sm:w-11/12">
            {" "}
            <span className="text-green-500 font-bold">Febila</span> Fashion
          </h1>
          <p className="text-sm text-grey-600 text-center w-3/5 mx-auto py-2 sm:text-left sm:w-11/12 sm:leading-10">
            Empowering individuals to embrace their authenticity through
            thoughtfully curated collections that blend timeless elegance with
            contemporary flair
          </p>
        </div>
        <div className="w-full flex  mt-10 lg:block">
          <div className="w-1/2 flex justify-center items-center lg:w-full sm:block ">
            <div className="w-5/12 mx-auto h-96 rounded-md flex justify-center items-center fashion_img1 sm:w-11/12">
              <div>
                <p className="text-sm text-white text-center w-11/12 mx-auto py-2 ">
                  <span className="font-bold py-2">
                    Discover Your Style Identity{" "}
                  </span>
                  <br />
                  Find the perfect ensemble that resonates with your unique
                  identity
                </p>
                <div>
                  <button className="w w-36 text-white mt-2 h-10 bg-green-500 rounded-r-md">
                    .
                  </button>
                </div>
              </div>
            </div>
            <div className="w-5/12 mx-auto h-96 rounded-md flex justify-center items-center fashion_img2 sm:w-11/12 sm:mt-10">
              <div>
                <p className="text-sm text-white text-center w-11/12 mx-auto py-2">
                  <span className="font-bold py-2">
                    {" "}
                    Crafting Timeless Quality{" "}
                  </span>
                  <br />
                  Dedicated to providing not only stylish garments but also
                  enduring craftsmanship
                </p>
                <div>
                  <button className="w-36 text-white mt-2 h-10 bg-green-500 rounded-r-md">
                    .
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-center lg:w-full lg:mt-10 sm:block">
            <div className="w-5/12 mx-auto h-96 rounded-md flex justify-center items-center fashion_img3 sm:w-11/12">
              <div>
                <p className="text-sm text-white text-center w-11/12 mx-auto py-2">
                  <span className="font-bold py-2">
                    {" "}
                    Sustainability in Style
                  </span>
                  <br />
                  commitment to sustainability is reflected in every aspect of
                  our brand
                </p>
                <div>
                  <button className="w-36 text-white mt-2 h-10 bg-green-500 rounded-r-md">
                    .
                  </button>
                </div>
              </div>
            </div>
            <div className="w-5/12 mx-auto h-96 rounded-md flex justify-center items-center fashion_img4 sm:w-11/12 sm:mt-10">
              <div>
                <p className="text-sm text-white text-center w-11/12 mx-auto">
                  <span className="font-bold p py-2y-1">
                    {" "}
                    Future of Fashion
                  </span>{" "}
                  <br />
                  2elcome to a world where style meets expression, The journey
                  to redefine your style starts here
                </p>
                <div>
                  <button className="w-36 text-white mt-2 h-10 bg-green-500 rounded-r-md">
                    <span className="h-8 w-28  block"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center mt-40 py-10 md:block">
          <div className="w-1/2 md:w-11/12 md:mx-auto">
            <div className="w-4/5 mx-auto md:w-full">
              <h1 className="text-4xl leading-14">
                <span className="font-bold text-green-500">Febila </span>
                Cryptocurrency
              </h1>
              <p className="text-sm text-gray-600 py-10 leading-10">
                Febila crypto is a department that deals with the promotions and
                creations of new crypto projects, airdrops and all other crypto
                activities. There will be alot of golden opportunities in the
                department
              </p>
            </div>
          </div>
          <div className="w-1/2 md:w-11/12 md:mx-auto">
            <Image
              src={bitcoin}
              className="w-4/5 mx-auto rounded-md md:w-full "
              alt=""
            />
          </div>
        </div>

        {/* FEBILA PUBLISHING */}
        <div className="flex mt-40 justify-center items-center py-10 lg:block">
          <div className="w-2/6 flex justify-center items-center ">
            <div className="">
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20  lg:mb-0"
              />
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20 ml-20  lg:mb-0"
              />
            </div>
          </div>

          <div className="w-2/6 lg:w-4/5 lg:mx-auto sm:w-11/12">
            <h1 className="text-center text-4xl  leading-14 text-gray-600 py-3 sm:w-full sm:text-center">
              Unleash the Power of <br className="sm:hidden" /> Words with{" "}
              <span className="text-green-500 font-bold">Febila</span>
            </h1>
            <p className="text-center mb-10 text-sm leading-10 text-gray-600 lg:text-center  sm:text-justify">
              At FEBILA Publishing, we curate a diverse and thought-provoking
              collection of books that span a wide spectrum of genres and
              subjects. Our collection includes
            </p>
            <div className="flex xsm:block">
              <div className="mb-10">
                <div className="flex justify-center items-center">
                  <div className="h-4 w-4 bg-gray-300 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="font-medium px-2">Magazine</p>
                </div>
                <p className="text-center text-sm text-gray-600 leading-10">
                  Immerse in captivating stories, insightful articles, and
                  visually stunning features
                </p>
              </div>
              <div className="px-3 xsm:mb-10">
                <div className="flex justify-center items-center">
                  <div className="h-4 w-4  rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <p className="font-bold px-2">Literary Books</p>
                </div>
                <p className="text-center text-sm text-gray-600 leading-10">
                  Dive into the transformative power of literature at FEBILA
                  Publisher
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="mb-10">
                <div className="flex justify-center items-center">
                  <div className="h-4 w-4  rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <p className="font-bold px-2">Others</p>
                </div>
                <p className="text-center text-sm text-gray-600 leading-10">
                  Explore topics that captivate, <br /> curated to stimulate
                  your mind and imagination
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/6 flex justify-center items-center lg:w-full lg:justify-end">
            <div>
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20 ml-20 lg:mb-0 lg:ml-0 lg:block"
              />
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20 lg:mb-0 "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:block">
          <div className="w-1/2 items-center lg:w-full">
            <h1 className="text-4xl py-10 w-4/5 mx-auto font-bold text-green-500 lg:w-11/12 lg:text-center">
              Our Mission
            </h1>
            <p className="text-sm text-gray-600 leading-12 w-4/5 mx-auto lg:w-11/12 lg:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis consectetur necessitatibus eligendi? Libero dolor
              corporis nam? Debitis ducimus perspiciatis accusamus?
            </p>
            <div className="w-4/5 mx-auto">
              <div className="flex items-center mt-10 lg:justify-center">
                <span className="flex w-4 h-4 bg-green-200  justify-center items-center rounded-full mr-3">
                  <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p className="text-xs leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, consequuntur.
                </p>
              </div>
              <div className="flex items-center mt-10 lg:justify-center">
                <span className="flex w-4 h-4 bg-green-200  justify-center items-center rounded-full mr-3">
                  <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p className="text-xs leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, consequuntur.
                </p>
              </div>
              <div className="flex items-center mt-10 lg:justify-center">
                <span className="flex w-4 h-4 bg-green-200  justify-center items-center rounded-full mr-3">
                  <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p className="text-xs leading-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, consequuntur.
                </p>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="flex justify-between px-2 py-2 mt-10 items-center w-40 h-10 rounded-full bg-green-500">
                  <span className="text-xs text-white w-4/5 text-center">
                    Learn More
                  </span>
                  <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                    <FaArrowRight className="rotate-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center rounded-full">
            <div>
              <Image src={misson} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Sidebar />
    </>
  );
};

export default Home;
