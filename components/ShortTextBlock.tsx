export default function ShortTextBlock({
    title,
    text
}: {
    title: string,
    text: string
}) {
    return (
        <div>
            <h3 className="font-sans text-xl">{title}</h3>
            <p className="font-sans text-lg text-[#ffffffa9]">{text}</p>
        </div>
    );
}