export default function PrimaryButton({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <a
      href={link}
      className="primary-button relative bg-white box-border flex justify-around items-center text-md rounded-3xl overflow-hidden w-[160px] md:w-[180px] h-[45px]
        transform hover:-translate-y-1 transition duration-400 ease-[--button-bezier]"
    >
      <p className="text-black font-semibold text-[13px] mt-0">{text}</p>
      <img
        className="h-[14px] mr-[7px]"
        src="/assets/chevron-right-black.png"
      />
      <div className="absolute w-full h-full bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49] opacity-0 hover:opacity-100 transition duration-400"></div>
    </a>
  );
}
