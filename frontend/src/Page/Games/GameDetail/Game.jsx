import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import { GameDetail } from "./GameDetail";

export default function Game() {
    return (
        <div>
            <div className="fixed top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="pt-20">
                <GameDetail />
            </div>
        </div>
    )
}