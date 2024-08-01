import { Mail, Phone, Facebook, Github, Send, Instagram, Youtube, Twitter } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import CollegeLogo from "@/public/college-logo.png"

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#FFFFFF]/10 to-[#999]/10 w-full relative z-10 [&_*]:z-10">
      <div className="max-w-7xl m-auto pt-4 mx-8">
        <Image className="max-w-[80vw] aspect-[445/119]" alt="Logo" src={CollegeLogo} height={120} />
      </div>
      <div className="flex flex-wrap gap-4 justify-between px-8 pb-8 mt-2">
        <div id="contact" className="flex flex-col gap-2">
          <p className="font-bold text-xl mb-2">Contact</p>
          <Link href="mailto:hacktofuture@iiitdwd.ac.in" className="flex gap-2">
            <span>hacktofuture@iiitdwd.ac.in</span>
          </Link>
          <Link href="tel:+91 9391716215" className="flex gap-2">
            <span>+91 9391716215</span>
          </Link>
          <p className="font-bold text-xl mb-2 mt-4">Address</p>
          <span className="max-w-md">Indian Institute of Information Technology (IIIT) Dharwad, Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga Yellapur, Karnataka</span>
          <div className="flex gap-2 mt-4 [&>*]:transition-all [&>*]:duration-100">
            <div className="bg-white text-black rounded-full p-2 hover:bg-[#B745BA] hover:text-white"><Facebook className="size-full " /></div>
            <div className="bg-white text-black rounded-full p-2 hover:bg-[#B745BA] hover:text-white"><Youtube className="size-full " /></div>
            <div className="bg-white text-black rounded-full p-2 hover:bg-[#B745BA] hover:text-white"><Twitter className="size-full " /></div>
            <div className="bg-white text-black rounded-full p-2 hover:bg-[#B745BA] hover:text-white"><Instagram className="size-full " /></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-[884px]:w-full">
          <p className="font-bold text-xl mb-2">Location</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
            width="250"
            height="250"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className='rounded-xl max-[884px]:w-full w-[40vw] max-w-3xl bg-slate-600'
          />
        </div>
      </div>
    </div>
  )
}