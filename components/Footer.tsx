"use client";
import Image from "next/image";
import CollegeLogo from "@/public/college-logo.png";
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="px-8 sm:px-16 py-10 w-full bg-[#000000]">
            <Link className="block" href={'https://iiitdwd.ac.in'}>
                <Image
                    className="max-w-[24rem] w-full aspect-[445/119]"
                    alt="Logo"
                    src={CollegeLogo}
                    height={120}
                />
            </Link>
            <div className="flex mt-4 flex-col sm:flex-row gap-8 sm:gap-1 w-full justify-between">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="mb-6">
                            <div className="text-xl font-semibold text-slate-300 mb-2">Contact</div>
                            <div className="text-sm text-slate-200 mb-1">
                                <Link href="mailto:hackathon@iiitdwd.ac.in"
                                      className="hover:text-slate-100 transition-colors duration-300">
                                    hackathon@iiitdwd.ac.in
                                </Link>
                            </div>
                            <Link href={'tel:+918870040108'} className="block text-sm text-slate-200 mb-1">+91 8870040108 - Jaishana</Link>
                            <Link href={'tel:+918778344369'} className="block text-sm text-slate-200">+91 8778344369 - Gokul</Link>
                        </div>
                    </div>
                    {/* <Link
            className="text-xl text-slate-400"
            target="_blank"
            href={"/Hack2Future-Sponsorship-Brochure.pdf"}
          >
            Sponsorship Brochure
          </Link> */}
                    <div className="max-w-xl">
                        <div className="mb-6">
                            <div className="text-lg font-semibold text-slate-300 mb-2">Address</div>
                            <div className="text-sm text-slate-200 leading-relaxed">
                                Indian Institute of Information Technology (IIIT) Dharwad, Ittigatti Rd,
                                near Sattur Colony, Karnataka 580009 92VG+24 Joga Yellapur, Karnataka
                            </div>
                        </div>

                        <div className="w-full mt-4 flex gap-4 flex-wrap items-center">
                            <Link
                                href="https://www.linkedin.com/company/hack-2-future/"
                                target="_blank"
                            >
                                <FaLinkedin/>
                            </Link>
                            <Link
                                href="https://www.instagram.com/hack2future_1.0/"
                                target="_blank"
                            >
                                <FaInstagram/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 max-[884px]:w-full">
                        <p className="text-lg text-slate-400 mb-2">Location</p>
                        <iframe
                            title="Hackathon Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5671.792036388141!2d75.02120041187774!3d15.39292320151374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4bc7f5c91%3A0xf0fc456099430c57!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%2C%20Dharwad!5e0!3m2!1sen!2sin!4v1716397238919!5m2!1sen!2sin"
                            width="250"
                            height="250"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl max-[884px]:w-full w-[40vw] max-w-3xl bg-slate-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
