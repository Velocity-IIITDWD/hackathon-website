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
        name: "Aritficial Intelligence",
        color: "green",
        planet: "/Green Planet.png",
        prizes: ["***", "***", "***"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "1",
        name: "Web Design",
        planet: "/Yellow Planet.png",
        color: "yellow",
        prizes: ["***", "***", "***"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "2",
        name: "Blockchain",
        planet: "/Blue Planet.png",
        color: "blue",
        prizes: ["***", "***", "***"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    },
    {
        id: "3",
        name: "Web Development",
        planet: "/Purple Planet.png",
        color: "purple",
        prizes: ["***", "***", "***"],
        participants: "50 - 150+",
        duration: "24 - 32 Hours",
        projects: "10 - 20",
        "team-size": "1 - 4",
        type: "Open For All"
    }
]