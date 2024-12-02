import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./navbar";
import Footer from "./footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="bg-[#B009DF] w-full h-screen flex flex-row">
        <div className="p-72 w-full justify-center flex flex-col">
          <h1 className="text-black text-4xl font-bold">
            HUMAN <br /> RESOURCE <br /> INFORMATION <br /> SYSTEM
          </h1>
          <p className="text-black text-xl font-bold">
            Transform your busines with our innovative
            <br />
            information system
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src="/hand and laptop.png"
            alt="hand and laptop"
            width={300}
            height={150}
            className="relative inset-y-0 -inset-x-40
             flex object-contain"
          ></img>
        </div>
      </div>
      <div className=" relative mt-12 sm:mt-40 flex flex-col text-center items-center">
        <div className="font-bold text-2xl sm:text-4xl px-5 sm:px-0 mb-4">
          Comprehensive Business Management
        </div>
        <p className="w-4/6">
          Dimata Hairisma offers comprehensive solutions to streamline business
          operations for various industries. Our expertise includes efficient
          employee management, salaries management, and data-driven insights to
          support decision-making and operational efficiency.
        </p>
        <div className="lg:w-1/2 grid grid-cols-1 gap-4 pt-24 pb-16">
          {[
            {
              src: "/discussion.svg",
              title: "Company Organization",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              src: "/agreement.svg",
              title: "Employee Management",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              src: "/meeting.svg",
              title: "Performance Management",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ].map((service, index) => (
            <div key={index} className="flex space-x-4 items-center">
              <div className="w-2/5">
                <Image
                  src={service.src}
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-3/5 flex flex-col">
                <h4 className="text-lg font-bold">{service.title}</h4>
                <p className="text-gray-500 text-sm w-[90%]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-gray-100 w-full py-12">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-between items-start mb-6">
              <div className="text-left">
                <hr className="w-9 bg-indigo-900 h-1 mb-2 " />
                <span className="text-sm text-indigo-900 font-medium">
                  WORK WITH US
                </span>
                <h2 className="text-3xl font-bold  mt-5">Why Choose Us?</h2>
              </div>
              <div className="text-gray-600 ml-48 mt-1 text-right max-w-lg">
                Experience our unmatched expertise and dedication to delivering
                exceptional results, tailored to meet your unique needs.
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6  shadow-md">
                <div className="mb-4">
                  <Image
                    src="/ai_icon.svg"
                    alt="Expertise Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  Expertise and Innovation
                </h3>
                <p className="text-gray-600">
                  Our team comprises industry experts who leverage the latest
                  technologies to create innovative software solutions tailored
                  to your needs.
                </p>
              </div>
              <div className="bg-white p-6  shadow-md">
                <div className="mb-4">
                  <Image
                    src="/communication_person.svg"
                    alt="Client-Centric Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-600">
                  We prioritize your goals by working closely with you
                  throughout the development process, ensuring that our
                  solutions align perfectly with your vision.
                </p>
              </div>
              <div className="bg-white p-6  shadow-md">
                <div className="mb-4">
                  <Image
                    src="/jewereld_star.svg"
                    alt="Track Record Icon"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-600">
                  Our software solutions are designed to grow with your
                  business, ensuring long-term reliability and scalability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
