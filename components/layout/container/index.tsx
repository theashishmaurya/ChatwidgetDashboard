export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='container mx-auto p-2 px-4 lg:p-4 2xl:px-10 h-full '>
      {children}
    </div>
  );
}
