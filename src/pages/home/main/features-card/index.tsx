import { FC } from "react";
import RewiewBtn from "../../../../components/RewiewBtn";
import { Feature } from "../../../../types";

type Props = {
  feature: Feature;
};
const FeaturesCard: FC<Props> = ({ feature }) => {
  return (
    <div className="grid grid-cols-2 items-center group">
      <div className="flex flex-col gap-6 group-even:first:order-2">
        <h3 className="text-3xl font-bold leading-12">{feature.title}</h3>
        <p className="text-justify">{feature.description}</p>
        <RewiewBtn />
      </div>
      <div>
        <img
          src={feature.image}
          className="w-100 rounded-full mx-auto object-cover"
          alt={feature.title}
        />
      </div>
    </div>
  );
};

export default FeaturesCard;
