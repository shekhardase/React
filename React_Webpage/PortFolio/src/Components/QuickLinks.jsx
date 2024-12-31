import React from "react";

function QuickLinks() {
    return (
        <div className="quicklinks mt-10 w-auto flex flex-col items-center font-nunito font-bold text-black text-xl">

            <h1 className="mb-5 text-2xl">Quick Links</h1>

            <div className="flex justify-center items-center space-x-4 p-4 bg-slate-300 border-t-4 border-b-4 border-black w-full">

                <div className="flex items-center justify-between px-5 py-3 bg-slate-400  hover:bg-slate-900 hover:text-white transition rounded-md shadow-md">

                    <a href="#" className="text-black hover:text-white">Blog</a>

                    <span className="ml-2">↗</span>

                </div>

                <div className="flex items-center justify-between px-5 py-3 bg-slate-400  hover:bg-slate-900 hover:text-white transition rounded-md shadow-md">

                    <a href="#" className="text-black hover:text-white">Projects</a>

                    <span className="ml-2">↗</span>

                </div>

                <div className="flex items-center justify-between px-5 py-3 bg-slate-400  hover:bg-slate-900 hover:text-white transition rounded-md shadow-md">

                    <a href="#" className="text-black hover:text-white">About</a>

                    <span className="ml-2">↗</span>

                </div>

                <div className="flex items-center justify-between px-5 py-3 bg-slate-400  hover:bg-slate-900 hover:text-white transition rounded-md shadow-md">

                    <a href="#" className="text-black hover:text-white">Contact</a>

                    <span className="ml-2">↗</span>

                </div>

            </div>
        </div>
    );
}

export default QuickLinks;
