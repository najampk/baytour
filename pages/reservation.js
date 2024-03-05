import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";

import React, { useState } from "react";
export default function reServation() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [vtype, setVtype] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [servicetype, setService] = useState("");
  const [passengers, setPassengers] = useState("");
  const [paddress, setPaddress] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Submit");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (vtype.length <= 0) {
      tempErrors["vtype"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (servicetype.length <= 0) {
      tempErrors["servicetype"] = true;
      isValid = false;
    }
    if (passengers.length <= 0) {
      tempErrors["passengers"] = true;
      isValid = false;
    }
    if (paddress.length <= 0) {
      tempErrors["paddress"] = true;
      isValid = false;
    }

    if (destination.length <= 0) {
      tempErrors["destination"] = true;
      isValid = false;
    }

    if (date.length <= 0) {
      tempErrors["date"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Submitting");
      const res = await fetch("/api/sendgridres", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          date: date,
          paddress: paddress,
          passengers: passengers,
          vtype: vtype,
          servicetype: servicetype,
          destination: destination,
          detail: detail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit");

        setPhone("");
        setFullname("");
        setEmail("");
        setVtype("");
        setDetail("");
        setPassengers("");
        setPaddress("");
        setDestination("");
        setDate("");
        setService("");

        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Submit");
      setPhone("");
      setFullname("");
      setEmail("");
      setDetail("");
      setVtype("");
      setPassengers("");
      setPaddress("");
      setDestination("");
      setDate("");
      setService("");
    }
    console.log(
      fullname,
      email,
      vtype,
      detail,
      servicetype,
      paddress,
      destination,
      passengers,
      date,
      phone
    );
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Reserve a Luxurious Limo for Your Special Occasion</title>
        <meta
          name="title"
          content="Reserve a Luxurious Limo for Your Special Occasion"
        />
        <meta
          name="description"
          content="Make your special occasion even more memorable by reserving a luxurious limo with us. Our top-rated limousine service provides comfort, style, and elegance."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Reserve a Luxurious Limo for Your Special Occasion"
        />
        <meta
          name="twitter:description"
          content="Make your special occasion even more memorable by reserving a luxurious limo with us. Our top-rated limousine service provides comfort, style, and elegance."
        />
        <meta
          name="twitter:image:src"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Reserve a Luxurious Limo for Your Special Occasion"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Make your special occasion even more memorable by reserving a luxurious limo with us. Our top-rated limousine service provides comfort, style, and elegance."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://baytour.net/_next/image?url=%2Fimages%2Fbaytour.net-logo.png&w=256&q=75"
        />
        <link rel="canonical" href="https://baytour.net/reservation" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Reserve a Luxurious Limo"
        pageImg="hdr-2.jpg"
      />

      <section className="main-sec">
        <div className="content-bx space-y-4 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/bg-res.webp')"}}>
          
		  <p>
		  When it comes to special occasions, we understand that you want everything to be perfect. That's why our limousine service provides the ultimate luxury experience to make your event truly unforgettable. Our limos are equipped with plush leather seats, state-of-the-art sound systems, and premium amenities to ensure your comfort and enjoyment. From weddings to proms, corporate events to airport transfers, our professional chauffeurs will get you to your destination in style and on time. With our easy online reservation system, booking your limo has never been easier. So why wait? Treat yourself to the best limousine service in town and make your next event one to remember.
		  </p>
		  
		  <form className="mt-2" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 gap-4 max-w-lg mx-auto">
              <label className="block">
                <span className="text-slate-600">Full Name</span>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  name="fullname"
                  className="txtbx"
                  placeholder="Full Name"
                />
                {errors?.fullname && (
                  <p className="text-red-500">Please enter full name.</p>
                )}
              </label>

              <label className="block">
                <span className="text-slate-600">Vehicle Type</span>
                <select
                  className="txtbx bg-transparent py-3 font-sans bg-white"
                  name="vtype"
                  value={vtype}
                  onChange={(e) => {
                    setVtype(e.target.value);
                  }}
                >
                  <option value="">Type of Vehicle</option>
                  <option value="Coach Bus">Coach Bus</option>
                  <option value="Luxury Sedans">Luxury Sedans</option>
                  <option value="Executive SUVs">Executive SUVs</option>
                  <option value="Executive Sedans">Executive Sedans</option>
                  <option value="Executive Sprinter">Executive Sprinter</option>
                </select>

                {errors?.vtype && (
                  <p className="text-red-500">Please select vehicle type.</p>
                )}
              </label>

              <label className="block">
                <span className="text-slate-600">Service Type</span>

                <select
                  className="txtbx bg-transparent py-3 font-sans bg-white "
                  name="servicetype"
                  value={servicetype}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                >
                  <option value="">Type of Service</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Point to Point">Point to Point</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Quinceanera">Quinceanera</option>
                  <option value="Wine Tour">Wine Tour</option>
                  <option value="City Tour">City Tour</option>
                  <option value="Napa Vally Limo Tour">
                    Napa Vally Limo Tour
                  </option>
                  <option value="Airport Limo">Airport Limo</option>
                  <option value="Corporate Transfer">Corporate Transfer</option>
                  <option value="Family Tour">Family Tour</option>
                  <option value="Meet & Greet">Meet & Greet</option>
                  <option value="Special Services">Special Services</option>
                </select>

                {errors?.servicetype && (
                  <p className="text-red-500">Please select service type.</p>
                )}
              </label>

              <label className="block">
                <span className="text-slate-600">Pick-up Address </span>
                <input
                  type="text"
                  value={paddress}
                  onChange={(e) => {
                    setPaddress(e.target.value);
                  }}
                  name="paddress"
                  className="txtbx bg-white"
                  placeholder="Pick-up Address"
                />
                {errors?.paddress && (
                  <p className="text-red-500">Please enter pickup address.</p>
                )}
              </label>

              <label className="block">
                <span className="text-slate-600">Destination </span>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  name="destination"
                  className="txtbx"
                  placeholder="Destination"
                />
                {errors?.destination && (
                  <p className="text-red-500">Please enter destination.</p>
                )}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-slate-600">Passengers </span>
                  <input
                    type="text"  maxLength="3"
                    value={passengers}
                    onChange={(e) => {
                      setPassengers(e.target.value);
                    }}
                    name="passengers"
                    className="txtbx"
                    placeholder="Passengers"
                  />
                  {errors?.passengers && (
                    <p className="text-red-500">Please enter passengers.</p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">Date </span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    name="date"
                    className="txtbx"
                    placeholder="Date"
                  />
                  {errors?.date && (
                    <p className="text-red-500">Please enter date.</p>
                  )}
                </label>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <label className="block">
                  <span className="text-slate-600">Email Eddress</span>
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="txtbx"
                    placeholder="Valid Email Address"
                  />
                  {errors?.email && (
                    <p className="text-red-500">
                      Please enter valid email address.
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-slate-600">Phone Number</span>
                  <input
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    className="txtbx"
                    placeholder="Valid Phone Number"
                  />
                  {errors?.phone && (
                    <p className="text-red-500">Please enter phone number.</p>
                  )}
                </label>
              </div>
              <label className="block">
                <span className="text-slate-600">Any Detail</span>
                <textarea
                  name="detail"
                  value={detail}
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                  className="txtbx"
                  rows="2"
                  placeholder="Detail..."
                ></textarea>
              </label>

              <div className="mb-2 sm:text-right text-center ">
                <button type="submit" className="btn-action w-full">
                  {buttonText}
                </button>
              </div>
              <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-sm my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 inline mr-2 -mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Thankyou! Your Reservation detail has been submitted. Our
                    Representative will respond shortly.
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 inline mr-2 -mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
