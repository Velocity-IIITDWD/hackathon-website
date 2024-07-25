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
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "1",
    name: "Healthcare and Bioinformatics",
    planet: "/Yellow Planet.png",
    color: "yellow",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "2",
    name: "Supply Chain Management and Logistics",
    planet: "/Green Planet.png",
    color: "green",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "3",
    name: "Sustainability and Disaster Management",
    planet: "/Blue Planet.png",
    color: "blue",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
