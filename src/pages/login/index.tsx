import { FC } from "react";

const Login: FC = () => {
  return (
    <div className="h-screen flex bg-black/20">
      <img
        src="./login/kk.gif"
        className="w-[100%] h-[100%] absolute inset-0 z-index"
        alt=""
      />

      <div className="bg-pink/50 backdrop-blur-lg w-[100%] flex items-center justify-center">
        <div className="  flex flex-col items-center justify-center  gap-5 w-[50%]">
          <img src="./logo.png" className="w-[250px]" alt="" />
          <h1 className="text-4xl text-red font-bold italic">
            No Lines, No Crowds
          </h1>
          <p className="text-2xl font-bold text-gray">
            We don't want to see you among the crowds
          </p>
          <p className="text-2xl font-bold text-gray">
            Just You and Endless Shopping with Brixo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
