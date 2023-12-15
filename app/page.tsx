"use client";
import Image from "next/image";
import "@/styles/home.css";
import "@/styles/animation_home.css";
import book from "@/public/images/magazine.jpg";
import hands from "@/public/icons/hand.svg";
import invest from "@/public/icons/invest.svg";
import house from "@/public/icons/house.svg";
import land from "@/public/icons/land.svg";
import arrow from "@/public/icons/arrow.svg";
import wheel from "@/public/images/wheel.png";
import car from "@/public/images/cara.png";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store";
import { useEffect, useState } from "react";

import { changeInfo } from "@/Redux/constituents/hero";
import estate1 from "@/public/images/estate3.jpg";
import estate2 from "@/public/images/estate4.jpg";
import estate3 from "@/public/images/estate5.jpg";
import estate4 from "@/public/images/estate6.jpg";

import mission from "@/public/images/mission.jpg";
import client1 from "@/public/images/client1.png";
import client2 from "@/public/images/client2.jpg";
import client3 from "@/public/images/client3.jpg";
import client4 from "@/public/images/client4.jpg";

import { exitOpenModal } from "@/Redux/constituents/errorSuccessModal";

import Footer from "@/components/Footer";

import Link from "next/link";
import { changeSidebar } from "@/Redux/constituents/sidebar";
import useRouter from "next/router"
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [index, setIndex] = useState<number>(0);
  const [btnStatus, setBtnStatus] = useState<boolean>(false);
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
   <Footer/>
      <div>
        {/* Hero Section */}
        <div className="hero flex justify-center items-center py-20 border-t border-t-blue-100 md:block">
          <div className="w-2/4 flex justify-center items-center md:w-full">
            <div className="w-4/5 md:w-full">
              <h1 className="text-4xl py-2   text-gray-900 font-medium hero_text leading-20 md:text-center">
                UNLOCKING INIFINITE <br /> POSIBILITIES FOR{" "}
                <span className="text-blue-600 font-bold text-5xl">YOU</span>
              </h1>
              <p
                className={`py-2  leading-12 text-gray-600 md:text-center md:w-4/5 md:mx-auto`}
              >
                <span className="text-blue-600 font-bold text-lg ">FEBILA</span>{" "}
                a gateway to endless opportunities and transformative
                experiences, where every click brings you closer to the
                extraordinary, where your aspirations become reality
              </p>
              <div className="py-2 md:flex md:justify-center md:items-center">
                <button
                  onClick={() => router.push("/contact")}
                  className="flex justify-between px-2 py-2 items-center w-40 h-10 rounded-full bg-blue-600"
                >
                  <span className="text-xs text-white w-4/5 text-center">
                    Contact Us
                  </span>
                  <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                    <Image
                      className="rotate-6 rounded-md w-4"
                      src={arrow}
                      alt=""
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/4 flex justify-around items-center md:w-full md:mt-32">
            <div
              className="w-full border-1 border-blue-100 rounded-md flex justify-center items-center"
              style={{ height: "500px" }}
            >
              <div className="w-4/5 mx-auto">
                <Image
                  style={{ height: "400px" }}
                  className={`w-full  hero-img-${index} object-cover rotate-6  rounded-md`}
                  src={heroData.data[index].img}
                  alt=""
                  height={500}
                />
              </div>
            </div>

            <div>
              {heroData.data.map((data, id) => (
                <button
                  key={id}
                  className={`w-2 h-40 block border border-blue-600 ${
                    id === 0 && "rounded-t-full"
                  } ${id === 2 && "rounded-b-full"} ${
                    id === index && "bg-blue-600"
                  }`}
                  onClick={() => heroIndicationBtn(id)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-t-blue-100 w-full h-1 py-4" />
        {/* Welcome */}
        <div className="flex justify-center items-center h-24">
          <h1 className="text-xl">
            Welcome to{" "}
            <span className="text-4xl font-bold text-blue-600">FEBILA</span>
          </h1>
        </div>

        {/* Foundation */}
        <div className="py-10">
          <div className="foundation">
            <div className="flex justify-center items-center foundation_content">
              <div className="w-2/5 lg:w-full">
                <h1 className="text-4xl text-center font-bold text-white">
                  <span className="text-blue-600">FEBILA</span> FOUNDATION
                </h1>
                <h1 className="text-white text-2xl text-center py-4">
                  Helping Lives, Our Utmost Importance
                </h1>
                <p className="text-center text-white text-sm leading-10 lg:w-4/5 lg:mx-auto">
                  Our mission is to help people in need reach their full
                  potential. We do this by providing them with the resources and
                  support they need to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Foundation */}

          <div className="flex justify-center items-center lg:block">
            <div className="py-10 bg-blue-600 w-2/4 flex justify-around items-center lg:w-full msm:block">
              <div className="w-2/6  msm:w-4/5 msm:mx-auto msm:py-5">
                <div className="w-full flex ">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <h1 className="w-full mx-1 font-medium  rounded-md text-white text-xl py-2 ">
                    Education
                  </h1>
                </div>
                <div className="w-full my-1">
                  <p className="text-white text-xs leading-10 text-justify">
                    Education they say is the key to unlocking pontetials.
                    Febila acts as the source to getting the key for some who
                    are aren't packaged enough to afford to get one
                  </p>
                </div>
                <div>
                  <div className="py-2">
                    <button className="flex justify-between px-2 py-2 items-center w-full h-10 rounded-full border-2 border-white">
                      <span className="text-xs text-white  text-center">
                        Donate
                      </span>
                      <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                        <Image src={arrow} className="w-2" alt="" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-2/6  msm:w-4/5 msm:mx-auto msm:py-5">
                <div className="w-full flex ">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <h1 className="w-full mx-1 font-medium  rounded-md text-white text-xl py-2 ">
                    Health
                  </h1>
                </div>
                <div className="w-full my-1">
                  <p className="text-white text-xs leading-10 text-justify">
                    Health is wealth but do you know not everybody gets to enjoy
                    the wealth, health offers? Febila is on a campaign to make
                    it accesible to all
                  </p>
                </div>
                <div>
                  <div className="py-2">
                    <button className="flex justify-between px-2 py-2 items-center w-full h-10 rounded-full border-2 border-white">
                      <span className="text-xs text-white  text-center">
                        Donate
                      </span>
                      <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                        <Image src={arrow} className="w-2" alt="" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 w-2/4 flex justify-around items-center lg:w-full msm:block">
              <div className="w-2/6  msm:w-4/5 msm:mx-auto msm:py-5">
                <div className="w-full flex ">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <h1 className="w-full mx-1 font-medium  rounded-md text-geay-700 text-xl py-2 ">
                    Water
                  </h1>
                </div>
                <div className="w-full my-1">
                  <p className="text-gray-700 text-xs leading-10 text-justify">
                    Water is life, but some don't have access to it. One of our
                    core mission at FEBILA is to make water accesible to those
                    in need of it
                  </p>
                </div>
                <div>
                  <div className="py-2">
                    <button className="flex justify-between px-2 py-2 items-center w-full h-10 rounded-full bg-blue-600">
                      <span className="text-xs text-white  text-center">
                        Donate
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-2/6  msm:w-4/5 msm:mx-auto msm:py-5">
                <div className="w-full flex ">
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-s-2xl"></div>
                  </div>
                  <h1 className="w-full mx-1 font-medium  rounded-md text-geay-700 text-xl py-2 ">
                    Poverty Alleviation
                  </h1>
                </div>
                <div className="w-full my-1">
                  <p className="text-gray-700 text-xs leading-10 text-justify">
                    we support initiatives that provide economic opportunities,
                    job training, and resources to individuals and communities
                    in need
                  </p>
                </div>
                <div>
                  <div className="py-2">
                    <button className="flex justify-between px-2 py-2 items-center w-full h-10 rounded-full bg-blue-600">
                      <span className="text-xs text-white  text-center">
                        Donate
                      </span>
                      <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                        <Image src={arrow} className="w-2" alt="" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-t-blue-100 w-full h-1 py-10" />
        <div className="w-11/12 mx-auto sm:mx-0">
          <h1 className="text-4xl text-center font-semibold ml-10">
            <span className="text-blue-600 ">FEBILA</span> Real Estate
          </h1>

          <p className="leading-14  text-center text-gray-600 ml-9 mb-10 ">
            Discover Your Dream Home with FEBILA Real Estate{" "}
            <span className="text-4xl font-bold text-blue-600">&</span> <br />
            find the perfect property that matches your vision and investment
            goals. Whether
          </p>
        </div>
        <div className="flex py-20 lg:block lg:py-0 lg:pb-10 lg:w-full">
          <div className="w-2/4  flex justify-center lg:mx-auto  md:w-4/5 md:mx-auto md:py-4 sm:w-full">
            <div className=" flex rotate-6 w-4/5 estate_img_div ">
              <div className="h-full w-full mx-1">
                <Image
                  className="block object-cover mb-3 rounded-md"
                  style={{ height: "70%" }}
                  src={estate1}
                  alt=""
                />
                <Image
                  className="block object-cover rounded-md"
                  style={{ height: "20%" }}
                  src={estate2}
                  alt=""
                />
              </div>
              <div className="h-full w-full mx-1">
                <Image
                  className="block object-cover mb-3 rounded-md"
                  style={{ height: "30%" }}
                  src={estate3}
                  alt=""
                />
                <Image
                  className="block object-cover rounded-md"
                  style={{ height: "60%" }}
                  src={estate4}
                  alt=""
                />
              </div>
              <div className="h-full w-full mx-1">
                <Image
                  className="block object-cover mb-3 rounded-md"
                  style={{ height: "50%" }}
                  src={estate2}
                  alt=""
                />
                <Image
                  className="block object-cover rounded-md"
                  style={{ height: "40%" }}
                  src={estate3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-2/4 flex justify-center items-center  rotate-8 py-8 mx-auto lg:w-full ">
            <div className="w-4/5   sm:w-full">
              <div className="w-4/5 flex justify-between mb-10 lg:mx-auto sm:w-full xsm:block">
                <div className="bg-white py-3 px-1 mx-3 rotate-2 rounded-md sm:mb-10">
                  <div className="w-20 mx-auto h-20 py-3  flex justify-center items-center  rounded-full bg-red-100">
                    <Image src={land} className="w-14 h-14" alt="" />
                  </div>
                  <div className="py-2">
                    <p className="font-bold text-center leading-10 text-gray-800 ">
                      Land
                    </p>
                    <p className="text-sm text-center leading-10 text-gray-500">
                      Looking for a land to build your dream home. Get one from
                      Febila at a very affordable cost
                    </p>
                  </div>
                </div>
                <div className="bg-white py-3 px-1 mx-3 rotate-2 rounded-md">
                  <div className="w-20 mx-auto h-20 py-3  flex justify-center items-center  rounded-full bg-yellow-100">
                    <Image src={invest} className="w-14 h-14" alt="" />
                  </div>
                  <div className="py-2">
                    <p className="font-bold text-center leading-10 text-gray-800">
                      Invest
                    </p>
                    <p className="text-sm text-center leading-10 text-gray-500">
                      Do you know you can also invest in our FEBLIA's Real
                      Estate and make money? What you looking for, get locked in
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-4/5 flex justify-between mb-10 lg:mx-auto sm:w-full xsm:block">
                <div className="bg-white py-3 px-1 mx-3 rotate-2 rounded-md sm:mb-10">
                  <div className="w-20 mx-auto h-20 py-3  flex justify-center items-center  rounded-full bg-green-100">
                    <Image src={house} className="w-14 h-14" alt="" />
                  </div>
                  <div className="py-2">
                    <p className="font-bold text-center leading-10 text-gray-800 ">
                      Properties
                    </p>
                    <p className="text-sm text-center leading-10 text-gray-500">
                      Looking for an hostel, or a house, we can help you get one
                      at ease and at a very affordable price without having to
                      stress yourself
                    </p>
                  </div>
                </div>
                <div className="bg-white py-3 px-1 mx-3 rotate-2 rounded-md">
                  <div className="w-20 mx-auto h-20 py-3  flex justify-center items-center  rounded-full bg-blue-100">
                    <Image src={hands} className="w-14 h-14" alt="" />
                  </div>
                  <div className="py-2">
                    <p className="font-bold text-center leading-10 text-gray-800">
                      Land
                    </p>
                    <p className="text-sm text-center leading-10 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci, molestias?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-r border-t-blue-100 w-full h-1 " />

        <div className="py-20 trans_div">
          <div className="w-full flex  items-end trans_logistics">
            <div className="car_div mx-6">
              <Image src={car} alt="" className="car" />
              <Image src={wheel} alt="" className="wheel1" />
              <Image src={wheel} alt="" className="wheel2" />
              <p className="febila_car_text">
                FEBILA <br />
                <span>Logistics</span>
              </p>
            </div>
            <div className="car_div mx-6">
              <Image src={car} alt="" className="car" />
              <Image src={wheel} alt="" className="wheel1" />
              <Image src={wheel} alt="" className="wheel2" />
              <p className="febila_car_text text-center">
                FEBILA <br />
                <span> Transportation</span>
              </p>
            </div>
          </div>

          <div className="w-full mx-auto flex justify-center items-center py-10">
            <div>
              <h1 className="text-4xl text-center font-semibold sm:text-2xl ">
                <span className="text-blue-600 font-semibold">FEBILA</span>, an
                Efficiency in Motion
              </h1>
              <p className="text-center mx-auto text-sm leading-10 ">
                Our transportation and logistics services ensure the seamless
                movement of goods and people. <br /> With our commitment to
                reliability, your cargo arrives on time, and your journey is
                hassle-free.
              </p>
            </div>
          </div>
        </div>
        {/* Fashion */}
        <div className="py-10">
          <div className="fashion_back_img">
            <div className="flex justify-center items-center fashion_back_img_cover ">
              <h1 className="text-white text-center text-3xl">
                Elevate Your Style with{" "}
                <span className="text-blue-600 font-semibold">FEBILA</span>'s
                Exclusive Clothing Brand
              </h1>
            </div>
          </div>
          <div className="w-4/5 ">
            <h1 className="text-xl font-semibold ml-20 py-8 text-blue-600 sm:text-center">
              Discover Unparalleled Style
            </h1>
          </div>
          <div className="w-4/5 mx-auto fashion_collection mt-4 ">
            <div className="collection_content1 rounded-md flex justify-center items-end py-2 px-2 md:mb-4">
              <div className="w-11/12  text-white   rounded-sm  flex justify-center items-center">
                All
              </div>
            </div>
            <div className="collection_content2 rounded-md flex justify-center items-end py-2 px-2 md:mb-4">
              <div className="w-11/12  text-white   rounded-sm  flex justify-center items-center">
                Men
              </div>
            </div>
            <div className="collection_content3 rounded-md flex justify-center items-end py-2 px-2 md:mb-4">
              <div className="w-11/12  text-white   rounded-sm  flex justify-center items-center">
                Women
              </div>
            </div>
          </div>
        </div>
        {/* FEBILA PUBLISHING */}
        <div className="flex justify-center items-center py-10 lg:block">
          <div className="w-2/6 flex justify-center items-center ">
            <div className="">
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20 lg:mb-0"
              />
              <Image
                src={book}
                alt=""
                className="w-40 h-40 object-cover mb-20 ml-20 lg:mb-0"
              />
            </div>
          </div>

          <div className="w-2/6 lg:w-4/5 lg:mx-auto">
            <h1 className="text-center text-3xl leading-15 font-semibold py-3 ">
              Unleash the Power of <br /> Words with{" "}
              <span className="text-blue-600">FEBILA</span>
            </h1>
            <p className="text-center mb-10 text-sm leading-10 text-gray-400">
              At FEBILA Publisher, we curate a diverse and thought-provoking
              collection of books that span a wide spectrum of genres and
              subjects. Our collection includes
            </p>
            <div className="flex xsm:block">
              <div className="mb-10">
                <div className="flex justify-center items-center">
                  <div className="h-4 w-4 bg-gray-300 rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="font-medium px-2">Magazine</p>
                </div>
                <p className="text-center text-sm text-gray-400 leading-10">
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
                <p className="text-center text-sm text-gray-400 leading-10">
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
                <p className="text-center text-sm text-gray-400 leading-10">
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
        {/* Our Mission */}
        <div className="flex  items-center py-10 lg:block">
          <div className="w-2/4 lg:w-4/5 lg:mx-auto md:w-11/12">
            <h1 className="text-3xl text-center font-semibold py-3 lg:text-center">
              OUR MISSION
            </h1>

            <div className="py-3">
              <div className="flex justify-center items-center mb-10 lg:justify-center">
                <div className="h-4 w-4 bg-blue-600 rounded-full flex justify-center items-center md:w-4 md:h-4"></div>
                <div>
                  <p className="text-sm px-3">
                    Our transportation and logistics services ensure the
                    seamless <br />
                    movement of goods and people. With our commitment to
                    reliability, <br /> your cargo arrives on time, and your
                    journey is hassle-free.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mb-10 lg:justify-center">
                <div className="w-2  bg-black rounded-full md:w-2 h-2"></div>

                <div>
                  <p className="text-sm px-3">
                    FEBILA was founded on a simple yet profound mission: to
                    empower <br /> individuals and businesses to reach their
                    full potential. We believe <br /> that every dream, no
                    matter how
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="flex justify-between px-2 py-2 items-center w-40 h-10 rounded-full bg-blue-600">
                  <span className="text-xs text-white w-4/5 text-center">
                    Contact Us
                  </span>
                  <span className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
                    <Image src={arrow} alt="" className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/4 flex justify-center items-center lg:mx-auto lg:w-4/5  sm:w-full">
            <div className="w-4/5  rounded-full  flex justify-center items-center lg:rounded-none lg:my-3 sm:w-11/12">
              <Image
                src={mission}
                className="w-2/4 rounded-md mission_img object-cover rotate-6 lg:w-4/5 sm:w-11/12"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* What our client is saying about us */}
        <div className="py-10 client-testimony">
          <h1 className="text-center text-2xl py-11">
            Hear what people are saying about{" "}
            <span className="text-blue-600 font-semibold text-4xl">FEBILA</span>
          </h1>
          <div className="sayings">
            <div className="xsm:mb-4">
              <div className="border border-gray-300 py-2  rounded-md mx-2">
                <div className="w-28 h-28 mx-auto ">
                  <Image
                    src={client1}
                    className="w-28 h-28  rounded-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-center py-1 text-gray-500 text-sm">
                  Zainab Suliyat
                </p>
                <div className="bg-blue-600  w-4/5 mx-auto h-8 rounded-full flex justify-center items-center my-1">
                  <p className="text-white text-sm">Student @ Ife</p>
                </div>
              </div>
              <div className="my-2 rounded-md">
                <div className="w-4 h-6 ml-3 bg-gray-200 skew-x-12 rounded-tl-full">
                  {" "}
                </div>
                <div className="w-full py-2 bg-gray-200 rounded-md">
                  <p className="text-sm text-gray-500 w-11/12 mx-auto text-justify leading-10">
                    Febila has transformed my life and has helped in my growth
                  </p>
                </div>
              </div>
            </div>
            <div className="xsm:mb-4">
              <div className="my-2 rounded-md">
                <div className="w-full py-2 bg-gray-200 rounded-md">
                  <p className="text-sm text-gray-500 w-11/12 mx-auto text-justify leading-10">
                    Febila is everything you need in your life
                  </p>
                </div>
                <div className="w-4 h-6 ml-3 bg-gray-200 skew-x-12 rounded-bl-full">
                  {" "}
                </div>
              </div>
              <div className="border border-gray-300 py-2  rounded-md mx-2">
                <div className="w-28 h-28 mx-auto ">
                  <Image
                    src={client2}
                    className="w-28 h-28  rounded-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-center py-1 text-gray-500 text-sm">
                  Sandra Tosin
                </p>
                <div className="bg-blue-600  w-4/5 mx-auto h-8 rounded-full flex justify-center items-center my-1">
                  <p className="text-white text-sm">CTO @ fresh</p>
                </div>
              </div>
            </div>
            <div className="xsm:mb-4">
              <div className="border border-gray-300 py-2  rounded-md mx-2">
                <div className="w-28 h-28 mx-auto ">
                  <Image
                    src={client3}
                    className="w-28 h-28  rounded-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-center py-1 text-gray-500 text-sm">
                  Muyiwa Kilafen
                </p>
                <div className="bg-blue-600  w-4/5 mx-auto h-8 rounded-full flex justify-center items-center my-1">
                  <p className="text-white text-sm">Ceo @ meta</p>
                </div>
              </div>
              <div className="my-2 rounded-md">
                <div className="w-4 h-6 ml-3 bg-gray-200 skew-x-12 rounded-tl-full">
                  {" "}
                </div>
                <div className="w-full py-2 bg-gray-200 rounded-md">
                  <p className="text-sm text-gray-500 w-11/12 mx-auto text-justify leading-10">
                    FEBILA got me the land I built my dream house with, it so
                    easy without any stress
                  </p>
                </div>
              </div>
            </div>

            <div className="hover:bg-white-100">
              <div className="my-2 rounded-md">
                <div className="w-full py-2 bg-gray-200 rounded-md">
                  <p className="text-sm text-gray-500 w-11/12 mx-auto text-justify leading-10">
                    I get my things moving to their destination at anytime using
                    FEBILA
                  </p>
                </div>
                <div className="w-4 h-6 ml-3 bg-gray-200 skew-x-12 rounded-bl-full">
                  {" "}
                </div>
              </div>
              <div className="border border-gray-300 py-2  rounded-md mx-2">
                <div className="w-28 h-28 mx-auto ">
                  <Image
                    src={client4}
                    className="w-28 h-28  rounded-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-center py-1 text-gray-500 text-sm">
                  Revered F. Ade
                </p>
                <div className="bg-blue-600  w-4/5 mx-auto h-8 rounded-full flex justify-center items-center my-1">
                  <p className="text-white text-sm">CTO @ pondeck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Sidebar/>
    </>
  );
};

export default Home;
