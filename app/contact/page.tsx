"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import Loading from "@/components/Loading";
import ErrorSuccessModal from "@/components/ErrorSuccessModal";
import { AppContextAPI } from "@/context api/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const page = () => {
  const { openModalExitModal } = useContext(AppContextAPI);
  const [btnStatus, setBtnStatus] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phonenumber: -1,
      email: "",
      message: "",
    },
    onSubmit: async () => {
      try {
        setBtnStatus(true);
        const createContact = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ROUTE}/contact`,
          formik.values
        );

        setBtnStatus(false);
        openModalExitModal(true, `${createContact.data.message}`);
      } catch (error: any) {
        setBtnStatus(false);
        openModalExitModal(true, `${error.response.data.message} Thank you`);
      }
    },
    validationSchema: yup.object({
      first_name: yup.string().required("First name is required"),
      last_name: yup.string().required("Last name is required"),
      phonenumber: yup
        .number()
        .min(10, "Enter a valid phone number")
        .required(),
      email: yup.string().email().required("Email is required"),
      message: yup.string().required(),
    }),
  });
  return (
    <>
      <Navbar />
      <div className="py-10">
        <div className="w-4/5 mx-auto py-4">
          <h1 className="text-4xl text-green-500 leading-10">Contact</h1>
          <p className="text-sm text-gray-600 leading-10 py-2">
            Get in contact with us by filling the details below.
          </p>
        </div>
        <div className="w-4/5 mx-auto">
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div className="flex justify-between items-center sm:block">
              <div className="w-5/12 my-1 sm:w-full">
                <label className="py-1 text-sm text-gray-600">First Name</label>
                <br />
                <input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="first_name"
                  className="w-full h-10 bg-none rounded-md pl-2 text-sm text-gray-600 focus:outline-0"
                />
                <p className="text-xs text-red-400">
                  {formik.errors.first_name}
                </p>
              </div>
              <div className="w-5/12 my-1 sm:w-full">
                <label className="py-1 text-sm text-gray-600">Last Name</label>
                <br />
                <input
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="last_name"
                  className="w-full h-10 bg-none rounded-md pl-2 text-sm text-gray-600 focus:outline-0"
                />
                <p className="text-xs text-red-400">
                  {formik.errors.last_name}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center sm:block">
              <div className="w-5/12 my-1 sm:w-full">
                <label className="py-1 text-sm text-gray-600">
                  Phone Number
                </label>
                <br />
                <input
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="phonenumber"
                  className="w-full h-10 bg-none rounded-md pl-2 text-sm text-gray-600 focus:outline-0"
                />
                <p className="text-xs text-red-400">
                  {formik.errors.phonenumber}
                </p>
              </div>
              <div className="w-5/12 my-1 sm:w-full">
                <label className="py-1 text-sm text-gray-600">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-10 bg-none rounded-md pl-2 text-sm text-gray-600 focus:outline-0"
                />
                {formik.errors.email && (
                  <p className="text-xs text-red-400">{formik.errors.email}</p>
                )}
              </div>
            </div>
            <div className="w-full my-1">
              <div className="full">
                <label className="py-1 text-sm text-gray-600">Message</label>
                <br />
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full resize-none p-3 text-sm text-gray-600  h-72 rounded-md placeholder:p-3 focus:outline-0"
                  placeholder="Leave a message"
                ></textarea>
                {formik.errors.message && (
                  <p className="text-xs text-red-400">
                    {formik.errors.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                disabled={btnStatus}
                type="submit"
                className="h-10 w-32 flex justify-center items-center bg-green-500 text-sm text-white rounded-full sm:w-full"
              >
                {btnStatus ? <Loading /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Sidebar/>
      <Footer/>
    </>
  );
};

export default page;
