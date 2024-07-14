const borderColorVariants = {
    blue: "border-blue-500",
    red: "border-red-500",
    indigo: "border-indigo-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    orange: "border-orange-500",
    pink: "border-pink-500",
    sky: "border-sky-500"
};
const bgColorVariants = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
    green: "bg-green-600",
    yellow: "bg-yellow-600",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    sky: "bg-sky-600"
};

type ColorKey = keyof typeof bgColorVariants;

export default function ColoredCard({ color, time, heading, detail, odd }: { color: ColorKey; time: string; heading: string; detail: string; odd?: boolean }) {
    return (
        <div className={`shrink-0 bg-black bg-opacity-10 max-w-60 h-fit relative p-4 pt-2 m-2 rounded border ${borderColorVariants[color]} ${odd && "mt-10"}`}>
            <p className={`absolute top-0 -left-2 -translate-y-1/2 ${bgColorVariants[color]} rounded px-2`}>{time}</p>
            <p className={`font-bold text-xl my-2 text-transparent bg-clip-text ${bgColorVariants[color]}`}>{heading}</p>
            <p>{detail}</p>
        </div>
    );
}
