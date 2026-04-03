"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "#" },
    { title: "Services", path: "#" },
    { title: "Pricing", path: "#" },
    { title: "Blog", path: "#" },
    { title: "Resources", path: "#" },
  ];

  const links = (
    <>
      {navItems.map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <li key={index}>
            <Link
              href={item.path}
              className={`hover:text-primary transition-colors ${
                isActive
                  ? "text-primary font-bold underline underline-offset-10"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm py-1">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="">
            <Image src="/google.png" alt="logo" height={25} width={125} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 gap-5 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white p-5 rounded-md">
            Schecdule A Meeting <IoMdArrowForward size={20} />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
