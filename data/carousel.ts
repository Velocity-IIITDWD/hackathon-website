export type Event = {
    id: string;
    name: string;
    color: string;
    body: string;
    planet: string;
};

export const events: Event[] = [
    {
        id: "0",
        name: "FinTech",
        color: "purple",
        planet: "/Purple Planet.png",
        body: "Innovate solutions to enhance financial services, streamline transactions, and provide secure, accessible financial tools for the future.",
    },
    {
        id: "1",
        name: "Healthcare and Bioinformatics",
        planet: "/Yellow Planet.png",
        color: "yellow",
        body: "Develop cutting-edge technologies to advance medical research, improve patient care, and analyze biological data for better health outcomes.",
    },
    {
        id: "2",
        name: "Supply Chain Management and Logistics",
        planet: "/Green Planet.png",
        color: "green",
        body: "Design efficient systems to optimize the flow of goods and information, enhancing global trade and logistics operations.",
    },
    {
        id: "3",
        name: "Sustainability and Disaster Management",
        planet: "/Blue Planet.png",
        color: "blue",
        body: "Create sustainable technologies and strategies to mitigate environmental impact and enhance disaster response and resilience.",
    },
    {
        id: "4",
        name: "Open Category",
        planet: "/Red Planet.png",
        color: "red",
        body: "Unleash your creativity to tackle any challenge, pushing the boundaries of technology across diverse domains.",
    },
];
