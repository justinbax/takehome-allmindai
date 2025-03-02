export default function Video({
    link,
    video,
    poster
}: {
    link: string,
    video: string,
    poster: string
}) {
    return (
        <div className="w-[90%] m-auto ">
            <div className="relative w-full h-full video-container flex items-center justify-center">
                <a href={link} className="absolute left-[calc(50%-65px)] top-[calc(50%-65px)] w-[130px] h-[130px] flex justify-center items-center z-50 transition-all duration-500 ease-[--button-bezier] hover:scale-125">
                    <img src="/assets/play-icon.png" className="video-play-button transition duration-300 z-30 opacity-70" />
                    <div className="video-play-border absolute transition duration-300 rounded-[96px] top-[2px] opacity-0 w-full h-full z-20 bg-[#ffffff20] backdrop-blur-md border-[20px] border-solid border-[#ffffff40]" />
                    <div className="video-play-radiate absolute transition rounded-[96px] top-[2px] w-full h-full z-10" />
                </a>
                <video autoPlay loop muted playsInline disableRemotePlayback poster={poster} className="rounded-2xl shadow-2xl">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}