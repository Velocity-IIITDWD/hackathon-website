import React from "react";
import Image from "next/image";
import TeamMate from "./TeamMate";

const teams = [
  {
    name: "Designing Team",
    members: [{
      name: "Shaikh Mohammed Arsalan ",
      image: "/team/DSC_0346 - SHAIKH MOHAMMED ARSALAN MOHAMMED SALIM IIIT Dharwad.webp",
      title: "UI/UX DESIGNER",
      linkedIn: "",
      github: ""
    }, {
      name: "G Rohith Yadav",
      image: "/team/IMG_20240801_235020_320 - G ROHITH YADAV IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "",
      github: ""
    }, {
      name: "lakshmi prasad",
      image: "/team/WhatsApp Image 2024-08-18 at 18.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a/",
      github: ""
    }, {
      name: "S Nomtha Prakash",
      image: "/team/IMG_20240818_192106 - S NOMTHA PRAKASH IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://linkedin.com/in/nomtha-prakash-330529288",
      github: ""
    }, {
      name: "Karthikeya",
      image: "/team/IMG-20240820-WA0002 - MURUGKAR KARTHIKEYA IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/m-karthikeya-b7751a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: ""
    }]
  },
  {
    name: "Event Management Team",
    members: [{
      name: "Swaroop Patil",
      image: "/team/IMG_6033 - PATIL SWAROOP DILIP IIIT Dharwad.webp",
      title: "IOS software and App Developer ",
      linkedIn: "https://www.linkedin.com/in/swaroop-patil-77b616264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: ""
    }, {
      name: "Satyam Rathor",
      image: "/team/satyam - SATYAM RATHOR IIIT Dharwad.webp",
      title: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/satyam-rathor-6a4b4a257/",
      github: "https://github.com/Satyam1923"
    }, {
      name: "Palash Bhasme",
      image: "/team/20231229_112849 - PALASH BALWANT BHASME IIIT Dharwad.webp",
      title: "App Developer",
      linkedIn: "https://www.linkedin.com/in/palash-bhasme",
      github: "https://github.com/palashbhasme"
    }, {
      name: "Rishika P",
      image: "/team/IMG-20240305-WA0007~2 - RISHIKA P IIIT Dharwad.webp",
      title: "App Developer",
      linkedIn: "",
      github: ""
    }]
  },
  {
    name: "Management Team",
    members: [{
      name: "Digant Singh",
      image: "/team/WhatsApp Image 2024-08-15 at 15.webp",
      title: "Data Scientist",
      linkedIn: "https://www.linkedin.com/in/digant-singh-delta06/",
      github: "https://github.com/void-delta"
    }]
  },
  {
    name: "Social Media & Outreach Team",
    members: [
      {
        name: "Aditya Gangwar",
        image: "/team/pic - ADITYA GANGWAR IIIT Dharwad.webp",
        title: "Full Stack Developer",
        linkedIn: "",
        github: ""
      }
    ]
  },
  {
    name: "Sponsorship Team",
    members: [{
      name: "Hitesh",
      image: "/team/IMG-20240426-WA0005~2 - HITESH KUMAR IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "",
      github: ""
    }, {
      name: "Siddharth Singhania",
      image: "/team/IMG_20231020_022542 - SIDDHARTH SINGHANIA IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "",
      github: ""
    }, {
      name: "Aditya Raj",
      image: "/team/IMG_1522 - ADITYA RAJ IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/rajadi",
      github: ""
    }, {
      name: "Srijan Raghavula",
      image: "/team/IMG_1522 - ADITYA RAJ IIIT Dharwad.webp",
      title: "Backend Developer",
      linkedIn: "",
      github: ""
    }]
  },
  {
    name: "Technical Team",
    members: [{
      name: "Aayush Kumar",
      image: "/team/Aayush_Kumar.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/aayush-kumar-904967218/",
      github: "https://github.com/Aayush-Kr-13"
    }, {
      name: "Chinmayee Patankar",
      image: "/team/IMG_20230107_192820_743 - PATANKAR CHINMAYEE NILESH IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "",
      github: ""
    }, {
      name: "Karthik Avinash",
      image: "/team/Karthik Avinash - KARTHIK AVINASH IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/karthik-avinash-04b51022b/",
      github: ""
    }, {
      name: "Harsh Soni",
      image: "/team/rrm2NIMk_400x400 - HARSH SONI IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/harsh-soni-/",
      github: "https://github.com/harshsoni-harsh/"
    }, {
      name: "Azmi Nabeel",
      image: "/team/dda261ca-ac7d-4c76-9a1e-c9e006a79931 - AZMI NABEEL IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/azmi-nabeel",
      github: "https://github.com/azmi-nabeel"
    }, {
      name: "Aditya Vikram Singh",
      image: "/team/IMG-20240608-WA0032 - ADITYA VIKRAM SINGH IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/aditya-vikram-singhgh-0a260a266/",
      github: "https://github.com/Adityav2003"
    }]
  },
  {
    name: "Velocity Team", 
    members: [{
      name: "Ayush Singh",
      image: "/team/IMG_20231213_003737 - AYUSH SINGH IIIT Dharwad.webp",
      title: "Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/ayush-singh-357b32257/",
      github: "https://github.com/AyushSingh916"
    }, {
      name: "C. Nikhil Karthik",
      image: "/team/C Nikhil Karthik - C.webp",
      title: "Front end Developer",
      linkedIn: "https://www.linkedin.com/in/nikhilkarthik24",
      github: "https://github.com/C-NikhilKarthik"
    }, {
      name: "Harsh Soni",
      image: "/team/rrm2NIMk_400x400 - HARSH SONI IIIT Dharwad.webp",
      title: "Lead & Full Stack Developer",
      linkedIn: "https://www.linkedin.com/in/harsh-soni-/",
      github: "https://github.com/harshsoni-harsh/"
    }, {
      name: "Lupam Kumar Saha",
      image: "/team/IMG_20240815_124048 - LUPAM KUMAR SAHA IIIT Dharwad.webp",
      title: "Member",
      linkedIn: "https://www.linkedin.com/in/lupamks",
      github: "https://github.com/palepen"
    }]
  }
].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 0))
 .map(team => {
   team.members.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 0))
   return team
 })

