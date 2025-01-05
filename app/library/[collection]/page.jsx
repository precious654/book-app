import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CirclePlus } from 'lucide-react';
import collection from "../../(data)/collection.json";
import image from "@/public/assets/random.jpg";

const Collection = () => {
    return (
        <main className="py-3">
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Collections</p>
                <p className="text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad corporis dolorum hic ipsum magnam natus nihil quam quos reiciendis! Laborum.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-8">
                <div className="flex flex-col gap-2">
                    <div
                        className="flex justify-center items-center w-60 h-52 bg-[#F1EFEE] rounded-lg border border-[#E7E7E7]">
                        <CirclePlus size={50} className="text-gray-400"/>
                    </div>
                    <p className="text-xl font-medium capitalize">create collection</p>
                </div>

                {
                    collection.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-col gap-2">
                                <Image src={image} alt={item.name} width={250} className="rounded-lg h-52" />
                                <div className="flex flex-col gap-4">
                                    <Link href={`/library/collection/${item.id}`} className="text-xl font-medium capitalize">{item.name}</Link>
                                    <div className="flex items-center gap-2">
                                        <p className="bg-[#E7E7E7] uppercase  py-1 px-1.5 rounded-sm text-sm">{item.titles.length} titles</p>
                                        <p className="bg-[#AFF4C6] uppercase  py-1 px-1.5 rounded-sm text-sm">{item.genres} genres</p>
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
        </main>
    )
}
export default Collection
