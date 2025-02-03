import React from 'react'
import Image from "next/image";
import Link from "next/link";
import data from  "../(data)/data.json";
import collections from "../(data)/collection.json";
import blueAndGold from "../../public/assets/blue-and-gold.jpg";
import gachiakuta from "../../public/assets/gachiakuta.jpg";
import random from "../../public/assets/random.jpg";
import { Ellipsis } from 'lucide-react';
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";

const Library = () => {
    const readData = data.filter((item) => item.id < 4);
    const pinnedData = data.filter((item) => item.id < 7);
    const readCollectedData = collections.filter((item) => item.id < 4);

    return (
        <main className="py-3">
            <div className="flex justify-between">
                <div className="w-7/12 flex flex-col gap-2">
                    <p className="text-2xl font-semibold">Library</p>
                    <p className="text-sm text-[#808080]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad corporis dolorum hic ipsum magnam natus nihil quam quos reiciendis! Laborum.
                    </p>
                </div>
                <div>
                    <button className="uppercase">edit layout</button>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-medium capitalize">continue reading</p>
                    <div className="flex items-center gap-2">
                        <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretLeft className="text-lg"/>
                        </button>
                        <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretRight className="text-lg"/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                    {
                        readData.map((item) => {
                            return (
                                <div key={item.id} className="flex gap-2">
                                    <Image src={blueAndGold} alt={item.name} width={100} className="rounded-xl"/>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-medium capitalize">{item.name}</p>
                                        <div className="flex gap-2 items-center text-sm">
                                            <p className={`${item.type === "comic" ? "bg-[#F5BFF1]" : "bg-[#B3D8FF]"} uppercase py-1 px-1.5 rounded-sm`}>{item.type}</p>
                                            <p className={`${item.type === "comic" ? "bg-[#B3D8FF]" : "bg-[#E7E7E7]"} uppercase py-1 px-1.5 rounded-sm`}>{item.chapters}</p>
                                        </div>
                                        <p className="text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Asperiores blanditiis commodi dicta ducimus esse eum ex magni nihil quidem
                                            voluptatum!
                                        </p>
                                    </div>
                                    <Ellipsis size={100} className="self-center cursor-pointer"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-2xl font-medium capitalize">pinned</p>
                <div className="grid grid-cols-3 gap-7 mt-4">
                    {
                        pinnedData.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex gap-1">
                                        <Image src={gachiakuta} alt={item.name} width={50} className="rounded-md"/>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xl font-medium capitalize">{item.name}</p>
                                            <div className="flex gap-2 items-center text-sm">
                                                <p className={`${item.type === "comic" ? "bg-[#F5BFF1]" : "bg-[#B3D8FF]"} uppercase py-1 px-1.5 rounded-sm`}>{item.type}</p>
                                                <p className="bg-[#E7E7E7] uppercase py-1 px-1.5 rounded-sm">{item.chapters}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Ellipsis size={25} className="self-center cursor-pointer"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-8">
                <p className="text-2xl font-medium capitalize">collections</p>
                <div className="grid grid-cols-3 gap-9 mt-4">
                    {
                        readCollectedData.map((item) => {
                            return (
                                <div key={item.id} className="flex gap-2">
                                    <Image src={random} alt={item.name} width={140} className="rounded-xl"/>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-medium capitalize">{item.name}</p>
                                            <Ellipsis size={20} className="cursor-pointer"/>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="bg-[#E7E7E7] uppercase  py-1 px-1.5 rounded-sm text-sm">{`${item.titles.length} titles`}</p>
                                            <p className="bg-[#B3D8FF] uppercase  py-1 px-1.5 rounded-sm text-sm">{`${item.genres} genres`}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="w-10 h-10 rounded-full bg-[#333333]"></p>
                                            <div className="flex flex-col gap-0.5 text-sm">
                                                <p className="text-[#ACACAC]">Created by</p>
                                                <p className="capitalize">{item.creator}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-5 text-center">
                    <Link href="/library/collection" className="uppercase text-[#1E86F1]">more</Link>
                </div>
            </div>
        </main>
    )
}
export default Library
