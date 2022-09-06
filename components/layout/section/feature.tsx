import LottiePlayer from "../../utils/LottiePlayer";
import * as Security from "../../LottieFiles/security.json";
import * as ChatBot from "../../LottieFiles/chatbot.json";
import * as Integration from "../../LottieFiles/integration.json";

export default function Feature() {
  return (
    <div className='mt-10 lg:mt-96 lg:pt-80'>
      {/* ************* Feature 1 *********************** */}
      <div className='flex flex-col md:flex-row justify-center items-center mb-20'>
        <div className='w-60 h-60 lg:w-80 lg:h-80 mx-10 rounded-full p-10'>
          <LottiePlayer animationData={Security} />
        </div>
        <div className='md:max-w-xl'>
          <div className='text-2xl font-bold my-5'>
            GETTING USER DATA SECURELY
          </div>
          <div className='my-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            veniam quis dicta impedit, atque facere, repellendus ipsa ad
            voluptatum ut velit commodi fuga eligendi vitae? Veritatis, fuga.
            Quae, harum nam.
          </div>
          <div className='btn md:my-6'>Know More</div>
        </div>
      </div>

      {/* ********************** Feature 1 ends ************************* */}

      {/* ********************** Feature 2 starts ************************* */}

      <div className='flex flex-col md:flex-row-reverse justify-center items-center my-40'>
        <div className='w-60 h-60 lg:w-80 lg:h-80 mx-10'>
          <LottiePlayer animationData={ChatBot} />
        </div>
        <div className='md:max-w-xl'>
          <div className='text-2xl font-bold my-5'>
            USER FRIENDLY LEVEL 2 CHATBOT
          </div>
          <div className='my-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            veniam quis dicta impedit, atque facere, repellendus ipsa ad
            voluptatum ut velit commodi fuga eligendi vitae? Veritatis, fuga.
            Quae, harum nam.
          </div>
          <div className='btn md:my-6'>Know More</div>
        </div>
      </div>

      {/* ********************** Feature 2 ends ************************* */}
      {/* ********************** Feature 3 Starts ************************* */}

      <div className='flex flex-col md:flex-row justify-center items-center my-40'>
        <div className='w-full h-60 lg:w-full lg:h-80 mx-10'>
          <LottiePlayer
            animationData={Integration}
            style={{ padding: "0 10px" }}
          />
        </div>
        <div className='md:max-w-xl'>
          <div className='text-2xl font-bold my-5'>
            EASY INTERGRATION AND HIGHLY CUSTOMIZABLE
          </div>
          <div className='my-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            veniam quis dicta impedit, atque facere, repellendus ipsa ad
            voluptatum ut velit commodi fuga eligendi vitae? Veritatis, fuga.
            Quae, harum nam.
          </div>
          <div className='btn md:my-6'>Know More</div>
        </div>
      </div>
    </div>
  );
}
