interface Member {
  name: string;
  image: string;
  title?: string;
  linkedIn?: string;
  github?: string;
}

interface Team {
  name: string;
  members: Member[];
}

const teamData: Team[] = [
  {
    name: "Management Team",
    members: [
      {
        name: "S G Sithartha",
        image: "/team/S_G_Sithartha.webp",
        title: "Member",
        linkedIn:
          "https://www.linkedin.com/in/sitharthasg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "R S Gokul Varun",
        image: "/team/R_S_Gokul_Varun.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Jaishana Bindhu Priya",
        image: "/team/Jaishana_Bindhu_Priya.webp",
        title: "Lead",
        linkedIn:
          "https://www.linkedin.com/in/jaishana-bindhu-priya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/jaishana25/jaishana25",
      },
    ],
  },
  {
    name: "Sponsorship Team",
    members: [
      {
        name: "Digant Singh",
        image: "/team/Digant_Singh.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/digant-singh-delta06/",
        github: "https://github.com/void-delta",
      },
      {
        name: "Dhanraj Matke",
        image: "/team/Dhanraj_Matke.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hitesh",
        image: "/team/Hitesh.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Aditya Raj",
        image: "/team/Aditya_Raj.webp",
        title: "Lead",
        linkedIn: "https://www.linkedin.com/in/rajadi",
        github: "",
      },
      {
        name: "Srijan Raghavula",
        image: "/team/Srijan_Raghavula.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "AKASH NAYAK",
        image: "/team/AKASH_NAYAK.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/akashnayak1311",
        github: "",
      },
      {
        name: "Aditya Guntur",
        image: "/team/Aditya_Guntur.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Nirbhay Kumar",
        image: "/team/Nirbhay_Kumar.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "PREM SAGAR T.K",
        image: "/team/Prem_Sagar_T.K.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/prem-sagar-t-k-9b50372a7",
        github: "",
      },
    ],
  },
  {
    name: "Event Management Team",
    members: [
      {
        name: "S G Sithartha",
        image: "/team/S_G_Sithartha.webp",
        title: "Lead",
        linkedIn:
          "https://www.linkedin.com/in/sitharthasg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Swaroop Patil",
        image: "/team/Swaroop_Patil.webp",
        title: "Member",
        linkedIn:
          "https://www.linkedin.com/in/swaroop-patil-77b616264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "",
      },
      {
        name: "Satyam Rathor",
        image: "/team/Satyam_Rathor.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/satyam-rathor-6a4b4a257/",
        github: "https://github.com/Satyam1923",
      },
      {
        name: "Palash Bhasme",
        image: "/team/Palash_Bhasme.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/palash-bhasme",
        github: "https://github.com/palashbhasme",
      },
      {
        name: "Rishika P",
        image: "/team/Rishika_P.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "P.Mithil",
        image: "/team/P.Mithil.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "RAVVA SWATI",
        image: "/team/RAVVA_SWATI.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Meghana Kommana",
        image: "/team/Meghana_Kommana.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Amith Mathew",
        image: "/team/Amith_Mathew.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/amith-mathew04",
        github: "",
      },
      {
        name: "Ashritha",
        image: "/team/Ashritha_Azmeera.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/amith-mathew04",
        github: "",
      },
    ],
  },
  {
    name: "Marketing & Outreach Team",
    members: [
      {
        name: "Aditya Gangwar",
        image: "/team/Aditya_Gangwar.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hammad Malik",
        image: "/team/Hammad_Malik.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/hammad-malik-/",
        github: "",
      },
      {
        name: "Vinay Jain",
        image: "/team/vinay_jain.jpeg",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/vinayjain767/",
        github: "",
      },
      {
        name: "M S Harshitha",
        image: "/team/M_S_Harshitha.webp",
        title: "Member",
        linkedIn: "www.linkedin.com/in/harshitha-270893326",
        github: "",
      },
      {
        name: "Riti Joshi",
        image: "/team/Riti_Joshi.webp",
        title: "Member",
        linkedIn:
          "https://www.linkedin.com/in/riti-joshi-594a47327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Namita Wayal",
        image: "/team/Namita_Wayal.webp",
        title: "Co-lead",
        linkedIn:
          "https://www.linkedin.com/in/namita-wayal-aa35ab324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Vaasvi Poddar",
        image: "/team/Vaasvi_Poddar.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/vaasvi-poddar-435711288",
        github: "",
      },
      {
        name: "Kunal",
        image: "/team/Kunal.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Vanshika Shrivastava",
        image: "/team/Vanshika_Shrivastava.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Prem Patel",
        image: "/team/Prem_Patel.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "R S Gokul Varun",
        image: "/team/R_S_Gokul_Varun.webp",
        title: "Lead",
        linkedIn: "",
        github: "",
      },
    ],
  },
  {
    name: "Technical Team",
    members: [
      {
        name: "Aayush Kumar",
        image: "/team/Aayush_Kumar.webp",
        title: "Lead",
        linkedIn: "https://www.linkedin.com/in/aayush-kumar-904967218/",
        github: "https://github.com/Aayush-Kr-13",
      },
      {
        name: "Chinmayee Patankar",
        image: "/team/Chinmayee_Patankar.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Karthik Avinash",
        image: "/team/Karthik_Avinash.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/karthik-avinash-04b51022b/",
        github: "",
      },
      {
        name: "Harsh Soni",
        image: "/team/Harsh_Soni.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/harsh-soni-/",
        github: "https://github.com/harshsoni-harsh/",
      },
      {
        name: "Azmi Nabeel",
        image: "/team/Azmi_Nabeel.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/azmi-nabeel",
        github: "https://github.com/azmi-nabeel",
      },
      {
        name: "Aditya Vikram Singh",
        image: "/team/Aditya_Vikram_Singh.webp",
        title: "Member",
        linkedIn:
          "https://www.linkedin.com/in/aditya-vikram-singhgh-0a260a266/",
        github: "https://github.com/Adityav2003",
      },
    ],
  },
  {
    name: "Designing Team",
    members: [
      {
        name: "Arsalan Shaikh",
        image: "/team/Shaikh_Mohammed_Arsalan.webp",
        title: "UI/UX DESIGNER",
        linkedIn: "",
        github: "",
      },
      {
        name: "G Rohith Yadav",
        image: "/team/G_Rohith_Yadav.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Lakshmi Prasad",
        image: "/team/lakshmi_prasad.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a/",
        github: "",
      },
      {
        name: "Karthikeya",
        image: "/team/Karthikeya.webp",
        title: "Member",
        linkedIn:
          "https://www.linkedin.com/in/m-karthikeya-b7751a2a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Pj Vineeth Kumar",
        image: "/team/Pj_Vineeth_Kumar.webp",
        title: "UI/UX Designer",
        linkedIn:
          "https://www.linkedin.com/in/pj-vineeth-kumar-88610927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Ngamchingseh Willis Kipgen",
        image: "/team/Ngamchingseh_Willis_Kipgen.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hardik Mittal",
        image: "/team/Hardik_Mittal.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/hardikm21",
        github: "",
      },
      {
        name: "Ekansh",
        image: "/team/dummy.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
    ],
  },
  {
    name: "Logistics Team",
    members: [
      {
        name: "Chinmay Pramod Ardalkar ",
        image: "/team/Chinmay_Pramod_Ardalkar.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Kushagra Kumar Arora",
        image: "/team/Kushagra_Kumar_Arora.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/kushagra-k-arora-a04810304",
        github: "",
      },
      {
        name: "Nirbhay Singh",
        image: "/team/Nirbhay_Kumar.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Charvi Mantri",
        image: "/team/Charvi_Mantri.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Priyanshu Mittal",
        image: "/team/PRIYANSHU_MITTAL.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Saagarika Ural S",
        image: "/team/Saagarika_Ural_S.webp",
        title: "Member",
        linkedIn: "",
        github: "",
      },
      {
        name: "Arnav Gupta",
        image: "/team/Arnav_Gupta.webp",
        title: "Member",
        linkedIn: "https://www.linkedin.com/in/arnavguptas/",
        github: "",
      },
      {
        name: "Rishi Koushik",
        image: "/team/dummy.webp",
        title: "Lead",
        linkedIn: "",
        github: "",
      },
      {
        name: "Nitish Naveen",
        image: "/team/Nitish_Naveen.webp",
        title: "Co-lead",
        linkedIn:
          "https://www.linkedin.com/in/nitish-naveen-540433300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
    ],
  },
  {
    name: "Velocity Team",
    members: [
      {
        name: "Ayush Singh",
        image: "/team/Ayush_Singh.webp",
        title: "NextJs Developer",
        linkedIn: "https://www.linkedin.com/in/ayush-singh-357b32257/",
        github: "https://github.com/AyushSingh916",
      },
      {
        name: "C. Nikhil Karthik",
        image: "/team/C._Nikhil_Karthik.webp",
        title: "Front end Developer",
        linkedIn: "https://www.linkedin.com/in/nikhilkarthik24",
        github: "https://github.com/C-NikhilKarthik",
      },
      {
        name: "Harsh Soni",
        image: "/team/Harsh_Soni.webp",
        title: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/harsh-soni-/",
        github: "https://github.com/harshsoni-harsh/",
      },
      {
        name: "Lupam Kumar Saha",
        image: "/team/Lupam_Kumar_Saha.webp",
        title: "Front End Developer",
        linkedIn: "https://www.linkedin.com/in/lupamks",
        github: "https://github.com/palepen",
      },
      {
        name: "Rutwik S",
        image: "/team/Rutwik_S.webp",
        title: "Back end Developer",
        linkedIn: "https://www.linkedin.com/in/vedabahu/",
        github: "https://github.com/Vedabahu"
      },
      {
        name: "Shardendu Mishra",
        image: "/team/MishraShardendu.jpg",
        title: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/shardendumishra22/",
        github: "https://github.com/MishraShardendu22",
      },
    ],
  },
];

export default teamData;
