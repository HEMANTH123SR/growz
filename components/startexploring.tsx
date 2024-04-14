"use client"
import { MoveRight } from "lucide-react";

export const StartExploring = () => {
    const scrollToSection = (data: string) => {
        data = data.toLowerCase();
        const section = document.getElementById(data);
        console.log(section);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return <div
        className="mt-8 h-14 w-72 bg-white rounded-full text-green-600 flex justify-center items-center space-x-4 cursor-pointer "
        onClick={() => {
            scrollToSection("Market")
        }}

    >
        <span className="font-semibold text-lg">
            Start Exploring on Growz
        </span>
        <MoveRight className="w-6 h-6 fill-green-600" />
    </div>
}