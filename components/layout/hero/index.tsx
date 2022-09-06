import Image from "next/image";

export default function Hero() {
  return (
    <div className=' lg:flex my-20 lg:h-full lg:mb-96 mb-20'>
      <div className='mr-10 hidden lg:block '>
        <div className='w-32 h-32 rounded-full bg-primary'></div>
      </div>
      <div>
        <div className='text-4xl md:text-6xl lg:text-8xl font-medium'>
          <div>BUILD</div>
          <div>COMMUNICATIONS</div>
          <div>WITH YOUR</div>
          <div>CLIENTS</div>
        </div>
        <div className='my-4 lg:my-10 text-gray-500 sm:max-w-md font-bold'>
          The best way to Improve and Make it Easier For You to Establish Good
          Communication With Your Clients.
        </div>
      </div>
      <div className='bg-green-700 lg:relative w-80 h-[27.5rem]  top-[200px] right-80 rounded-t-full my-10 hidden lg:block'>
        <div className='lg:relative right-40 top-2'>
          <Image
            src={"/assets/hero-1.png"}
            width={577}
            height={433}
            layout='fixed'
            className='scale-110'
          />
        </div>
      </div>
      <div className='bg-gray-400 lg:relative w-96 h-96 top-[36rem] right-[58rem] rounded-full my-10 hidden lg:block '>
        <div className='lg:relative right-[7rem] top-[-1.6rem] rounded-full  '>
          <Image
            src={"/assets/hero-2.png"}
            width={612}
            height={408}
            objectFit='contain'
            layout='fixed'
            className='rounded-b-full '
          />
        </div>
      </div>
    </div>
  );
}
