import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import "@/styles/about-us.css"

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="py-20">
          <h1 className="h1_about_us text-4xl text-gray-800  leading-18 text-center  mx-auto font-semibold capitalize">
            <span className="text-green-500 relative">
              Febila
              <span className="scribble3 bg-green-500"></span>
            </span>{" "}
            , a ground which many possibilities germinate on
          </h1>
          <div className="">
            <p className="w-3/5 text-center text-sm text-gray mx-auto  leading-14">
              Febila is a company whose foundation and knowledge in variety of
              things makes it stand out among its peers. Its contribution to
              make life better and affordable for every human has been a key
              badge for its undispustable impaction of lives
            </p>
            <p className="text-center text-3xl font-semibold py-10">
              {" "}
              <span className='text-green-500'>Febila's </span>Fondation Contribution Rating
            </p>
           

            

            <p className='w-11/12 py-10 mx-auto text-sm text-gray-600 leading-12'>Our knowledge span to areas like Cryptocurrency, Transporation, Real Estate, Publish, Forex, Stock Exhange. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi magni exercitationem esse, harum recusandae beatae nulla illum corrupti commodi quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia error magni mollitia doloremque facilis a dolorem sequi. Autem rem mollitia veritatis dolore, placeat esse, beatae aperiam quo sed ex sequi voluptatibus quisquam. Quae ex fuga quos? Voluptatem, quos officiis. </p>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page