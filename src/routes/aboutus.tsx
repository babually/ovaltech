import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutus')({
  component: AboutUsComponent
})

function AboutUsComponent() {
  return (
    <div>
      {/* Hero Section */}
      <div className='py-20'>
          <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
              <h1 className='text-wrap text-2xl underline text-left pb-8'>About US </h1>
          </div>
      </div>

    {/* End Hero Section */}


  </div>
  );
}
