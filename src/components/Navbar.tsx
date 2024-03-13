"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const router = useRouter();
  const [activeTheme, setActiveTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    const theme = localStorage.getItem("active-theme");
    if (theme === "light") {
      setActiveTheme("Light");
    } else {
      setActiveTheme("Dark");
    }
  }, []);
  const onHandleTheme = () => {
    // Membaca data pada localStorage
    const theme = localStorage.getItem("active-theme");
    if (theme === "light") {
      localStorage.setItem("active-theme", "dark");
      setActiveTheme("Dark");
    } else {
      localStorage.setItem("active-theme", "light");
      setActiveTheme("Light");
    }
    // Menyimpan data ke dalam localStorage
  };
  return (
    <div className="flex justify-between items-center p-4 shadow-xl w-full lbg-white">
      <div id="nav-logo">
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          App <span className="font-thin">NextJS</span>
        </span>
      </div>
      <div id="btn-navigation" className="flex items-center gap-10">
        <span className="cursor-pointer" onClick={() => router.push("/about")}>
          About Us
        </span>
        <span
          className="cursor-pointer"
          onClick={() => router.push("/services")}
        >
          Services
        </span>
        <span
          className="px-4 py-1 cursor-pointer border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white"
          onClick={onHandleTheme}
        >
          {activeTheme}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
