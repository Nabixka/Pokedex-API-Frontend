import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer(){
    return(
        <div className="bg-neutral-700 text-white p-5">
            <div className="flex justify-center gap-10">
                <div className="flex flex-col gap-5 border-r pr-5">
                    <div className="font-bold">
                        The Pokemon Company
                    </div>
                    <div className="flex flex-col">
                        <p>News</p>
                        <p>Parent Guide</p>
                        <p>Customer Service</p>
                        <p>About our company</p>
                        <p>Careers</p>
                        <p>Select a Country/Region</p>
                        <p>Press Site</p>
                    </div>
                </div>
                <div className="flex justify-center align-center items-center">
                    <Facebook size={35} />
                    <Instagram size={35} />
                    <Twitter size={35} />
                    <Youtube size={35} />
                </div>
                <div className="flex border-l pl-5">
                    
                </div>
            </div>
        </div>
    )
}