import React from "react";
import Image from "next/image";
import collections from "@/app/(data)/collection.json";
import info from "@/app/(data)/data.json";
import dc from "@/public/assets/dc.jpg";
import superman from "@/public/assets/superman.jpg"
import Icons from "@/app/(components)/Icons";
import {ArrowDownUp, Ellipsis} from 'lucide-react';

const collectionId = async ({params}) => {
    const collectionId = (await params).collectionId;
    const data = collections.filter((item) => item.id === Number(collectionId));
    const collectionData = info.filter((item) => item.author === "DC" );

    return (
        <main className="py-4">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-semibold">Collections</p>
                <p className="uppercase">library/collections/{data[0].name}</p>
            </div>
            <div className="mt-8">
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="flex gap-4">
                                <Image src={dc} alt={item.name} width={350} className="rounded-xl h-72" />

                                <div className="flex flex-col gap-3 flex-grow-0">
                                    <div className="text-3xl font-semibold capitalize">{item.name}</div>
                                    <div className="flex items-center gap-2">
                                        <p className="bg-[#E7E7E7] uppercase  py-1 px-1.5 rounded-sm text-sm">{item.titles.length} titles</p>
                                        <p className="bg-[#AFF4C6] uppercase  py-1 px-1.5 rounded-sm text-sm">{item.genres} genres</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="w-10 h-10 rounded-full bg-[#333333]"></p>
                                        <p className="capitalize font-medium">{item.creator}</p>
                                    </div>
                                    <p>{item.description}</p>
                                    <Icons />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center text-[#454545] font-medium">
                    <div className="flex gap-4 items-center">
                        <p>#</p>
                        <p className="ml-2">Cover</p>
                        <p className="ml-4">Details</p>
                    </div>
                    <p className="flex items-center uppercase">Sort:{<ArrowDownUp size={12}/>}A-z</p>
                </div>

                <div className="flex flex-col gap-4 mt-3">
                    {collectionData.map((item, index) => {
                        return (
                            <div key={item.id} className="flex justify-between items-center text-[#454545] font-medium">
                                <div className="flex gap-4 items-center">
                                    <p>{index < 10 ? "0"+(index + 1) : index + 1}</p>
                                    <Image src={superman} alt={item.name} width={70} className="rounded-lg" />
                                    <div className="flex flex-col gap-3">
                                        <p className="capitalize font-medium text-xl">{item.name}</p>
                                        <div className="uppercase text-xs flex items-center gap-2">
                                            <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{item.publishedYear}</p>
                                            <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{item.status}</p>
                                            {item.issues > 1 && <p className="bg-[#E7E7E7] py-1 px-1.5 rounded-sm">{`${item.issues} issues`}</p>}
                                            {item.category.map((item, index) => {
                                                return (
                                                    <p key={index} className="bg-[#FFE9A3] py-1 px-1.5 rounded-sm">{item}</p>
                                                )
                                            })}
                                        </div>
                                        <p className="text-xs pr-4">{item.synopsis}</p>
                                    </div>
                                    <Ellipsis size={40}/>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
export default collectionId