const Team: React.FC = () => {
  return (
    <div className="mt-20 p-8 text-center bg-[#070b0d]">
      {/* <div className="flex flex-col items-center justify-center mb-16">
        <div className="relative">
          <Image
            src={"/404_Crewmates.png"}
            width={300}
            height={200}
            alt="No crewmates found"
            className="mb-0"
          />
          <p
            className="text-2xl font-bold absolute bottom-0 transform left-10"
            style={{ color: "#4D3E8C" }}
          >
            Crewmates Found
          </p>
        </div>
      </div> */}
      {
        teams
          .map(team => (
          <>
            <div key={team.name} className="flex items-center space-x-4 mb-14">
              <div className="relative flex grow">
                <svg
                  width={"10px"}
                  height={"10px"}
                  className="fill-slate-200 absolute top-[-4px] left-0 rotate-45"
                  viewBox="0 0 10 10"
                >
                  <rect width={"10px"} height={"10px"} />
                </svg>
                <hr className="flex-grow border-t-2 border-slate-400" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-anton uppercase font-bold z-10">
                {team.name}
              </h1>
              <div className="relative flex grow">
                <svg
                  width={"10px"}
                  height={"10px"}
                  className="fill-slate-200 absolute top-[-4px] right-0 rotate-45"
                  viewBox="0 0 10 10"
                >
                  <rect width={"10px"} height={"10px"} />
                </svg>
                <hr className="flex-grow border-t-2 border-slate-400" />
              </div>
            </div>
            <div className="flex justify-evenly flex-wrap gap-y-8 gap-x-4 items-center mb-24">
              {
                team.members.map(member => (
                  <TeamMate
                    key={member.name}
                    photo={member.image}
                    name={member.name}
                    title={member.title}
                    linkedinLink={member.linkedIn}
                    githubLink={member.github}
                  />
                ))
              }
            </div>
          </>
        ))
      }
    </div>
  );
};

export default Team;
