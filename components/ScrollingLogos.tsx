import React from "react";

export default function ScrollingLogos({
    logos,
    direction
}: {
    logos: Array<string>,
    direction: "left" | "right"
}) {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-1/2">
                <div className="flex relative flex-nowrap overflow-hidden
                before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-30
                before:bg-gradient-to-r before:from-[var(--background)] before:to-transparent before:content-['']
                after:absolute after:left-[calc(100%-120px)] after:top-0 after:z-10 after:h-full after:w-30
                after:bg-gradient-to-l after:from-[var(--background)] after:to-transparent after:content-['']">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} className={`${direction == "right" ? "marquee-right-item" : "marquee-left-item"} h-32 w-auto flex-none px-5 py-2 opacity-50`} />
                    ))}
                    {/* Duplicates for seemless scrolling */}
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} className={`${direction == "right" ? "marquee-right-item" : "marquee-left-item"} h-32 w-auto flex-none px-5 py-2 opacity-50`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
