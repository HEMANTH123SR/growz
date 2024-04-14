"use client";
import React, { useState, useEffect, useRef } from "react";
import { data } from "@/app/data";
const Search = () => {
    interface Event {
        event: string;
        catalog: string[];
    }

    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [match, setMatch] = useState<String[]>([]);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    function findEventByCatalog(catalogItem: string, events: Event[]) {
        const matchingEvents = [];
        for (const event of events) {
            if (event.catalog.includes(catalogItem)) {
                matchingEvents.push(event.event);
            }
        }
        return matchingEvents;
    }

    useEffect(() => {
        setMatch(findEventByCatalog(search, data));
    }, [search]);
    return (
        <div className="w-full min-h-screen flex flex-col space-y-1 items-center mt-6 pt-16">
            <input
                className="w-10/12 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans custom-placeholder no-border text-green-600 outline-none"
                ref={inputRef}
                type="text"
                aria-label="search"
                placeholder="Search Catlog..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-10/12 h-0.5 bg-green-600 "></div>
            <div className="min-h-4"></div>
            <div className="flex flex-col space-y-5">
                {match.map((data) => {
                    return (
                        <div
                            key={data as string}
                            className="bg-slate-200 text-green-500 text-lg font-semibold py-4 px-8 rounded-md"
                        >
                            {data}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
