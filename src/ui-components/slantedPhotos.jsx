import Image from "next/image";

const SlantedPhotos = ({ clockwise, imageSource }) => {
  return (
    <div
      className={`${
        clockwise ? "-rotate-[25deg]" : "rotate-[25deg]"
      } col-span-1 size-24 md:size-32 bg-gray-200 shadow-xl shadow-sky-300 p-1 overflow-hidden opacity-60 animate-pulse hover:rotate-0 hover:scale-125 transition-all duration-300`}
    >
      <Image
        src={imageSource}
        alt="slanted-image"
        width={100}
        height={100}
        quality={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SlantedPhotos;
