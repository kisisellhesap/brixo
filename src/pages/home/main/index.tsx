import { FC } from "react";
import { brixo_features } from "../../../constant/brixo_features";
import FeaturesCard from "./features-card";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import FeaturesCardSkeleton from "./featuresCardSkeleton";

const Main: FC = () => {
  const { loading } = useSelector((store: RootState) => store.productReducer);

  return (
    <div
      className={`flex flex-col gap-5 mb-25 max-lg:text-center ${
        loading && "none"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-5 animate-pulse">
          <div className="h-10 w-40 bg-red/30 rounded" />
          <div className="w-40 h-10 bg-red/20 rounded rotate-[-10deg]" />
          <div className="h-10 w-32 bg-red/30 rounded" />
        </div>
      ) : (
        <h2 className="text-5xl max-lg:text-4xl font-bold mx-auto flex items-center">
          What Makes
          <img
            src="/assets/short-logo.png"
            className="w-40 max-lg:w-25 rotate-[-10deg] mx-5"
          />
          Stand Out?
        </h2>
      )}

      <div className="flex flex-col gap-10">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <FeaturesCardSkeleton key={i} />
            ))
          : brixo_features.map((feature, i) => (
              <FeaturesCard key={i} feature={feature} />
            ))}
      </div>
    </div>
  );
};

export default Main;
