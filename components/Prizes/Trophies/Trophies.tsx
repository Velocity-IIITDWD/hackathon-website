import '@/components/Prizes/prizes.css';
import Cup from '@/components/Prizes/Trophies/Cup';

const Trophies = () => {
  return (
    <>
      <div className="z-10 hidden h-fit w-full items-center justify-evenly gap-8 p-2 md:flex [&>*]:backdrop-brightness-90">
        <Cup
          cupImage={'/GoldenCup.webp'}
          cupColor={'gold'}
          className={'mt-16'}
          prize={'1st Prize'}
          amount="75"
        />
        <Cup
          cupImage={'/SilverCup.webp'}
          cupColor={'silver'}
          className={'mt-16'}
          prize={'2nd Prize'}
          amount="50"
        />
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start gap-16 p-4 md:hidden">
        <Cup
          cupImage={'/GoldenCup.webp'}
          cupColor={'gold'}
          className={'group/gold mt-6'}
          prize={'1st Prize'}
          amount="75"
        />
        <Cup
          cupImage={'/SilverCup.webp'}
          cupColor={'silver'}
          className={'group/silver'}
          prize={'2nd Prize'}
          amount="50"
        />
      </div>
    </>
  );
};

export default Trophies;
