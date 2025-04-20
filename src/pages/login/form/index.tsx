import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socialcons from "../../../components/sociaIcons";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { loginUser, registerUser } from "../../../redux/actions/userActions";
import { SignUser } from "../../../types";
import { v4 as uuidv4 } from "uuid";

const Form: FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { users } = useSelector((store: RootState) => store.userReducer);
  const [user, setUser] = useState<SignUser>({
    id: uuidv4(),
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const changeFormSign = () => {
    setIsSignUp(!isSignUp);
  };

  const validatePassword = (password: string): boolean => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*().])[A-Za-z\d!@#$%^&*().]{1,11}$/;
    return regex.test(password);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  const handleSign = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isSignUp) {
      const filtered = users.some((item, i) => item.email === user.email);
      console.log(filtered);
      if (validatePassword(user.password)) {
        console.log(user);
        dispatch(registerUser(user));
      } else {
        console.log("geçersiz");
      }
    } else {
      dispatch(loginUser());
    }
  };

  return (
    <div className="bg-pink  rounded-2xl w-[440px] h-[740px] max-[500px]:w-full max-[500px]:h-full max-[500px]:bg-pink/50">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col  items-center justify-center gap-5 ">
          <img src="/assets/logo.png" className="w-[200px]" alt="" />
          <div className="min-h-[72px]">
            {isSignUp ? (
              <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray italic">
                We don't want to see you among the crowds
              </h2>
            ) : (
              <h2 className="text-3xl text-red font-bold italic max-[500px]:text-center">
                No Lines, No Crowds
              </h2>
            )}
          </div>
        </div>

        <div className=" mt-5 relative">
          <div
            className={`w-[50%] h-[31.99px] rounded-lg bg-red transition ${
              isSignUp ? "translate-x-[100%]" : "translate-x-[0]"
            }`}
          ></div>
          <div className="absolute inset-0 w-[100%] flex items-center  font-bold italic">
            <button
              className={`w-50 cursor-pointer ${
                isSignUp ? "text-gray" : "text-pink"
              }`}
              onClick={changeFormSign}
            >
              Sign In
            </button>
            <button
              className={`w-50 cursor-pointer ${
                isSignUp ? "text-pink" : "text-gray"
              }`}
              onClick={changeFormSign}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 text-gray font-bold"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 text-gray font-bold"
                >
                  Password
                </label>
                {!isSignUp && (
                  <div className="text-sm">
                    <a
                      href="#"
                      className=" text-red font-bold hover:text-red/80"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-2 relative">
                <input
                  type={!showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 pr-10 py-1.5 text-base text-gray outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red sm:text-sm/6"
                  onChange={handleChange}
                  maxLength={11}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-0  h-full w-6 flex items-center justify-center cursor-pointer text-gray"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm/6 font-semibold text-pink shadow-xs hover:bg-red/80 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
                onClick={handleSign}
              >
                {!isSignUp ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 ">
            <Link to="/home" className="text-red hover:text-red/80">
              Continue without membership
            </Link>
          </p>

          <div className=" mt-5 flex  justify-center">
            <Socialcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
