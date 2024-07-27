import { Mail, Phone, Facebook, Github, Send, Instagram } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#31135E] w-full relative">
      <div className="absolute w-full top-0 -translate-y-1/2">
        <div className="bg-gradient-to-r from-[#FC00FF] to-[#00DBDE] rounded-lg p-6 m-auto w-11/12 max-w-4xl flex gap-4 justify-between max-[536px]:justify-center flex-wrap">
          <p className="text-white text-2xl font-bold">Hack to the Future</p>
          <div className="flex flex-wrap gap-4">
            <Link href='/' className="px-2 py-1 bg-black text-white rounded-full">Apply Now</Link>
            <Link href='/' className="px-2 py-1 bg-white text-black rounded-full">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto pt-16 px-8">
        <Image className="border" height={100} width={100} alt="Logo" src="/logo.png" />
      </div>
      <div className="flex flex-wrap gap-4 justify-between max-w-7xl m-auto px-8 pb-8">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl mb-2">Venue</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
            width="250"
            height="250"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className='rounded-sm'
          />
        </div>
        <div id="contact" className="flex flex-col gap-2">
          <p className="font-bold text-xl mb-2">Contact Us</p>
          <Link href="mailto:support@gmail.com" className="flex gap-2">
            <Mail />
            <span>support@gmail.com</span>
          </Link>
          <Link href="tel:911" className="flex gap-2">
            <Phone />
            <span>911</span>
          </Link>
          <Link href="#" className="flex gap-2">
            <Facebook />
            <span>abcd</span>
          </Link>
          <Link href="#" className="flex gap-2">
            <Github />
            <span>abcd</span>
          </Link>
          <Link href="#" className="flex gap-2">
            <Instagram />
            <span>abcd</span>
          </Link>
        </div>
        <div className="max-lg:text-right flex-wrap items-center">
          <p className="font-bold text-xl mb-4 max-sm:text-left">Company</p>
          <div className="flex flex-col gap-2 max-sm:flex-row flex-wrap">
            <Link href={"/#about"}>About</Link>
            <Link href={"/#technologies"}>Technologies</Link>
            <Link href={"/"}>Prizes</Link>
            <Link href={"/#timeline"}>Timeline</Link>
            <Link href={"/#sponsors"}>Sponsors</Link>
            <Link href={"/team"}>Team</Link>
            <Link href={"/#faqs"}>FAQs</Link>
          </div>
        </div>
        <div className="my-auto h-fit max-lg:hidden">
          <Image src="/rover.png" height={200} width={200} alt="rover" />
        </div>
      </div>
    </div>
  )
}