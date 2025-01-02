import React from 'react'
import Image from "next/image";
import data from  "../(data)/data.json"
import blueAndGold from "@/public/assets/blue-and-gold.jpg"
import { Ellipsis } from 'lucide-react';

const Library = () => {
    const readData = data.filter((item) => item.id < 4);

    return (
        <main>
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Library</p>
                <p className="text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad corporis dolorum hic ipsum magnam natus nihil quam quos reiciendis! Laborum.
                </p>
            </div>

            <div className="mt-7">
                <p className="text-2xl font-medium capitalize">continue reading</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                    {
                        readData.map((item) => {
                            return (
                                <div key={item.id} className="flex gap-2">
                                    <Image src={blueAndGold} alt={item.name} width={100} className="rounded-xl" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-medium capitalize">{item.name}</p>
                                        <div className="flex gap-2 items-center text-sm">
                                            <p className={`${item.type === "comic" ? "bg-[#F5BFF1]" : "bg-[#B3D8FF]"} uppercase py-1 px-1.5 rounded-sm`}>{item.type}</p>
                                            <p className={`${item.type === "comic" ? "bg-[#F5BFF1]" : "bg-[#E7E7E7]"} uppercase py-1 px-1.5 rounded-sm`}>{item.chapters}</p>
                                        </div>
                                        <p className="text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Asperiores blanditiis commodi dicta ducimus esse eum ex magni nihil quidem voluptatum!
                                        </p>
                                    </div>
                                    <Ellipsis size={100} className="self-center" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default Library
