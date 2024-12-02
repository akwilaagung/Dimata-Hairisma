import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";

const About = () => {
  const profile = [
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/john doe.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < profile.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="relative w-full h-[50vh]">
        <Image
          src="/Service.png"
          alt="service image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white mt-10 ">
            ABOUT HAIRISMA
          </h1>
        </div>
      </div>
      <div className=" relative mt-12 sm:mt-40 flex flex-col text-center items-center pb-24">
        <div className="font-bold text-2xl sm:text-4xl px-5 sm:px-0 mb-4">
          Driving Innovation in Human Resource Information
        </div>
        <p className="w-4/6">
          In the eyes of Hairisma, it's an information system designed to manage
          employee data, from personal info to salary details. Because it covers
          such a wide range, this system offers significant benefits for the
          company.
        </p>
      </div>
      <div className="relative flex flex-col text-center items-center -bottom-9">
        <Image
          src="/vision_image.svg"
          alt="about Image"
          width={2000}
          height={1000}
          quality={100}
          priority
        />
        <div className="absolute m-20 z-30 flex flex-col justify-center text-center">
          <hr className="text-white w-16 h-0.5 my-1 mx-auto" />
          <h1 className="text-white text-2xl">Vision and Mission</h1>
        </div>
        <div className="absolute top-10 left-0 z-30 w-full h-full flex justify-center items-center">
          <div className="absolute left-0 z-30 w-full h-full flex justify-center items-center gap-10">
            <div className="px-10 w-1/3 h-1/2 bg-white text-center justify-center p-4">
              <b className="text-5xl">VISION</b>
              <hr className="w-72 bg-indigo-900 h-1 my-4 mx-auto" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                dolorem quisquam iste totam consectetur dolorum laudantium nulla
                incidunt eos molestias, aliquid alias enim blanditiis laborum id
                est voluptatum! Molestias fugit autem tempora placeat veritatis
                facilis doloribus accusantium? Officia, ad fugit.
              </p>
            </div>
            <div className="px-10 w-1/3 h-1/2 bg-white text-center justify-center p-4">
              <b className="text-5xl">MISSION</b>
              <hr className="w-72 bg-indigo-900 h-1 my-4 mx-auto" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                dolorem quisquam iste totam consectetur dolorum laudantium nulla
                incidunt eos molestias, aliquid alias enim blanditiis laborum id
                est voluptatum! Molestias fugit autem tempora placeat veritatis
                facilis doloribus accusantium? Officia, ad fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left m-48">
        <div className="flex justify-between">
          <div>
            <hr className="w-24 bg-indigo-900 h-1 mb-2" />
            <p className="text-xl">OUR TEAM</p>
            <br />
            <p className="text-4xl">
              <b>The Minds Behind Dimata Hairisma</b>
            </p>
            <br />
            <p>
              Dimata’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful solutions to
              our clients.
            </p>
            <br />
          </div>
          {isClient && (
            <div className="flex mt-4">
              <button
                title="left"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-2 ${
                  currentIndex === 0 ? "opacity-50" : "opacity-100"
                }`}
              >
                <Image src="/left.svg" alt="prev" width={30} height={30} />
              </button>
              <button
                title="right"
                onClick={handleNext}
                disabled={currentIndex >= profile.length - 4}
                className={`p-2 ${
                  currentIndex >= profile.length - 4
                    ? "opacity-50"
                    : "opacity-100"
                }`}
              >
                <Image
                  src="/right.svg"
                  alt="next"
                  width={30}
                  height={30}
                  className=""
                />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {profile.map((card, index) => (
              <div key={index} className="min-w-[25%] px-2">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={350}
                  height={150}
                  className="w-full h-50 object-cover"
                />
                <p className="mt-4 font-bold text-lg text-center">
                  {card.name}
                </p>
                <p className="text-gray-600 text-center">{card.potition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
