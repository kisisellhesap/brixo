import { FC } from "react";
import { brixo_features } from "../../../constant/brixo_features";
import FeaturesCard from "./features-card";

const Main: FC = () => {
  return (
    <div className="flex flex-col gap-5 mb-25">
      <h2 className="text-5xl font-bold mx-auto flex items-center">
        What Makes
        <img src="/short-logo.png" className="w-40 rotate-[-10deg] mx-5" />
        Stand Out?
      </h2>

      <div className="flex flex-col gap-10">
        {brixo_features.map((feature, i) => (
          <FeaturesCard key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Main;
