import React from "react";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = () => {
  return (
    <header className="pt-4">
      <nav className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
          <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
          <p className="w-3 h-3 rounded-full bg-[#70706E]"></p>
        </div>

        <div className="bg-[#F9F9F9] text-[#C5C5C5] text-sm flex gap-6 items-center p-3 rounded-xl">
          <Link href="/feed" className="flex items-center gap-2">
            <FaPeopleGroup />
            Feed
          </Link>

          <p>|</p>

          <Link href="/library" className="flex items-center gap-2">
            <LuLibrary />
            Library
          </Link>
        </div>

        <div className="text-[#454545] flex items-center gap-3">
          <Link href="/settings">
            <GrSettingsOption style={{ fontSize: '20px' }}/>
          </Link>
          <IoIosNotificationsOutline style={{ fontSize: '25px' }}/>
          <p className="w-5 h-5 rounded-full bg-[#70706E]"></p>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
