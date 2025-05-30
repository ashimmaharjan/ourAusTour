"use client";

import Image from "next/image";

// import "./assets/fonts/transforma.css";
// import "./assets/fonts/TransformaMix_Trial-Regular.otf";

import { motion } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import SlantedPhotos from "@/src/ui-components/slantedPhotos";
import { AuroraText } from "@/src/components/magicui/aurora-text";
import { TextAnimate } from "@/src/components/magicui/text-animate";
import Heading from "@/src/ui-components/heading";
import PersonCard from "@/src/ui-components/personCard";

import { familyMembers } from "@/lib/data/familyMembers";

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

  return (
    <section className="pb-20">
      <div className="w-screen h-fit">
        <div className="w-screen min-h-screen h-auto bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-5 flex justify-center items-center overflow-x-hidden">
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
              <h4 className="text-4xl lg:text-5xl font-black text-center text-gray-400 text-wrap flex flex-col md:flex-row items-center justify-center">
                Our&nbsp;
                <AuroraText className="text-6xl lg:text-8xl uppercase">
                  Australia
                </AuroraText>
                &nbsp;Tour
              </h4>
              <TextAnimate
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    rotate: 45,
                    scale: 0.5,
                  },
                  show: (i) => ({
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.4,
                      y: {
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                        mass: 0.8,
                      },
                      rotate: {
                        type: "spring",
                        damping: 8,
                        stiffness: 150,
                      },
                      scale: {
                        type: "spring",
                        damping: 10,
                        stiffness: 300,
                      },
                    },
                  }),
                  exit: (i) => ({
                    opacity: 0,
                    y: 30,
                    rotate: 45,
                    scale: 0.5,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.4,
                    },
                  }),
                }}
                by="character"
                className="text-zinc-400 text-xl md:text-2xl text-center italic"
              >
                Let&apos;s Gooooo!
              </TextAnimate>
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
            <Heading title="Visitors" />
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="w-full h-fit p-5 md:p-10 grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-5 md:gap-x-10">
            {familyMembers.map((member, index) => (
              <PersonCard
                key={index}
                name={member.name}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="p-5 md:p-10">
          <div className="flex items-center gap-5">
            <Heading title="Destinations" />

            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8 p-5 md:p-10">
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
