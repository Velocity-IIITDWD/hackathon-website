import React from "react"
import {ColorKey} from "./ColoredCard";

type timeline = {
    id: string;
    heading: React.ReactNode;
    details: {
        color: ColorKey;
        detail: string;
        heading: string;
        time: string;
    }[];
}

export const timelines: timeline[] = [
    {
        id: "reg",
        heading:
            <span className="flex mr-2 max-w-[72px] text-center">
                Registrations till Round 1
            </span>,
        details: [
            {
                "color": "blue",
                "detail": "",
                "heading": "Hackathon Launch",
                "time": "15th August"
            },
            {
                "color": "red",
                "detail": "",
                "heading": "Registration Opens",
                "time": "18th August"
            },
            {
                "color": "indigo",
                "detail": "",
                "heading": "Round 1 Submission Starts",
                "time": "1st September"
            },
            {
                "color": "green",
                "detail": "",
                "heading": "Round 1 results",
                "time": "6th October"
            },
        ]
    },
    {
        id: "Fri-eve",
        heading:
            <>
                <span>18th Oct</span>
                <br/>
                <span>Friday</span>
                <br/>
                <span>(Evening)</span>
            </>,
        details: [
            {
                "color": "blue",
                "detail": "Venue is open for the participants and outsiders",
                "heading": "Open",
                "time": "4:00pm"
            },
            {
                "color": "indigo",
                "detail": "The official hackathon inauguration proceeded by a few talks and rules and regulations of the hackathon would be told",
                "heading": "Inauguration",
                "time": "5:00pm"
            },
            {
                "color": "green",
                "detail": "Dinner time",
                "heading": "Dinner",
                "time": "7:30pm"
            },
            {
                "color": "yellow",
                "detail": "The reporting time for all the participants in the venue",
                "heading": "Reporting time",
                "time": "8:30pm"
            },
            {
                "color": "sky",
                "detail": "Hackathon Begins!",
                "heading": "Hackathon Begins",
                "time": "9:00pm"
            }
        ],
    },
    {
        id: "Sat-mor",
        heading:
            <>
                <span>19th Oct</span>
                <br/>
                <span>Saturday</span>
                <br/>
                <span>(Morning)</span>
            </>,
        details: [
            {
                "color": "pink",
                "detail": "Packaged snacks would be given for every participant present at the venue",
                "heading": "Midnight Snacks",
                "time": "1:00am"
            },
            {
                "color": "sky",
                "detail": "Packaged snacks would be given for every participant present at the venue",
                "heading": "Midnight Snacks",
                "time": "4:00am"
            },
            {
                "color": "indigo",
                "detail": "Breakfast counter would be open",
                "heading": "Breakfast",
                "time": "8:00am"
            },
            {
                "color": "green",
                "detail": "Students should assemble at the venue",
                "heading": "Reporting time",
                "time": "9:30am"
            },
            {
                "color": "sky",
                "detail": "The mentors would do the first round of check with every team",
                "heading": "Checkpoint 1",
                "time": "10:00am"
            }
        ],
    },
    {
        id: "Sat-eve",
        heading:
            <>
                <span>19th Oct</span>
                <br/>
                <span>Saturday</span>
                <br/>
                <span>(Evening)</span>
            </>,
        details: [
            {
                "color": "indigo",
                "detail": "Lunch time",
                "heading": "Lunch",
                "time": "12:30pm"
            },
            {
                "color": "green",
                "detail": "Participants to report the venue",
                "heading": "Reporting time",
                "time": "2:30pm"
            },
            {
                "color": "yellow",
                "detail": "The mentors would do the second round of check with every team",
                "heading": "Checkpoint 2",
                "time": "5:00pm"
            },
            {
                "color": "orange",
                "detail": "Snack would be given",
                "heading": "Snacks",
                "time": "5:10pm"
            },
            {
                "color": "pink",
                "detail": "Dinner time",
                "heading": "Dinner",
                "time": "8:00pm"
            }
        ],
    },
    {
        id: "Sun-mor",
        heading:
            <>
                <span>20th Oct</span>
                <br/>
                <span>Sunday</span>
                <br/>
                <span>(Morning)</span>
            </>,
        details: [
            {
                "color": "blue",
                "detail": "Packaged snacks would be given for every participant present at the venue",
                "heading": "Midnight Snacks",
                "time": "1:00am"
            },
            {
                "color": "indigo",
                "detail": "Packaged snacks would be given for every participant present at the venue",
                "heading": "Midnight Snacks",
                "time": "4:00am"
            },
            {
                "color": "green",
                "detail": "Breakfast counter open",
                "heading": "Breakfast",
                "time": "9:00am"
            },
            {
                "color": "sky",
                "detail": "List of the participants shortlisted would be announced and presentation in front of judges begins",
                "heading": "Presentation 1",
                "time": "10:00am"
            }
        ],
    },
    {
        id: "Sun-eve",
        heading:
            <>
                <span>20th Oct</span>
                <br/>
                <span>Sunday</span>
                <br/>
                <span>(Evening)</span>
            </>,
        details: [
            {
                "color": "indigo",
                "detail": "Lunch time",
                "heading": "Lunch",
                "time": "12:30pm"
            },
            {
                "color": "green",
                "detail": "Participants to report to venue",
                "heading": "Reporting time",
                "time": "1:30pm"
            },
            {
                "color": "yellow",
                "detail": "The last round of presentations in front of judges",
                "heading": "Grand finale",
                "time": "1:45pm"
            },
            {
                "color": "orange",
                "detail": "Snacks would be given",
                "heading": "Grand finale ends",
                "time": "4:30pm"
            },
            {
                "color": "pink",
                "detail": "Prize distribution ceremony and swag collection",
                "heading": "Prize",
                "time": "4:45pm"
            },
            {
                "color": "sky",
                "detail": "",
                "heading": "Hackathon ends",
                "time": "5:30pm"
            }
        ],
    },
];