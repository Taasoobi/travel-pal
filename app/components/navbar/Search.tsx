'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <div className="border border-gray-300 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">Places</div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x border-gray-300 flex-1 text-center">Date</div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">People</div>
                    <div className="p-2 bg-cyan-500 rounded-full text-white"><BiSearch size={18} /></div>
                </div>
            </div>
        </div>
    );
};

export default Search;