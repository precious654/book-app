import React from 'react'
import Image from "next/image";
import avatar from "../../public/assets/avatar.jpg";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";
import data from "..//(data)/data.json";
import superman from "../../public/assets/superman.jpg";
import {Ellipsis} from "lucide-react";

const Profile = () => {
    const dcData = data.filter((item) => item.author === "DC" );

    return (
        <main className="py-3">
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Profile</p>
                <p className="text-sm text-[#808080]">
                    Customize your reading experience.
                    Adjust reading direction, background color, notifications, and manage your account preferences.
                </p>
            </div>

            <div className="flex gap-6 mt-7 items-center">
                <Image src={avatar} alt="Avatar" width={200} className="rounded-xl"/>
                <div className="flex flex-col gap-4">
                    <p className="w-48 rounded-lg bg-[#F1EFEE] h-14"></p>
                    <p className="w-48 rounded-lg bg-[#F1EFEE] h-14"></p>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-xl">Recent Activity</p>
                    <div className="flex items-center gap-2">
                        <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretLeft className="text-lg"/>
                        </button>
                        <button className="bg-[#F1EFEE] px-2.5 py-1 rounded-md"><FaCaretRight className="text-lg"/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-7 mt-4">
                    {
                        dcData.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <Image src={superman} alt={item.name} width={70} className="rounded-md"/>
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-xl font-medium capitalize">{item.name}</p>
                                            <div className="flex gap-2 items-center text-sm">
                                                <p className={`${item.type === "comic" ? "bg-[#F5BFF1]" : "bg-[#B3D8FF]"} uppercase py-1 px-1.5 rounded-sm`}>{item.type}</p>
                                                <p className="bg-[#E7E7E7] uppercase py-1 px-1.5 rounded-sm">{item.chapters}</p>
                                            </div>
                                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut!</p>
                                        </div>
                                    </div>
                                    <Ellipsis size={30} className="self-center cursor-pointer"/>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </main>
    )
}
export default Profile
