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
    // const translateX = heights.reduce((acc, curr, i) => i < index ? acc + curr : acc, 0);

    const dimensions = { width, height };

    return (
        <div id={id.concat('-msg')} className={"min-h-full flex flex-col justify-center "
            .concat(
            index % 2 == 0 ? "pr-20" : "pl-20 items-end"
        )}
            style={{
            }}
            >
            <div
                className="p-4"
                style={{
                    backgroundImage: index % 2 == 0 ? "url('/rightbox.svg')" : "url('/leftbox.svg')",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    height: `${dimensions.height}px`,
                    width: `${dimensions.width}px`,
                }}
            >
                <p className="select-none text-base">{text}</p>
            </div>
        </div>
    );
};
