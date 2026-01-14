import React from "react";
import logo from "../assets/logos/oncampus.svg";
import Button from "./ui/Button";

const NavBar = () => {
  return (
    <div className="w-full px-8 py-5 font-inter">
      <nav className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <section className="flex gap-2">
          <select className="text-[15px]">
            <option value="students">Students</option>
            <option value="employers">Employers</option>
            <option value="universities">Universites</option>
          </select>
          <button className="">
            <button
              className={`bg-transparent hover:bg-black hover:text-[white] border border-black transition-colors duration-150 hover:cursor-pointer px-4 py-2 rounded-sm `}
            >
              <p className={` font-medium text-[16px]`}>Sign up</p>
            </button>{" "}
          </button>
          <Button content="Log in" bgColor="#000000" textColor="#ffffff" />
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
