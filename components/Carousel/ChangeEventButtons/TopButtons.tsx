import Image from 'next/image';
import { Event } from '@/data/carousel';

interface EventNavBarProps {
  events: Event[];
  eventId: number;
  onClick: (num: number) => void;
}

const colors = (color: string) => {
  let main = '';
  let sec = '';
  if (color === 'purple') {
    main = '#7A4DDB';
    sec = '#301435';
  } else if (color === 'yellow') {
    main = '#FEE55C';
    sec = '#323514';
  } else if (color === 'green') {
    main = '#5B976D';
    sec = '#143521';
  } else if (color === 'red') {
    main = '#FF474A';
    sec = '#351414';
  } else {
    main = '#05518F';
    sec = '#142935';
  }

  return [main, sec];
};

const EventNavbar = ({ events, eventId, onClick }: EventNavBarProps) => {
  return (
    <div className="z-[2] mx-2 grid h-fit w-full grid-cols-6 place-items-center items-stretch justify-center gap-4 p-2 px-4 sm:gap-8 md:flex lg:gap-24">
      {events.map((event) => {
        const [main, sec] = colors(event.color);
        return (
          <button
            onClick={() => onClick(parseInt(event.id))}
            key={event.id}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${main}, ${sec}, ${main})`,
            }}
            className={
              'xs:w-32 xs:h-32 col-span-2 h-24 w-24 cursor-pointer rounded-lg p-[1px] transition ease-in focus:p-[3px] sm:w-36 md:h-[160px]' +
              (event.id === '3' ? ' col-start-2' : '')
            }
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gradient-carousel">
              <div
                className={
                  ` planet-image-${event.id}` +
                  ' relative flex items-center justify-center'
                }
              >
                <Image
                  src={event.planet}
                  alt={''}
                  width={0}
                  height={0}
                  sizes="100%"
                  className={'relative -left-[2px] top-[1.1px] w-9/12'}
                />
              </div>
              <span
                className={
                  'xs:text-[10px] relative -top-2 flex w-fit flex-1 items-center justify-center p-0.5 text-center text-[8px] md:text-sm ' +
                  ` event-name-${event.id}`
                }
              >
                {event.name}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default EventNavbar;
