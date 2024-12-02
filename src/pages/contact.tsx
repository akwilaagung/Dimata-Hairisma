import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="flex text-center items-center justify-center">
        <p className="absolute text-white text-5xl font-bold items-center justify-center pb-96">
          Get in Touch
        </p>
        <div className="absolute flex flex-col">
          <p className="text-white text-start">Name</p>
          <input
            className="rounded py-3 px-4 w-full mb-4"
            type="email"
            placeholder="Your Name"
          ></input>
          <p className="text-white text-start">Your email</p>
          <input
            className="rounded py-3 px-4 w-full mb-4"
            type="text"
            placeholder="Your email address"
          ></input>
          <p className="text-white text-start">Message</p>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Enter your message"
            className="w-96 rounded pt-3 px-4 h-24 mb-4"
          ></textarea>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <button className="bg-[#B009DF] transition ease-in-out delay-150 hover:scale-110 duration-300 rounded py-2 px-8 font-bold text-white">
            Submit
          </button>
        </div>
        <img
          src="/coding man.jpg"
          alt="man and coding"
          className="w-full h-[100vh]"
        ></img>
      </div>
      <div className="flex flex-col md:flex-row items-center px-6 md:px-16 py-32 gap-8 -mb-16">
        <div className="w-full md:w-1/3 space-y-6">
          <h2 className="font-bold text-4xl text-gray-800">Our Location</h2>
          <div>
            <p>
              <span className="font-semibold space-y-6">Address:</span>
              <br />
              Dimata IT and Software
              <br />
              Jl. Danau Tempe No.21A, Sidakarya, Denpasar Selatan, Kota
              Denpasar, Bali 80224
            </p>
            <p>
              <span className="font-semibold space-y-6">Hours:</span>
              <br />
              Monday - Friday: 8:30 AM - 5:30 PM
              <br />
              Saturday: 8:30 AM - 12:30 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
            title="Dimata"
            width="650"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
