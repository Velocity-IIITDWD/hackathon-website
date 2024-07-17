export type Event = {
    "id": string,
    "name": string,
    "color": string,
    "prizes": string[],
    "participants": string,
    "duration": string,
    "projects": string,
    "team-size": string,
    "type": string ,
    "planet": string,
}

export const events : Event[] = [
    {
        id: "0",
        name: "FinTech",
        color: "green",
        planet: "/Green Planet.png",
        prizes: ["45,000", "25,500", "15,000"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "1",
        name: "Healthcare and Bioinformatics",
        planet: "/Yellow Planet.png",
        color: "yellow",
        prizes: ["45,000", "25,500", "15,000"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "2",
        name: "Supply Chain Management and Logistics",
        planet: "/Blue Planet.png",
        color: "blue",
        prizes: ["45,000", "25,500", "15,000"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "3",
        name: "Sustainability and Disaster Management",
        planet: "/Purple Planet.png",
        color: "purple",
        prizes: ["45,000", "25,500", "15,000"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    }
]