import React from 'react'
import Image from 'next/image'
import avatar from "@/public/assets/avatar.jpg";
import anilist from "@/public/assets/AniList_logo.svg.png";
import mal from "@/public/assets/MyAnimeList_Logo.png";
import { CloudUpload } from 'lucide-react';

const Settings = () => {
    return (
        <main className="py-3">
            <div className="w-7/12 flex flex-col gap-2">
                <p className="text-2xl font-semibold">Settings</p>
                <p className="text-sm text-[#808080]">
                    Update your profile, manage your reading lists, integrate your favorite services,
                    and toggle recent activity and reading list visibility.
                </p>
            </div>

            <div className="flex gap-3 mt-7">
                <Image src={avatar} alt="Avatar" width={200} className="rounded-xl" />
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <p className="capitalize text-xl font-normal">your photo</p>
                        <p className="text-sm">This will be displayed on your profile.</p>
                    </div>
                    <div className="w-full">
                        <input type="file" id="file" className="hidden"/>
                        <label htmlFor="file" className="file-upload p-4">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="bg-white p-2 w-fit rounded-full">
                                        <div className="bg-gray-200 p-2 w-fit rounded-full">
                                            <CloudUpload/>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Click to upload<span className="opacity-60"> or drag and drop</span></p>
                                        <p className="opacity-60">SVG, PNG, JPG or GIF (max. 720x720px)</p>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
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
                    <p className="bg-[#F1EFEE] p-4 rounded-xl flex-grow text-sm">
                        I&apos;m a Product Designer based in Rivers, Nigeria.
                        I specialise in UX/UI design, brand strategy, and Webflow development.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-medium text-xl capitalize">privacy</p>
                    <div className="flex gap-4 items-center">
                        <div>
                            <p className="capitalize font-medium text-lg">recent activity</p>
                            <p className="opacity-60 text-sm">
                                Allow other users see your recent activity including, read comics, bookmarks and
                                favorites
                            </p>
                        </div>
                        <div>
                            <input type="checkbox" id="check" className="hidden"/>
                            <label
                                htmlFor="check"
                                className="toggle-button"
                            ></label>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div>
                            <p className="capitalize font-medium text-lg">recent activity</p>
                            <p className="opacity-60 text-sm">
                                Allow other users see your recent activity including, read comics, bookmarks and
                                favorites
                            </p>
                        </div>
                        <div>
                            <input type="checkbox" id="checkIn" className="hidden"/>
                            <label
                                htmlFor="checkIn"
                                className="toggle-button"
                            ></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <p className="capitalize font-medium text-xl">tracking</p>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <Image src={mal} alt="MyAnimeList" width={90} className="rounded-xl"/>
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
