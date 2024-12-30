import React from 'react';
import Image from "next/image";
import image from "../../public/assets/absoluteBatman.jpg"
import data from '../(data)/data.json';
import { FaPlay } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

function Feed() {
    const aBatman = data.filter( (item) => item.id === 3 );

    return (
        <main>
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Feed</p>
                <p className="text-sm text-[#808080]">
                    Discover the latest updates from your favorite comics and explore new series.
                    Stay up to date with your reading list and never miss a new chapter.
                </p>
            </div>

            <div className="mt-7">
                {
                    aBatman.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="flex gap-2">
                                    <Image src={image} alt={item.name} width={150} height={50} className="rounded-lg" />
                                    <div className="flex flex-col gap-2.5">
                                        {item.issues > 1 ? <p className="text-[#454545] uppercase">{`issue #${item.issues}`}</p> : null}
                                        <p className="capitalize font-semibold text-4xl">{item.name}</p>
                                        <div className="uppercase text-sm flex items-center gap-2">
                                            <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{item.publishedYear}</p>
                                            <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{item.status}</p>
                                            {item.issues && <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{`${item.issues} issues`}</p>}
                                            <div className="flex items-center gap-2">
                                                {item.category.map((item, index) => {
                                                    return (
                                                        <p key={index} className="bg-[#FFE9A3] py-1 px-1.5 rounded-sm">{item}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <p className="uppercase text-[#454545]">synopsis</p>
                                        <p className="text-[#808080] text-sm">{item.synopsis}</p>
                                        <div className="flex items-center gap-4">
                                            <button className="bg-[#F1EFEE] px-6 py-2 rounded-lg flex items-center gap-2.5">
                                                Read
                                                <FaPlay />
                                            </button>
                                            <button className="bg-[#F1EFEE] px-6 py-2 rounded-lg flex items-center gap-2.5">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-7 flex justify-between items-center">
                <p className="font-medium text-xl">Trending</p>
                <div className="flex items-center gap-2">
                    <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretLeft className="text-lg" /></button>
                    <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretRight className="text-lg" /></button>
                </div>
            </div>
        </main>
    );
}

export default Feed;