import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white font-small mt-20">
                <div className="flex flex-wrap justify-around pt-32 pb-16 cursor-pointer">
                    <div className=" w-96 my-auto">
                        <img
                            className="w-16 p-2"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt=""
                        />
                        <p className="p-2">
                            Making the world a better place through constructing
                            elegant hierarchies.
                        </p>
                        <span className="flex gap-5 font-bold text-xl text-gray-500">
                            <FaFacebook />
                            <SiInstagram />
                            <BsTwitterX />
                            <FaGithub />
                            <CiYoutube />
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-medium ">Support</p>
                        <p>API Status</p>
                        <p>Guides</p>
                        <p>Documentation</p>
                        <p>Pricing</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-medium ">Company</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Jobs</p>
                        <p>Blog</p>
                        <p>About</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-medium ">Legal</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Claim</p>
                        <p>Legal</p>
                    </div>
                </div>
                <hr className="container mx-auto" />
                <div className="container mx-auto px-10 pt-2 pb-10 text-gray-300">
                    <h1>© 2020 Your Company, Inc. All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;
