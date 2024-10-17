import '@/components/Prizes/prizes.css';
import Cup from '@/components/Prizes/Trophies/Cup';

const Trophies = () => {
  return (
    <>
      <div className="z-10 hidden h-fit w-full items-center justify-evenly gap-8 p-2 md:flex [&>*]:backdrop-brightness-90">
        <Cup
          cupImage={'/GoldenCup.svg'}
          cupColor={'gold'}
          className={'mt-16'}
          prize={'1st Prize'}
          amount="75"
        />
        <Cup
          cupImage={'/SilverCup.svg'}
          cupColor={'silver'}
          className={'mt-16'}
          prize={'2nd Prize'}
          amount="50"
        />
        {/* <Cup
          cupImage={'/BronzeCup.png'}
          cupColor={'bronze'}
          className={'mt-32'}
          prize={'3rd Prize'}
          amount="Not Decided"
        /> */}
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start gap-16 p-4 md:hidden">
        <Cup
          cupImage={'/GoldenCup.svg'}
          cupColor={'gold'}
          className={'group/gold mt-6'}
          prize={'1st Prize'}
          amount="75"
        />
        <Cup
          cupImage={'/SilverCup.svg'}
          cupColor={'silver'}
          className={'group/silver'}
          prize={'2nd Prize'}
          amount="50"
        />
        {/* <Cup
          cupImage={'/BronzeCup.png'}
          cupColor={'bronze'}
          className={'group/bronze'}
          prize={'3rd Prize'}
          amount="15"
        /> */}
      </div>
    </>
  );
};

export default Trophies;
