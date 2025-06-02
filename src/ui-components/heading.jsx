"use client";

import { LineShadowText } from "@/src/components/magicui/line-shadow-text";
import { TextAnimate } from "../components/magicui/text-animate";

import { GeistSans } from "geist/font/sans";

const Heading = ({ title }) => {
  return (
    <h1 className="text-balance text-4xl font-semibold leading-none tracking-tighter md:text-7xl text-sky-900">
      <TextAnimate animation="slideLeft" by="text">
        <LineShadowText
          className={`${GeistSans.className} italic`}
          shadowColor="black"
        >
          {title}
        </LineShadowText>
      </TextAnimate>
    </h1>
  );
};

export default Heading;
