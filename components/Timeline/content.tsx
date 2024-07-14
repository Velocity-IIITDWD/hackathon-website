import React from "react"
import ColoredCard from "./ColoredCard";

type timeline = {
    id: string;
    heading: React.ReactNode;
    details: React.ReactNode | string;
}

export const timelines: timeline[] = [
    {
        id: "Fri-eve",
        heading:
            <>
                <span>Friday</span>
                <br />
                <span>(Evening)</span>
            </>,
        details:
            <>
                <ColoredCard color="blue" detail="Venue is open for the participants and outsiders" heading="Open" time="4:00pm" />
                <ColoredCard odd color="indigo" detail="The official hackathon inaugration proceeded by few talks and rules and regulations of the hackathon would be told" heading="Inaugration" time="5:00pm" />
                <ColoredCard color="green" detail="Dinner time" heading="Dinner" time="7:30pm" />
                <ColoredCard odd color="yellow" detail="The reporting time for all the participants in the venue" heading="Reporting time" time="8:30pm" />
                <ColoredCard color="sky" detail="Hackathon Begins!" heading="Event 5" time="9:00pm" />
            </>,
    },
    {
        id: "Sat-mor",
        heading:
            <>
                <span>Saturday</span>
                <br />
                <span>(Morning)</span>
            </>,
        details:
            <>
                <ColoredCard color="pink" detail="Packaged snacks would be given for every participant present at the venue" heading="Midnight Snacks" time="1:00am" />
                <ColoredCard odd color="sky" detail="Packaged snacks would be given for every participant present at the venue" heading="Midnight Snacks" time="4:00am" />
                <ColoredCard color="indigo" detail="Breakfast counter would be open" heading="Breakfast" time="8:00am" />
                <ColoredCard odd color="green" detail="Students should assemble at the venue" heading="Reporting time" time="9:30am" />
                <ColoredCard color="sky" detail="The mentors would do the first round of check with every team" heading="Checkpoint 1" time="10:00am" />
            </>,
    },
    {
        id: "Sat-eve",
        heading:
            <>
                <span>Saturday</span>
                <br />
                <span>(Evening)</span>
            </>,
        details:
            <>
                <ColoredCard color="indigo" detail="Lunch time" heading="Lunch" time="12:30pm" />
                <ColoredCard odd color="green" detail="Participants to report the venue" heading="Reporting time" time="2:30pm" />
                <ColoredCard color="yellow" detail="The mentors would do the second round of check with every team" heading="Checkpoint 2" time="5:00pm" />
                <ColoredCard odd color="orange" detail="Snack would be given" heading="Snacks" time="5:10pm" />
                <ColoredCard color="pink" detail="Dinner time" heading="Dinner" time="8:00pm" />
            </>,
    },
    {
        id: "Sun-mor",
        heading:
            <>
                <span>Sunday</span>
                <br />
                <span>(Morning)</span>
            </>,
        details:
            <>
                <ColoredCard color="blue" detail="Packaged snacks would be given for every participant present at the venue" heading="Midnight Snacks" time="1:00am" />
                <ColoredCard odd color="indigo" detail="Packaged snacks would be given for every participant present at the venue" heading="Midnight Snacks" time="4:00am" />
                <ColoredCard color="green" detail="Breakfast counter open" heading="Breakfast" time="9:00am" />
                <ColoredCard odd color="sky" detail="List of the participants shortlisted would be announced and presentation in front of judges begins" heading="Presentation 1" time="10:00am" />
            </>,
    },
    {
        id: "Sun-eve",
        heading:
            <>
                <span>Sunday</span>
                <br />
                <span>(Evening)</span>
            </>,
        details:
            <>
                <ColoredCard color="indigo" detail="Lunch time" heading="Lunch" time="12:30pm" />
                <ColoredCard odd color="green" detail="Participants to report to venue" heading="Reporting time" time="1:30pm" />
                <ColoredCard color="yellow" detail="The last round of presentations in front of judges" heading="Grand finale" time="1:45pm" />
                <ColoredCard odd color="orange" detail="Snacks would be given" heading="Grand finale ends" time="4:30pm" />
                <ColoredCard color="pink" detail="Prize distribution ceremony and swag collection" heading="Prize" time="4:45pm" />
                <ColoredCard color="sky" detail="" heading="Hackathon ends" time="5:30pm" />
            </>,
    },
];