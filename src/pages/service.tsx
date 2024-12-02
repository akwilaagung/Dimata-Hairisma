import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";

const Service = () => {
  const cards = [
    {
      title: "Employee Payroll",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/webDev.png",
    },
    {
      title: "Performance Evaluation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/mobileDev.png",
    },
    {
      title: "Competency Assessment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/hardware.png",
    },
    {
      title: "Warning and Reprimand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/ai.png",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Navbar />
      </div>
      <div className="relative w-full h-[50vh] sm:h-[30vh] md:h-[40vh]">
        <Image
          src="/Service (1).png"
          alt="service image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-10">
            SERVICE HAIRISMA
          </h1>
        </div>
      </div>
      <div className=" relative mt-12 sm:mt-40 flex flex-col text-center items-center">
        <div className="font-bold text-2xl sm:text-4xl px-5 sm:px-0 mb-4">
          Innovative Business Solutions for Every Step Forward
        </div>
        <p className="w-4/6">
          Dimata HaiRisma offers comprehensive services tailored to help
          businesses efficiently manage their operations, streamline processes,
          and make data-driven decisions.
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto p-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Service;
