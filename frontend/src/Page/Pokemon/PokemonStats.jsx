import React from "react";

export function PokemonStats({label, value}) {
    const maxStat = 255
    const percent = (value / maxStat) * 100

    const color =
        value < 50 ? "bg-orange-800" :
        value < 90 ? "bg-yellow-400" :
                "bg-green-300"

    return (
        <div className="flex items-center gap-3 mb-2">
            <div className="w-20 font-semibold">{label}</div>
            <div className="w-10">{value}</div>

            <div className="w-75 lg:w-100 h-5 rounded overflow-hidden">
                <div
                    className={`${color} h-5`}
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
}