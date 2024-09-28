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
    name: "Sponsorship Team",
    members: [
      {
        name: "Siddharth Singhania",
        image: "/team/Siddharth_Singhania.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hitesh",
        image: "/team/Hitesh.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Aditya Raj",
        image: "/team/Aditya_Raj.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/rajadi",
        github: "",
      },
      {
        name: "Srijan Raghavula",
        image: "/team/Srijan_Raghavula.webp",
        title: "Backend Developer",
        linkedIn: "",
        github: "",
      },
      {
        name: "Arnav Gupta",
        image: "/team/Arnav_Gupta.webp",
        title: "AIML and Blockchain",
        linkedIn: "https://www.linkedin.com/in/arnavguptas/",
        github: "",
      },
      {
        name: "AKASH NAYAK",
        image: "/team/AKASH_NAYAK.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/akashnayak1311",
        github: "",
      },
      {
        name: "Aditya Guntur",
        image: "/team/Aditya_Guntur.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Nirbhay Kumar",
        image: "/team/Nirbhay_Kumar.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "PREM SAGAR T.K",
        image: "/team/PREM_SAGAR_T.K.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/prem-sagar-t-k-9b50372a7",
        github: "",
      },
    ],
  },
  {
    name: "Technical Team",
    members: [
      {
        name: "Chinmayee Patankar",
        image: "/team/Chinmayee_Patankar.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Karthik Avinash",
        image: "/team/Karthik_Avinash.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/karthik-avinash-04b51022b/",
        github: "",
      },
      {
        name: "Harsh Soni",
        image: "/team/Harsh_Soni.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/harsh-soni-/",
        github: "https://github.com/harshsoni-harsh/",
      },
      {
        name: "Azmi Nabeel",
        image: "/team/Azmi_Nabeel.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/azmi-nabeel",
        github: "https://github.com/azmi-nabeel",
      },
      {
        name: "Aditya Vikram Singh",
        image: "/team/Aditya_Vikram_Singh.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/aditya-vikram-singhgh-0a260a266/",
        github: "https://github.com/Adityav2003",
      },
    ],
  },
  {
    name: "Designing Team",
    members: [
      {
        name: "Shaikh Mohammed Arsalan",
        image: "/team/Shaikh_Mohammed_Arsalan.webp",
        title: "UI/UX DESIGNER",
        linkedIn: "",
        github: "",
      },
      {
        name: "G Rohith Yadav",
        image: "/team/G_Rohith_Yadav.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Lakshmi Prasad",
        image: "/team/lakshmi_prasad.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a/",
        github: "",
      },
      {
        name: "S Nomtha Prakash",
        image: "/team/S_Nomtha_Prakash.webp",
        title: "",
        linkedIn: "linkedin.com/in/nomtha-prakash-330529288",
        github: "",
      },
      {
        name: "Karthikeya",
        image: "/team/Karthikeya.webp",
        title: "Full stack developer",
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
        name: "Syed Mahdee Husain",
        image: "/team/Syed_Mahdee_Husain.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Ngamchingseh Willis Kipgen",
        image: "/team/Ngamchingseh_Willis_Kipgen.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hardik Mittal",
        image: "/team/Hardik_Mittal.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/hardikm21",
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
        title: "Full Stack Developer",
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
        title: "",
        linkedIn: "https://www.linkedin.com/in/lupamks",
        github: "https://github.com/palepen",
      },
    ],
  },
  {
    name: "Event Management Team",
    members: [
      {
        name: "Swaroop Patil",
        image: "/team/Swaroop_Patil.webp",
        title: "IOS software and App Developer",
        linkedIn:
          "https://www.linkedin.com/in/swaroop-patil-77b616264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "",
      },
      {
        name: "Satyam Rathor",
        image: "/team/Satyam_Rathor.webp",
        title: "Full Stack Developer",
        linkedIn: "https://www.linkedin.com/in/satyam-rathor-6a4b4a257/",
        github: "https://github.com/Satyam1923",
      },
      {
        name: "Palash Bhasme",
        image: "/team/Palash_Bhasme.webp",
        title: "App Developer",
        linkedIn: "https://www.linkedin.com/in/palash-bhasme",
        github: "https://github.com/palashbhasme",
      },
      {
        name: "Rishika P",
        image: "/team/Rishika_P.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "P.Mithil",
        image: "/team/P.Mithil.webp",
        title: "Junior developer",
        linkedIn: "",
        github: "",
      },
      {
        name: "RAVVA SWATI",
        image: "/team/RAVVA_SWATI.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Meghana Kommana",
        image: "/team/Meghana_Kommana.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Amith Mathew",
        image: "/team/Amith_Mathew.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/amith-mathew04",
        github: "",
      },
      {
        name: "PRIYANSHU MITTAL",
        image: "/team/PRIYANSHU_MITTAL.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Chinmay Pramod Ardalkar",
        image: "/team/Chinmay_Pramod_Ardalkar.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Nirbhay Singh",
        image: "/team/Nirbhay_Singh.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
    ],
  },
  {
    name: "Management Team",
    members: [
      {
        name: "Digant Singh",
        image: "/team/Digant_Singh.webp",
        title:
          'People call me "Professional Bullshitter", I don\'t know how well that goes on the website.',
        linkedIn: "https://www.linkedin.com/in/digant-singh-delta06/",
        github: "https://github.com/void-delta",
      },
      {
        name: "S G Sithartha",
        image: "/team/S_G_Sithartha.webp",
        title: "",
        linkedIn:
          "https://www.linkedin.com/in/sitharthasg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "R S Gokul Varun",
        image: "/team/R_S_Gokul_Varun.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Jaishana Bindhu Priya",
        image: "/team/Jaishana_Bindhu_Priya.webp",
        title: "",
        linkedIn:
          "https://www.linkedin.com/in/jaishana-bindhu-priya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "https://github.com/jaishana25/jaishana25",
      },
    ],
  },
  {
    name: "Social Media & Outreach Team",
    members: [
      {
        name: "Aditya Gangwar",
        image: "/team/Aditya_Gangwar.webp",
        title: "Full Stack Developer",
        linkedIn: "",
        github: "",
      },
      {
        name: "Hammad Malik",
        image: "/team/Hammad_Malik.webp",
        title: "Data Analyst",
        linkedIn: "https://www.linkedin.com/in/hammad-malik-/",
        github: "",
      },
      {
        name: "M S Harshitha",
        image: "/team/M_S_Harshitha.webp",
        title: "",
        linkedIn: "www.linkedin.com/in/harshitha-270893326",
        github: "",
      },
      {
        name: "Riti Joshi",
        image: "/team/Riti_Joshi.webp",
        title: "",
        linkedIn:
          "https://www.linkedin.com/in/riti-joshi-594a47327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Namita Wayal",
        image: "/team/Namita_Wayal.webp",
        title: "No",
        linkedIn:
          "https://www.linkedin.com/in/namita-wayal-aa35ab324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
      {
        name: "Vaasvi Poddar",
        image: "/team/Vaasvi_Poddar.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/vaasvi-poddar-435711288",
        github: "",
      },
      {
        name: "Kunal",
        image: "/team/Kunal.webp",
        title: "Member of Marketing and outreach team",
        linkedIn: "",
        github: "",
      },
      {
        name: "Vanshika Shrivastava",
        image: "/team/Vanshika_Shrivastava.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Naman Kumar",
        image: "/team/Naman_Kumar.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Prem Patel",
        image: "/team/Prem_Patel.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
    ],
  },
  {
    name: "Logistics",
    members: [
      {
        name: "Nitish Naveen",
        image: "/team/Nitish_Naveen.webp",
        title: "Co-Lead Logistics",
        linkedIn:
          "https://www.linkedin.com/in/nitish-naveen-540433300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
      },
    ],
  },
  {
    name: "Logistics Team",
    members: [
      {
        name: "Saagarika Ural S",
        image: "/team/Saagarika_Ural_S.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
      {
        name: "Kushagra Kumar Arora",
        image: "/team/Kushagra_Kumar_Arora.webp",
        title: "",
        linkedIn: "https://www.linkedin.com/in/kushagra-k-arora-a04810304",
        github: "",
      },
    ],
  },
  {
    name: "Logistics team",
    members: [
      {
        name: "Charvi Mantri",
        image: "/team/Charvi_Mantri.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
    ],
  },
  {
    name: "Logistics",
    members: [
      {
        name: "Om Pandey",
        image: "/team/Om_pandey.webp",
        title: "",
        linkedIn: "",
        github: "",
      },
    ],
  },
];

export default teamData;
