import FaqSection from "./FaqSection";
import PrimaryButton from "./PrimaryButton";
import ShortTextBlock from "./ShortTextBlock";

export default function Info() {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-[1.3rem] pb-[4rem]">
                {/* Section 1 */}
                <div className="dashed-box flex flex-row items-center justify-center w-fit gap-2 relative p-5">
                    <img src="/assets/code-icon.png" className="w-[1.2rem]" />
                    <h2 className="text-xl font-mono">Ask any question</h2>
                </div>
                <div>
                    <h3 className="text-center font-semibold font-sans font-lg text-gray-300">
                        Camel uses your live data.<br /> Get tables and charts instantly.
                    </h3>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                <img src="/assets/chat-demo-ss.png" className="w-[calc(100%-4rem)]" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[1.3rem] pb-[4rem]">
                {/* Section 2 */}
                <div className="dashed-box flex flex-row items-center justify-center w-fit gap-2 relative p-5">
                    <img src="/assets/light-bulb-icon.png" className="w-[1.2rem]" />
                    <h2 className="text-xl font-mono">Powerful Dashboards</h2>
                </div>
                <div>
                    <h3 className="text-center font-semibold font-sans font-lg text-gray-300">
                        Save any graph to a live dashboard.<br />Start a chat to answer ad hoc questions.
                    </h3>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                <img src="/assets/dashboard-demo-ss.png" className="w-[calc(100%-4rem)]" />
                </div>
            </div>
            <div className="flex justify-center pb-[80px]">
                {/* Section 3 */}
                <div className="flex flex-row gap-[2.5rem] w-[calc(100%-3rem)]">
                    <div className="flex flex-col items-start gap-[2.5rem] w-2/5">
                        <h2 className="font-mono text-2xl">Want to build with camelAI?</h2>
                        <h3 className="text-lg font-sans text-[#ffffffa9]">Embed AI-powered analytics directly in your application with our API</h3>
                        <PrimaryButton link="/" text="Join API Waitlist" />
                    </div>
                    <div className="flex flex-col gap-[1.5rem]">
                        <ShortTextBlock title="Natural Language → SQL" text="Same powerful query engine that powers camelAI" />
                        <ShortTextBlock title="Secure Integration" text="Enterprise-grade security and permissions" />
                        <ShortTextBlock title="Flexible Integration" text="Full control over the user experience" />
                    </div>
                </div>
            </div>
            <FaqSection />
        </div>
    );
}