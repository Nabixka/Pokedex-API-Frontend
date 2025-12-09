import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { GameContent } from "./GamesContent";

export default function Games() {
    return (
        <div>
            <div className="fixed top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="pt-20 pb-10 pr-10">
                <GameContent />
            </div>
        </div>
    )
}