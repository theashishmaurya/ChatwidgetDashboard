import Container from "../container";

export default function Footer() {
  return (
    <div className='w-full h-full bg-gray-600 text-white py-20 md:py-40'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
          <div>
            <div className='text-4xl font-bold'>Daisy</div>
            <div>Icons</div>
          </div>
          <div>
            <div>About</div>
            <div> How it works</div>
            <div>Blog</div>
          </div>
        </div>
        <div className='divider'></div>
        <div>CopyRights</div>
      </Container>
    </div>
  );
}
