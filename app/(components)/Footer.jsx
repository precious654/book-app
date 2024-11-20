import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import data from "../(data)/data.json";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center">
      <div href="" className="flex items-center gap-4">
        {data.map((item) => {
          return (
            <Link
              href="/"
              key={item.id}
              className="bg-[#F9F9F9] text-[#454545] p-2 rounded-lg flex items-center gap-2"
            >
              {item.category.length >= 1 && (
                <p className="p-1 rounded-md uppercase bg-[#AFF4C6]">
                  {item.category}
                </p>
              )}
              <p
                className="p-1 rounded-md uppercase"
                style={{
                  backgroundColor:
                    item.type === "Manga"
                      ? "#B3D8FF"
                      : item.type === "Comic"
                      ? "#F5BFF1"
                      : "black",
                }}
              >
                {item.type}
              </p>
              <p className="font-semibold">{item.name}</p>
              <p>@{item.author}</p>
              <GoArrowUpRight style={{ fontSize: "20px" }} />
            </Link>
          );
        })}
        <Link
          href="/"
          className="flex gap-0 items-center bg-[#F9F9F9] py-2 pl-1 pr-2 rounded-lg"
        >
          <GoPlus style={{ fontSize: "20px" }} />
          MORE
        </Link>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="search"
          className="p-2 rounded-xl bg-[#F9F9F9]"
        />
      </form>
    </footer>
  );
};

export default Footer;
