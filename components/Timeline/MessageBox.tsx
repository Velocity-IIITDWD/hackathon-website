const heights: number[] = [145, 100, 168, 150]

export const MessageBox = ({
    id,
    index,
    text,
}: {
    id: string;
    index: number;
    text: string;
}) => {
    const aspectRatio = 792 / 486;
    const height = heights[index % heights.length];
    const width = height * aspectRatio;

    const dimensions = { width, height };

    return (
        <div id={id.concat('-msg')} className="min-h-full flex flex-col justify-center items-end relative"
        >
            <div
                className="p-[2.5px] text-center mx-10 rounded-lg size-fit !bg-opacity-0 bg-gradient-to-t to-blue-700/60 from-fuchsia-700/60"
            >
                <p className="select-none text-base bg-[#191c36] p-2 rounded-md">{text}</p>
            </div>
        </div>
    );
};
