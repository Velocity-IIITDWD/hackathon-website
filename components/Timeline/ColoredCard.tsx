const borderColorVariants = {
  blue: 'border-blue-500',
  red: 'border-red-500',
  indigo: 'border-indigo-500',
  green: 'border-green-500',
  yellow: 'border-yellow-500',
  orange: 'border-orange-500',
  pink: 'border-pink-500',
  sky: 'border-sky-500',
};
const bgColorVariants = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  indigo: 'bg-indigo-500',
  green: 'bg-green-600',
  yellow: 'bg-yellow-600',
  orange: 'bg-orange-500',
  pink: 'bg-pink-500',
  sky: 'bg-sky-600',
};

export type ColorKey = keyof typeof bgColorVariants;

export default function ColoredCard({
  color,
  time,
  heading,
  detail,
  odd,
}: {
  color: ColorKey;
  time: string;
  heading: string;
  detail: string;
  odd?: boolean;
}) {
  return (
    <div
      className={`relative m-3 h-fit min-w-40 max-w-60 shrink-0 rounded border bg-black bg-opacity-10 p-4 pt-2 md:m-2 md:min-w-56 md:max-w-64 lg:m-4 ${borderColorVariants[color]} ${odd && 'mt-10'}`}
    >
      <p
        className={`absolute -left-2 top-0 flex min-h-9 w-40 -translate-y-1/2 items-center justify-center text-center md:w-fit ${bgColorVariants[color]} rounded px-2`}
      >
        {time}
      </p>
      <p
        className={`my-2 bg-clip-text pt-5 text-xl font-bold text-transparent md:pt-3 ${bgColorVariants[color]}`}
      >
        {heading}
      </p>
      <p>{detail}</p>
    </div>
  );
}
