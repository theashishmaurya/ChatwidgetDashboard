import Footer from "./footer";
import GetStartedFooter from "./footerGetStarted";

export default function () {
  return (
    <div className='h-screen '>
      <div className='w-full flex justify-center relative bottom-[-15rem] '>
        <div className='w-3/4'>
          <GetStartedFooter />
        </div>
      </div>
      <div className='h-screen my-20 '>
        <Footer />
      </div>
    </div>
  );
}
