import React from 'react'
import data from "../(data)/data.json";
import Link from "next/link";
import {GoArrowUpRight} from "react-icons/go";
import {IBM_Plex_Mono} from "next/font/google";

const ibm = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const SearchBox = () => {
    const suggestedData = data.filter((item) => item.id < 3);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-9/12 py-1 rounded-lg border-2 border-red-500">
                <p className="text-[#45454580] py-2 px-[16px] border-b-2 border-[#4545451A]">TYPE ANYTHING</p>
                <div className="px-[16px] mt-[26px] flex flex-col gap-[8px]">
                    <p>SUGGESTED</p>
                    <div className="flex items-center gap-[12px]">
                        {suggestedData.map((item) => {
                            return (
                                <Link
                                    href="/"
                                    key={item.id}
                                    className="bg-gray-300 text-[#000000] px-[12px] py-[8px] rounded-lg flex items-center gap-[10px] text-sm"
                                >
                                    {typeof item.category === "object" && item.category.length >= 1 && (
                                        <p className="p-1 rounded-md uppercase bg-[#AFF4C6]">
                                            {item.category[0]}
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
                                    <GoArrowUpRight style={{fontSize: "20px"}}/>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="px-[16px] mt-[16px] flex flex-col gap-[12px]">
                    <p>GENRES</p>
                    <div className="flex items-center flex-wrap gap-[4px] text-sm">
                        {data.map((item) => {
                            return (
                                <div key={item.id} className={`${ibm.className} flex items-center gap-[4px] uppercase`}>
                                    <p className="py-[4px] px-[8px]">{item.publishedYear}</p>
                                    {item.category.map((item, index) => {
                                        return (
                                            <p key={index} className="py-[4px] px-[8px]">{item}</p>
                                        )
                                    })}
                                    <p className="py-[4px] px-[8px]">{item.issues} issues</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBox
