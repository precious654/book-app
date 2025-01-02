import React from "react"
import Image from "next/image";
import data from "../(data)/data.json"
import dandadan from "@/public/assets/dandadan.jpg"

const Notifications = () => {
    const notificationsData = data.filter((item) => item.id > 3 && item.id < 8 );

    return (
        <div className="w-1/4 bg-[#F1EFEE] rounded-2xl absolute top-20 right-12">
            <p className="text-center uppercase text-[#9F9F9F] p-3">Notifications</p>
            <hr className="font-medium"/>
            <div className="flex flex-col gap-3 p-3 mt-1">
                {
                    notificationsData.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <Image src={dandadan} alt={item.name} width={30} height={30} className="rounded-md" />
                                    <p className="font-mediumm text-md capitalize">{item.name}</p>
                                    <p className="uppercase">issue</p>
                                    <p>{item.issues}</p>
                                </div>
                                <p className="py-1 px-1.5 bg-[#B3D8FF] rounded-md uppercase">new</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Notifications
