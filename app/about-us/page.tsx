"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import "@/styles/about-us.css"
import Image from "next/image"
import story from "@/public/images/story.jpg"
import impact from "@/public/images/impact.jpg"
import goals from "@/public/images/goals.jpg"
import Sidebar from '@/components/Sidebar'
const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="py-20">
          <h1 className="h1_about_us text-4xl text-gray-800  leading-18 text-center  mx-auto font-semibold capitalize">
            <span className="text-green-500 relative">Febila</span> , a ground
            which many possibilities germinate on
          </h1>
          <div className="">
            <p className="w-3/5 text-center text-sm text-gray mx-auto  leading-14 lg:w-11/12">
              Febila is a company whose foundation and knowledge in variety of
              things makes it stand out among its peers. Its contribution to
              make life better and affordable for every human has been a key
              badge for its undispustable impaction of lives
            </p>
          </div>
          <div className="w-11/12 mx-auto">
            <div>
              <div className="py-10 ">
                <Image
                  src={story}
                  className="about_img rounded-md object-cover"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-gray-700">
                <span className="text-green-500 font-bold">Febila's</span> Story
              </h1>
              <p className="text-gray-600 leading-14 pb-10">
                Once upon a time in the vast landscape of dreams, a group of
                individuals united by a shared passion embarked on a journey
                that would transcend the ordinary. This is the story of Febila –
                a tale of passion, purpose, and the pursuit of endless
                possibilities. In the heart of innovation and boundless
                imagination, Febila was born. It all began with a spark – a
                collective passion to make a positive impact on the world. Each
                member of the Febila family brought a unique set of skills,
                dreams, and aspirations to the table, creating a vibrant
                tapestry of ideas and potential. Driven by the belief that
                businesses could be a force for good, Febila laid its
                foundations with the creation of Febila Foundation. It wasn't
                just about profit margins; it was about making a meaningful
                difference in the lives of people around the globe. Education,
                healthcare, water access, poverty alleviation – these became the
                cornerstones of our purpose
              </p>
            </div>

            <div>
              <div className="py-10 ">
                <Image
                  src={impact}
                  className="about_img rounded-md object-cover"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-gray-700">
                <span className="text-green-500 font-bold">Febila's</span>{" "}
                Impact
              </h1>
              <p className="text-gray-600 leading-14 pb-10">
                Driven by the belief that businesses could be a force for good,
                Febila laid its foundations with the creation of Febila
                Foundation. It wasn't just about profit margins; it was about
                making a meaningful difference in the lives of people around the
                globe. Education, healthcare, water access, poverty alleviation
                – these became the cornerstones of our purpose.
              </p>
            </div>

            <div className="py-10 ">
              <Image
                src={goals}
                className="about_img rounded-md object-cover"
                alt=""
              />
            </div>
            <h1 className="text-2xl text-gray-700">
              <span className="text-green-500 font-bold">Febila's</span> Mission
            </h1>
            <p className="text-gray-600 leading-14 pb-10">
              Febila is a dynamic entity committed to empowering individuals and
              businesses, transcending the ordinary to create transformative
              experiences. Our diverse services, rooted in a profound mission,
              cater to personal, professional, and creative needs. From Febila
              Foundation's impactful initiatives in education, healthcare, and
              poverty alleviation to Febila Real Estate's creation of vibrant
              communities, our commitment to empowerment is evident. Febila
              Farms embodies our dedication to sustainable agriculture,
              fostering harmony between humans and the environment. Febila
              Fashion celebrates authenticity, crafting garments with enduring
              craftsmanship and sustainability. In the financial realms, from
              Febila Crypto to Febila Forex & Stock Exchange, we empower
              enthusiasts with knowledge and golden opportunities. Febila
              Publishing curates diverse literary experiences, stimulating minds
              and imaginations. Join us in a journey of endless possibilities,
              where innovation and positive transformation define Febila's
              mission – Shaping Futures, Transforming Lives
            </p>
          </div>
        </div>
      </div>
      <Sidebar/>
      <Footer />
    </div>
  );
}

export default page