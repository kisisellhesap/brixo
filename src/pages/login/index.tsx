import { FC } from "react";
import Form from "./form";

const Login: FC = () => {
  return (
    <div className="h-screen flex bg-black/20">
      <img
        src="assets/login/kk.gif"
        className="w-[100%] h-[100%] absolute inset-0"
        alt=""
      />
      <div className="bg-pink/50 backdrop-blur-lg w-[100%] flex items-center justify-evenly">
        <Form />
      </div>
    </div>
  );
};

export default Login;
