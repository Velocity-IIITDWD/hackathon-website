import star from '@/public/Star.png';
import Image from 'next/image';

interface RegisterButtonProps {
  backgroundColor: string;
  foregroundColor: string;
}

const RegisterButton = ({
  backgroundColor,
  foregroundColor,
}: RegisterButtonProps) => {
  return (
    <div
      style={{
        textShadow: 'none',
      }}
      className={
        'sm:text-md group relative col-span-2 mt-2 flex w-fit cursor-pointer rounded-lg text-center text-sm font-normal md:text-lg lg:mt-4 xl:text-2xl ' +
        backgroundColor
      }
    >
      <div
        className={
          'h-full w-full overflow-clip rounded-lg px-7 py-2 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-2 group-hover:translate-x-2 md:px-14 md:py-4 ' +
          foregroundColor
        }
      >
        <span>Register</span>
        <div
          className={
            'absolute -top-2 right-0 h-[120%] w-[4%] rotate-12 opacity-0 transition delay-150 duration-300 ease-in-out group-hover:-translate-x-56 group-hover:opacity-60 ' +
            backgroundColor
          }
        />
        <div
          className={
            'absolute -top-2 right-4 h-[120%] w-[4%] rotate-12 opacity-0 transition delay-150 duration-300 ease-in-out group-hover:-translate-x-56 group-hover:opacity-60 ' +
            backgroundColor
          }
        />
        <div
          className={
            'absolute right-8 top-12 h-[110%] w-1/12 rotate-12 opacity-0 transition delay-150 duration-300 ease-in-out group-hover:-translate-y-12 group-hover:translate-x-4 group-hover:opacity-100'
          }
        >
          <Image src={star} alt={''} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default RegisterButton;
