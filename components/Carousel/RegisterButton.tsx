import star from "@/public/Star.png";
import Image from "next/image";

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
                textShadow: "none",
            }}
            className={
                " relative cursor-pointer group w-fit flex col-span-2 mt-2 lg:mt-4 text-center rounded-lg text-sm sm:text-md md:text-lg xl:text-2xl font-normal " +
                backgroundColor
            }
        >
            <div
                className={
                    "w-full h-full py-2 px-7 md:py-4 md:px-14 rounded-lg transition ease-in-out duration-300 delay-150 group-hover:translate-x-2 group-hover:-translate-y-2 overflow-clip " +
                    foregroundColor
                }
            >
                <span>Register</span>
                <div
                    className={
                        "absolute right-0 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 " +
                        backgroundColor
                    }
                />
                <div
                    className={
                        "absolute right-4 -top-2 rotate-12 h-[120%] w-[4%] transition ease-in-out duration-300 delay-150 group-hover:-translate-x-56 group-hover:opacity-60 opacity-0 " +
                        backgroundColor
                    }
                />
                <div
                    className={
                        "absolute right-8 top-12 rotate-12 h-[110%] w-1/12 transition ease-in-out duration-300 delay-150 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-4  "
                    }
                >
                    <Image src={star} alt={""} className="w-full"/>
                </div>
            </div>
        </div>
    );
};

export default RegisterButton;
