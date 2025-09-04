"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { base_url, base_url1 } from "../Helper/helper";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await axios.post(`${base_url1}/api/users/login`, formData);
      setSuccessMsg("Login successful!");

      console.log(res.data.user)
      setTimeout(() => {
        localStorage.setItem("user",JSON.stringify(res.data.user))
        localStorage.setItem("token",JSON.stringify(res.data.token))
        router.push("/");
      }, 1500);
    } catch (error) {
      if (error.response?.status === 401) {
        setErrorMsg("Invalid email or password.");
      } else if (error.response?.status === 500) {
        setErrorMsg("Server error. Please try again later.");
      } else {
        setErrorMsg(error.response?.data?.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-[#fdfbf7] min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-8 border border-gray-400 shadow-lg rounded-md bg-[#fefdfb]">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-wide">
            Welcome Back to{" "}
            <span className="text-indigo-800">trendingstori</span>
          </h1>
          <p className="mt-2 text-sm italic text-gray-600">
            “Log in to continue your journey.”
          </p>
        </div>

        {/* Alerts */}
        {errorMsg && (
          <div className="text-red-700 bg-red-100 border border-red-300 px-3 py-2 text-sm rounded mb-3 text-center">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="text-green-700 bg-green-100 border border-green-300 px-3 py-2 text-sm rounded mb-3 text-center">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1 font-serif">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-700 font-serif bg-[#fcfbf8]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1 font-serif">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-700 font-serif bg-[#fcfbf8]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-800 text-white px-6 py-2 rounded text-sm mt-2 hover:bg-indigo-900 transition font-serif shadow-md"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-sm text-center mt-6 text-gray-700 font-serif">
          New here?{" "}
          <a
            className="text-indigo-800 font-semibold hover:underline"
            href="/register"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
