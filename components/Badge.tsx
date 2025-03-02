export default function Badge({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className="p-2 flex flex-row justify-center items-center rounded-lg bg-[#ffffff20]">
      <img src={image} className="h-5 mr-1" />
      <p className="text-[16px] m-0">{text}</p>
    </div>
  );
}
