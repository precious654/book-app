"use client";

import React from 'react'
import {FaStar} from "react-icons/fa6";
import {RiShareForwardLine} from "react-icons/ri";
import {Ellipsis} from "lucide-react";

const Icons = () => {
    const [favourite, setFavourite] = React.useState(false);
    const toggleFavourite = () => {
        setFavourite(!favourite);
    }
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <FaStar size={30} className={`${favourite ? "text-[#FFD700]" : "text-gray-200"}`} onClick={toggleFavourite} />
            <RiShareForwardLine size={30} strokeWidth={0.05}/>
            <Ellipsis size={30}/>
        </div>
    )
}
export default Icons
