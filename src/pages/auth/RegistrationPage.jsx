import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MailOutline,
  LockOutlined,
  PersonOutline,
  Google,
} from "@mui/icons-material";
import AuthLayout from "../../components/layout/AuthLayout";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import SignUpImage from "../../assets/images/Illustration.png";
import elips from "../../assets/images/Ellipse.png";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  return (
    <AuthLayout>
      <div className="relative h-screen grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-0 pt-10 md:pt-0">
        <img src={elips} alt="elips" className="absolute left-0 -top-[3%]" />
        <div className="flex justify-center items-center h-full w-full md:order-1 order-2">
          <img
            src={SignUpImage}
            alt="logIn page image"
            className="md:w-[45%] h-auto w-[55%]  rotate-[30deg] md:opacity-[1] opacity-[0.4] absolute top-[50%] -translate-y-[50%] z-0"
          />
        </div>
        <div className="md:ml-20 flex flex-col justify-center items-center h-full w-full md:w-[90%] px-10 z-10 ">
          <h1 className="w-full text-left font-bold text-4xl">SignUp</h1>
          <p className="w-full text-left my-5">SignUp to Create Your Account</p>
          {/* REGISTRATION FORM */}

          <form
            className="rounded-lg md:w-[100%] w-full flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              icon={PersonOutline}
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="balama@gmail.com"
              icon={MailOutline}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              icon={LockOutlined}
            />
            <Button type="submit" fullWidth>
              Create account
            </Button>
            <Button type="button" variant="google" fullWidth>
              <Google className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>
            <div className="text-center text-sm text-gray-500">
              Already have a account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-600">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
