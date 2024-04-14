"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { semiBoldPoppins } from "@/lib/fonts";
import { Bell, Search } from "lucide-react";
import { GiFarmer } from "react-icons/gi";

export const Nav = () => {
  const scrollToSection = (data: string) => {
    data = data.toLowerCase();
    const section = document.getElementById(data);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50  flex flex-col md:flex-row md:space-y-0 pb-3 md:pb-0 border-b border-green-400 bg-green-600 ">
      <nav className="h-14 md:h-16 w-full px-3 sm:px-6 flex items-center justify-between">
        {/* logo */}
        <Link href={"/"} className="md:w-1/5 flex justify-start">
          <div className="flex flex-row justify-center items-center space-x-0.5">
            <GiFarmer className="h-7 w-7 text-white" />
            <h1
              className={` text-white text-xl font-semibold  ${semiBoldPoppins.className}`}
            >
              GROWZ
            </h1>
          </div>
        </Link>

        {/* navigation links */}
        <div className="hidden md:flex justify-center items-center space-x-5 lg:space-x-12 text-white w-3/5">
          {["Overview", "Market", "Search", "Organize"].map(
            (data: string) => {
              if (
                data === "Search" ||
                data === "Organize" ||
                data == "Dashboard"
              ) {
                return (
                  <Link
                    key={data}
                    href={
                      data.toLowerCase() == "catlog"
                        ? "search"
                        : data.toLowerCase()
                    }
                  >
                    <span className="font-semibold cursor-pointer">
                      {data === "Search" ? "Catlog" : data}
                    </span>
                  </Link>
                );
              }
              return (
                <span
                  className="font-semibold  cursor-pointer"
                  key={data}
                  onClick={() => {
                    scrollToSection(data);
                  }}
                >
                  {data}
                </span>
              );
            }
          )}
        </div>
        {/* auth */}
        <div className="md:w-1/5 flex justify-end items-center space-x-6">
          <Link href={"search"}>
            <Search strokeWidth={1.5} className="text-white cursor-pointer" />
          </Link>

          <UserButton />
        </div>
      </nav>
      {/* small screen navigation */}
      <div className="flex justify-center my-1.5">
        <div className="flex md:hidden  justify-evenly items-center text-white  w-11/12 sm:w-9/12">
          {["Home", "Market", "Catlog", "Organize"].map((data: string) => {
            return (
              <Link href={data.toLowerCase()} key={data}>
                <span
                  className={`font-semibold cursor-pointer  ${data == "Home" && "hidden sm:block"
                    }`}
                >
                  {data}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
