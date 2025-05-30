import { LineShadowText } from "../components/magicui/line-shadow-text";

const Heading = ({ title }) => {
  return (
    <h1 className="text-balance text-4xl font-semibold leading-none tracking-tighter md:text-7xl text-sky-900">
      <LineShadowText className="italic" shadowColor="black">
        {title}
      </LineShadowText>
    </h1>
  );
};

export default Heading;
