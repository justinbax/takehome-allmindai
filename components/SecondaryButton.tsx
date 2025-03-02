export default function SecondaryButton({
    link,
    text,
}: {
    link: string,
    text: string,
}) {
    return (
        <a href={link} className="secondary-button relative border-2 border-solid border-[#ffffff68] hover:border-white box-border transform hover:-translate-y-1 transition duration-400 ease-[--button-bezier]
        flex justify-around items-center text-md rounded-3xl overflow-hidden w-[160px] md:w-[180px] h-[45px]">
            <p className="text-white font-semibold text-[13px] mt-0">{text}</p>
            <img className="h-[14px] mr-[7px] invert" src="/assets/chevron-right-black.png" />
            <div className="absolute w-[200%] h-full bg-gradient-to-tr from-[#ffffff15] via-[#ffffff30] to-[#ffffff15] z-[-1] left-[-200%] transition duration-[600ms] ease-[--button-bezier] secondary-button-bg">
            </div>
        </a>
    );
}
