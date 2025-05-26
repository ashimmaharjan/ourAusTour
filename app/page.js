"use client";

import Image from "next/image";

// import "./assets/fonts/transforma.css";
// import "./assets/fonts/TransformaMix_Trial-Regular.otf";

import { motion } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import SlantedPhotos from "@/src/ui-components/slantedPhotos";

function App() {
  const australianIcons = [
    {
      id: uuidv4(),
      name: "Opera House",
      imageSrc: "/images/sydney.webp",
    },
    {
      id: uuidv4(),
      name: "Melbourne CBD",
      imageSrc: "/images/melbourne.webp",
    },
    {
      id: uuidv4(),
      name: "Puffing Billy",
      imageSrc: "/images/puffing-billy.webp",
    },
    {
      id: uuidv4(),
      name: "Sydney Sea Life",
      imageSrc: "/images/sealife.webp",
    },
    {
      id: uuidv4(),
      name: "Blue Mountains",
      imageSrc: "/images/blue-mountains.webp",
    },
    {
      id: uuidv4(),
      name: "Nan Tien Temple",
      imageSrc: "/images/nan-tein.jpg",
    },
    {
      id: uuidv4(),
      name: "St. Kilda Beach",
      imageSrc: "/images/st-kilda.webp",
    },
    {
      id: uuidv4(),
      name: "Shrine of Remembrance",
      imageSrc: "/images/sor.webp",
    },
    {
      id: uuidv4(),
      name: "Manly Beach",
      imageSrc: "/images/manly-beach.webp",
    },
    {
      id: uuidv4(),
      name: "Melbourne Conv. Centre",
      imageSrc: "/images/mcv.webp",
    },
    {
      id: uuidv4(),
      name: "QVB",
      imageSrc: "/images/qvb.jpeg",
    },
    {
      id: uuidv4(),
      name: "Bondi Beach",
      imageSrc: "/images/bondi.jpeg",
    },
    {
      id: uuidv4(),
      name: "St. Mary's",
      imageSrc: "/images/st-marys.webp",
    },
    {
      id: uuidv4(),
      name: "La Perouse",
      imageSrc: "/images/laperouse.webp",
    },
    {
      id: uuidv4(),
      name: "Minto Temple",
      imageSrc: "/images/minto.jpg",
    },
  ];

  const familyMembers = [
    {
      name: "Tara B.",
      image: "/images/dad.jpg",
    },
    {
      name: "Rama",
      image: "/images/mom.jpg",
    },
    {
      name: "Namrata",
      image: "/images/namrata-demo.jpeg",
    },
    {
      name: "Buddha R.",
      image: "/images/dad.jpg",
    },
    {
      name: "Bina",
      image: "/images/mom.jpg",
    },
    {
      name: "Ashim",
      image: "/images/user.jpg",
    },
  ];

  return (
    <section className="pb-20">
      <div className="w-screen h-fit">
        <div className="w-screen min-h-screen h-auto bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-5 flex justify-center items-center">
          <div className="flex flex-col">
            <div className="grid grid-cols-6 gap-2 md:5 lg:gap-7">
              <SlantedPhotos clockwise imageSource="/images/aus-flag.jpeg" />
              <SlantedPhotos clockwise imageSource="/images/koala.jpeg" />
              <SlantedPhotos clockwise imageSource="/images/oh.jpeg" />
              <SlantedPhotos clockwise imageSource="/images/kangaroo.jpeg" />
              <SlantedPhotos clockwise imageSource="/images/hb.jpeg" />
              <SlantedPhotos clockwise imageSource="/images/vegemite.jpeg" />
            </div>

            <div className="my-20">
              <h4 className="text-3xl md:text-6xl font-black text-[#005979] text-center uppercase">
                Australia Tour
              </h4>
              <h4 className="text-3xl md:text-6xl font-black text-[#f2ecff] text-center uppercase -mt-[40px] md:-mt-[66px] -ml-[5px]">
                Australia Tour
              </h4>
            </div>

            <div className="grid grid-cols-6 gap-2 md:5 lg:gap-7">
              <SlantedPhotos imageSource="/images/hb.jpeg" />
              <SlantedPhotos imageSource="/images/wombat.jpeg" />
              <SlantedPhotos imageSource="/images/koala.jpeg" />
              <SlantedPhotos imageSource="/images/oh.jpeg" />
              <SlantedPhotos imageSource="/images/vegemite.jpeg" />
              <SlantedPhotos imageSource="/images/aus-flag.jpeg" />
            </div>
          </div>
        </div>

        <section className="p-5 md:p-10">
          <div className="flex items-center gap-5 mt-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Visitors</h2>

            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="w-full h-fit p-10 grid grid-cols-2 lg:grid-cols-3 gap-y-16">
            {familyMembers.map((member, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col justify-center items-center"
              >
                <motion.div
                  style={{ borderRadius: "60% 40% 35% 65% / 51% 58% 42% 49% " }}
                  initial={{ scale: 0, filter: "blur(50px)" }}
                  // viewport={{ once: true }}
                  whileInView={{
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      type: "tween",
                      duration: 0.3,
                      delay: 0.05 + index * 0.06,
                    },
                  }}
                  className="size-[130px] md:size-40 bg-pink-400 border-[3px] border-gray-200 overflow-hidden"
                >
                  <Image
                    width={300}
                    height={300}
                    quality={100}
                    loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <span className="text-center mt-4 font-semibold text-gray-400">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-5 md:p-10">
          <div className="flex items-center gap-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Destinations</h2>

            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
            {australianIcons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, filter: "blur(50px)" }}
                // viewport={{ once: true }}
                whileInView={{
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    type: "tween",
                    duration: 0.3,
                    delay: 0.05 + index * 0.06,
                  },
                }}
                className="col-span-1 flex flex-col justify-center items-center h-auto"
              >
                <div className="w-auto h-auto relative cursor-pointer hover:scale-[102%] hover:rotate-6 transition-all duration-300 ease-in-out">
                  <Image
                    src={icon.imageSrc}
                    alt={icon.name}
                    width={500}
                    height={500}
                    quality={100}
                    loading="lazy"
                    className="size-56 lg:size-96 object-cover shadow-2xl rounded-4xl border-[1px] border-gray-400"
                  />

                  <div className="absolute top-0 left-0 w-full h-full p-2 lg:p-2.5">
                    <div className="w-full h-full border-[1.5px] border-white rounded-3xl flex px-5 py-3 bg-gradient-to-bl from-transparent to-gray-800">
                      <h5 className="text-gray-100 text-sm md:text-base font-extrabold text-left mt-auto">
                        {icon.name}
                      </h5>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default App;
