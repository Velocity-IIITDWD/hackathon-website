import Image from 'next/image';

interface CupProps {
  cupImage: string;
  cupColor: string;
  className: string;
  prize: string;
  amount: string;
}

const Cup = ({ prize, cupImage, cupColor, className, amount }: CupProps) => {
  return (
    <div
      className={
        'cup-div group relative flex w-[70%] flex-col items-center justify-center border-l-2 border-r-2 py-2 before:transition before:delay-75 before:duration-300 before:ease-in hover:before:opacity-70 sm:w-3/5 md:w-[30%] lg:w-1/4 xl:w-[17%] ' +
        className
      }
    >
      <div
        className={
          'cup-container grid-lines-bg flex h-full w-full flex-col items-center justify-center bg-inherit bg-gradient-carousel p-4 text-2xl md:text-xl lg:text-2xl 2xl:text-3xl ' +
          `${cupColor}`
        }
      >
        <Image
          src={cupImage}
          alt={''}
          width={0}
          height={0}
          sizes="100%"
          className={
            'w-9/12 transition duration-300 ease-in group-hover:-translate-y-20'
          }
        />
        <span
          className={
            'pb-4 text-center font-bold transition duration-300 ease-in group-hover:-translate-y-20'
          }
        >
          {prize}
        </span>
        <span
          className={
            'invisible flex w-full flex-col gap-2 pb-4 text-center font-bold opacity-0 transition-opacity delay-150 duration-300 ease-in group-hover:visible group-hover:-translate-y-16 group-hover:opacity-100'
          }
        >
          <span>Revealing Soon</span>
          {/* <span>{amount},000</span> */}
          <span>Cash Prize</span>
        </span>
      </div>
    </div>
  );
};

export default Cup;
