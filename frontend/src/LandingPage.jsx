import Navigation from './Navigation'
import Inventory from './Inventory'

function LandingPage() {

  return (
    <>
      <div className='w-full'>

        <Navigation />
        
        {/*Hero*/}
        <div className='min-w-full min-h-screen md:py-25 md:px-30 py-27 px-10 bg-[url(./images/mobile_bg.png)] md:bg-[url(./images/hero_background.png)] bg-center bg-cover bg-no-repeat md:py-25 md:px-30 flex flex-col'>
        
          {/*PC Contents*/}
          <div className='hidden md:flex flex-1 pt-20 flex flex-col justify-between'>
            <div className='w-90 flex flex-col gap-3'>
              <h1 className='text-7xl font-black text-yellow font-akagi text-shadow-lg'>Experience our family bikes!</h1>
              <h1 className='text-3xl font-black text-white font-akagi text-shadow-lg'>at La Mesa Eco Park!</h1>
            </div>

            <div className='flex flex-row gap-5 items-center'>
              <div className='bg-yellow border border-yellow border-3 px-10 py-3 rounded-sm text-center shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                <h1 className='text-xl font-akagi font-black text-darkblue'>Rent Now!</h1>
              </div>

              <div className='border border-yellow border-3 px-10 py-3 rounded-sm text-center shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
                <h1 className='text-xl font-akagi font-black text-yellow'>Reserve</h1>
              </div>
            </div>
          </div>

          {/*Mobile Contents*/}
          <div className='md:hidden flex flex-1 flex-col pt-10 justify-between'>


              <div className='w-60 flex flex-col gap-3'>
                <h1 className='text-5xl font-akagi font-black text-yellow text-shadow-lg'>Experience our family bikes!</h1>
                <h1 className='text-xl font-akagi font-black text-white text-shadow-lg'>at La Mesa Eco Park!</h1>
              </div>

              <div className='flex flex-row gap-4'>
                <div className='px-5 py-2 bg-yellow border border-3 border-yellow w-fit rounded-md'>
                  <h1 className='text-md font-akagi font-black text-darkblue'>Rent Now!</h1>
                </div>

                <div className='px-5 py-2 border border-3 border-yellow w-fit rounded-md'>
                  <h1 className='text-md font-akagi font-black text-yellow'>Reserve</h1>
                </div>
              </div>

          </div>
        </div>
        <Inventory />
        <div className='min-w-full min-h-screen bg-[#F7F7F7]'></div>
        <div className='min-w-full min-h-screen bg-blue-800'></div>
        
      </div>
    </>
  )
}

export default LandingPage
