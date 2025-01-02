import React from 'react'
import Image from 'next/image'
import avatar from "@/public/assets/avatar.jpg";
import anilist from "@/public/assets/AniList_logo.svg.png";
import mal from "@/public/assets/MyAnimeList_Logo.png";

const Settings = () => {
    return (
        <main>
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Settings</p>
                <p className="text-sm text-[#808080]">
                    Update your profile, manage your reading lists, integrate your favorite services,
                    and toggle recent activity and reading list visibility.
                </p>
            </div>

            <div className="flex gap-3 mt-7">
                <Image src={avatar} alt="Avatar" width={200} className="rounded-xl" />
                <div>
                    <p className="capitalize text-xl font-normal">your photo</p>
                    <p className="text-sm text-[]">This will be displayed on your profile.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-xl capitalize">Display name</p>
                    <p className="bg-[#F1EFEE] p-4 rounded-xl opacity-60 capitalize">barth</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-xl capitalize">username</p>
                    <p className="bg-[#F1EFEE] p-4 rounded-xl">@barthkosi</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-xl capitalize">about</p>
                    <p className="bg-[#F1EFEE] p-4 rounded-xl">
                        I'm a Product Designer based in Rivers, Nigeria.
                        I specialise in UX/UI design, brand strategy, and Webflow development.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-xl capitalize">privacy</p>
                    <div>
                        <p className="capitalize font-medium text-lg">recent activity</p>
                        <p className="opacity-60 text-sm">
                            Allow other users see your recent activity including, read comics, bookmarks and favorites
                        </p>
                        <div></div>
                    </div>
                    <div>
                        <p className="capitalize font-medium text-lg">recent activity</p>
                        <p className="opacity-60 text-sm">
                            Allow other users see your recent activity including, read comics, bookmarks and favorites
                        </p>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <p className="capitalize font-medium text-xl">tracking</p>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <Image src={mal} alt="MyAnimeList" width={90} className="rounded-xl" />
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-medium">MyAnimeList</p>
                                <p className="opacity-60 text-sm">
                                    Allow other users see your recent activity including, read comics, bookmarks and
                                    favorites
                                </p>
                            </div>
                        </div>
                        <button className="text-[#AFF4C6]">connect</button>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1.5">
                            <Image src={anilist} alt="MyAnimeList" width={90} className="rounded-xl"/>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-medium">MyAnimeList</p>
                                <p className="opacity-60 text-sm">
                                    Allow other users see your recent activity including, read comics, bookmarks and
                                    favorites
                                </p>
                            </div>
                        </div>
                        <button className="text-[#AFF4C6]">connect</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Settings
