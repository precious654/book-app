"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {FaPeopleGroup} from "react-icons/fa6";
import {LuLibrary} from "react-icons/lu";
import {GrSettingsOption} from "react-icons/gr";
import {IoIosNotificationsOutline} from "react-icons/io";
import {BellDot} from 'lucide-react';
import Notifications from "@/app/(components)/Notifications";

const Nav = () => {
    const pathName = usePathname();
    console.log(pathName);

    const [displayNotifications, setDisplayNotifications] = React.useState(false);
    const [notifications, setNotifications] = React.useState(true);

    const toggleNotifications = () => {
        setDisplayNotifications(!displayNotifications);
    }

    return (
        <header className="pt-4">
            <nav className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
                    <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
                    <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
                </div>

                <div className="bg-[#F9F9F9] text-[#C5C5C5] text-sm flex gap-6 items-center p-3 rounded-xl">
                    <Link href="/feed" className={`${pathName === "/feed" ? "text-[#000000]" : ""} flex items-center gap-2`}>
                        <FaPeopleGroup/>
                        Feed
                    </Link>

                    <p>|</p>

                    <Link href="/library" className={`${pathName.includes("library") ? "text-[#000000]" : ""} flex items-center gap-2`}>
                        <LuLibrary/>
                        Library
                    </Link>
                </div>

                <div className="text-[#454545] flex items-center gap-3">
                    <Link href="/settings">
                        <GrSettingsOption style={{fontSize: '20px'}}/>
                    </Link>
                    {
                        notifications ? <BellDot style={{fontSize: '20px'}} onClick={toggleNotifications}
                                                 className="cursor-pointer"/>
                            : <IoIosNotificationsOutline size={25} onClick={toggleNotifications}
                                                         className="cursor-pointer"/>
                    }
                    <Link href="/profile">
                        <p className="w-5 h-5 rounded-full bg-[#70706E]"></p>
                    </Link>
                </div>
            </nav>
            {displayNotifications && <Notifications/>}
        </header>
    );
};


export default Nav;
