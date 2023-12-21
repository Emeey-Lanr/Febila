import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-sm leading-14 w-11/12 mx-auto py-10">
                  <p  className="text-center text-sm text-gray-600">
                      Febila is a field whose ground accomodates variety of things and they'll grow well.
          </p>
        </div>
      </div>

      <Footer />
      <Sidebar />
    </>
  );
}

export default page