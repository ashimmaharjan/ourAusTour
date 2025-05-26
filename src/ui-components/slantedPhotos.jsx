import Image from "next/image";

const SlantedPhotos = ({ clockwise, imageSource }) => {
  return (
    <div
      className={`${
        clockwise ? "-rotate-[25deg]" : "rotate-[25deg]"
      } col-span-1 size-20 md:size-32 bg-gray-200 shadow-xl shadow-sky-300 p-1 overflow-hidden opacity-50 hover:rotate-0 hover:scale-125 hover:opacity-95 transition-all duration-300`}
    >
      <Image
        src={imageSource}
        alt="slanted-image"
        width={500}
        height={500}
        quality={100}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SlantedPhotos;
