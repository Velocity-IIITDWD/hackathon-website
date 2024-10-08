import React from 'react';
import { ColorKey } from './ColoredCard';

type timeline = {
  id: string;
  heading: React.ReactNode;
  details: {
    color: ColorKey;
    detail: string;
    heading: string;
    time: string;
  }[];
};

export const timelines: timeline[] = [
  {
    id: 'reg',
    heading: (
      <span className="flex mr-2 max-w-[72px] text-center">
        Registrations and Timeline Overview
      </span>
    ),
    details: [
      {
        color: 'blue',
        detail: '',
        heading: 'Registration Starts',
        time: '6:00 PM IST 26th August',
      },
      {
        color: 'red',
        detail: '',
        heading: 'Registration Ends',
        time: '11:59 PM IST 10th October',
      },
      {
        color: 'indigo',
        detail: '',
        heading: 'Hackathon Starts',
        time: '8:00 AM IST 26th October',
      },
      {
        color: 'green',
        detail: '',
        heading: 'Hackathon Ends',
        time: '11:00 AM IST 27th October',
      },
    ],
  },
  {
    id: 'Sat-mor',
    heading: (
      <>
        <span>26th Oct</span>
        <br />
        <span>Saturday</span>
        <br />
        <span>(Morning)</span>
      </>
    ),
    details: [
      {
        color: 'blue',
        detail: 'Registrations and Breakfast (M-block)',
        heading: 'Registrations',
        time: '8:00 - 9:30 AM',
      },
      {
        color: 'red',
        detail: 'At 240 seater',
        heading: 'Opening Ceremony',
        time: '9:45 - 10:30 AM',
      },
      {
        color: 'indigo',
        detail: '',
        heading: 'Hackathon starts',
        time: '11:00 AM',
      },
      {
        color: 'green',
        detail: '',
        heading: 'Mentor Interaction',
        time: '11:00 - 12:00 PM',
      },
    ],
  },
  {
    id: 'Sat-eve',
    heading: (
      <>
        <span>26th Oct</span>
        <br />
        <span>Saturday</span>
        <br />
        <span>(Evening)</span>
      </>
    ),
    details: [
      {
        color: 'yellow',
        detail: '',
        heading: 'Lunch',
        time: '1:00 - 2:00 PM',
      },
      {
        color: 'orange',
        detail: 'At 240 seater',
        heading: 'Speaker 1',
        time: '2:15 - 3:00 PM',
      },
      {
        color: 'pink',
        detail: '',
        heading: 'Checkpoint 1',
        time: '4:00 PM',
      },
      {
        color: 'sky',
        detail: '',
        heading: 'Snacks',
        time: '4:00 - 5:00 PM',
      },
      {
        color: 'blue',
        detail: 'At 240 seater',
        heading: 'Speaker 2',
        time: '5:15 - 6:00 PM',
      },
    ],
  },
  {
    id: 'Sat-Sun',
    heading: (
      <>
        <span>26th</span>
        <br />
        <span>Saturday</span>
        <br />
        <span>(Night)</span>
      </>
    ),
    details: [
      {
        color: 'red',
        detail: '',
        heading: 'Dinner',
        time: '8:30 - 9:30 PM',
      },
      {
        color: 'green',
        detail: '',
        heading: 'Mentor Interaction',
        time: '9:30 PM',
      },
      {
        color: 'blue',
        detail: '',
        heading: 'Midnight Snacks',
        time: '1:30 AM',
      },
      {
        color: 'indigo',
        detail: '',
        heading: 'Early Morning Snacks',
        time: '5:30 AM',
      },
    ],
  },
  {
    id: 'Sun-mor',
    heading: (
      <>
        <span>27th Oct</span>
        <br />
        <span>Sunday</span>
        <br />
        <span>(Morning)</span>
      </>
    ),
    details: [
      {
        color: 'yellow',
        detail: '',
        heading: 'Breakfast',
        time: '8:00 - 9:00 AM',
      },
      {
        color: 'pink',
        detail: '',
        heading: 'Checkpoint 2',
        time: '9:00 AM',
      },
      {
        color: 'red',
        detail: 'Submit the project',
        heading: 'Hackathon End',
        time: '11:00 AM',
      },
      {
        color: 'green',
        detail: 'Submission closes (github + demo video)',
        heading: 'Submission Deadline',
        time: '11:30 AM',
      },
      {
        color: 'blue',
        detail: 'Selection of top 10 + speaker (240s)',
        heading: 'Top 10 Selection',
        time: '11:30 - 12:30 PM',
      },
    ],
  },
  {
    id: 'Sun-eve',
    heading: (
      <>
        <span>27th Oct</span>
        <br />
        <span>Sunday</span>
        <br />
        <span>(Evening)</span>
      </>
    ),
    details: [
      {
        color: 'indigo',
        detail: '',
        heading: 'Top 10 Results Announced',
        time: '12:30 PM',
      },
      {
        color: 'yellow',
        detail: '',
        heading: 'Lunch',
        time: '12:30 - 1:30 PM',
      },
      {
        color: 'orange',
        detail: '',
        heading: 'Judging Presentation',
        time: '2:00 - 5:00 PM',
      },
      {
        color: 'pink',
        detail: '',
        heading: 'Valedictory Ceremony',
        time: '6:00 PM',
      },
    ],
  },
];
