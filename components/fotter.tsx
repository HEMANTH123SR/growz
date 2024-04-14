import { Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="pt-12 pb-20 px-8 md:px-16 w-full  bg-green-600 text-white  border-t-2 border-white">
            <div className="flex  justify-between w-full  ">
                <div className="hidden  md:flex flex-col h-full justify-center space-y-5">
                    <h2 className="text-start text-lg font-semibold ">Discover</h2>
                    <ul className="flex flex-col justify-center items-start space-y-2">
                        <li>About Us</li>
                        <li>How it Works</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex flex-col h-full justify-center space-y-5 ">
                    <h2 className="text-start text-lg font-semibold ">Explore</h2>
                    <ul className="flex flex-col justify-center items-start space-y-2">
                        <li>Local Markets</li>
                        <li>Events</li>
                        <li>Featured Vendors</li>
                    </ul>
                </div>
                <div className="flex flex-col h-full justify-center space-y-5">
                    <h2 className="text-start text-lg font-semibold ">Support</h2>
                    <ul className="flex flex-col justify-center items-start space-y-2 ">
                        <li>Learn</li>
                        <li>Video Guides</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="hidden  sm:flex flex-col h-full justify-center space-y-5">
                    <h2 className="text-start text-lg font-semibold ">Social</h2>
                    <ul className="flex flex-col justify-center items-start  space-y-2">
                        <li className="flex space-x-3">
                            <Twitter strokeWidth={1} /> <span>Twitter</span>
                        </li>
                        <li className="flex space-x-3">
                            <Linkedin strokeWidth={1} /> <span>Linkedin</span>
                        </li>
                        <li className="flex space-x-3">
                            <Instagram strokeWidth={1} /> <span>Instagram</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between w-full border-t border-white mt-10">
                <span className="text-xs mt-5 sm:mt-2 text-center">
                    2024 Growz All rights reserved
                </span>
                <div className="flex mt-2 text-xs space-x-5 sm:space-x-3 justify-center">
                    <span className="cursor-pointer">Privacy Policy</span>
                    <span className="cursor-pointer">Terms of Use</span>
                </div>
            </div>
        </footer>
    );
};
