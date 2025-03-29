import { FC } from "react";
import Slider from "./slider";
import Main from "./main";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-25">
      <Slider />
      <Main />
    </div>
  );
};

export default Home;
