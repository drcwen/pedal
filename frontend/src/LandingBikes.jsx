import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function LandingBikes() {

  const [bike, setBike] = useState(null);

  useEffect(() => {
  axios.get("http://localhost:4000/inventory")
    .then(res => {
      console.log("DATA:", res.data);
      setBike(res.data);
    })
    .catch(err => console.log(err));
}, []);

  return (
    <>
        <div className='min-w-full min-h-screen bg-[#F7F7F7] px-20 py-25 flex flex-col gap-10'>

          {/*Solo Bikes*/}
          <div className='flex flex-col gap-5'>
            <h1 className='font-akagi text-3xl font-black text-blue tracking-wide'>Solo Bikes</h1>
            
            <div className='w-full flex justify-between items-center'>
              
              <GrFormPrevious className='text-5xl text-blue'/>
              
                <div className='flex flex-row gap-5'>
                 
                  <div className=''>
                    <img src={bike.modelImage} className='w-50'></img>
                  </div>
             
                  <div className='flex flex-col gap-2 justify-center'>
                    <h1 className='text-3xl font-bold font-akagi text-darkblue'>{bike.modelName}</h1>
                    <h1 className='text-xl font-bold font-akagi text-gray'>{bike.rentalRatePerHour}/hr</h1>
                    <button className='w-fit bg-blue font-bold font-akagi text-white rounded-lg px-4 py-1 text-lg'>Reserve</button>
                  </div>
                  
                </div>

              <MdOutlineNavigateNext className='text-5xl text-blue'/>
            </div>
          </div>

          {/*Solo Bikes*/}
          <div className='flex flex-col gap-5'>
            <h1 className='font-akagi text-3xl font-black text-blue tracking-wide'>Solo Bikes</h1>
            
            <div className='w-full flex justify-between items-center'>
              
              <GrFormPrevious className='text-5xl text-blue'/>
              
                <div className='flex flex-row gap-5'>
                 
                  <div className=''>
                    <img src={bike.modelImage} className='w-50'></img>
                  </div>
             
                  <div className='flex flex-col gap-2 justify-center'>
                    <h1 className='text-3xl font-bold font-akagi text-darkblue'>{bike.modelName}</h1>
                    <h1 className='text-xl font-bold font-akagi text-gray'>{bike.rentalRatePerHour}/hr</h1>
                    <button className='w-fit bg-blue font-bold font-akagi text-white rounded-lg px-4 py-1 text-lg'>Reserve</button>
                  </div>
                  
                </div>

              <MdOutlineNavigateNext className='text-5xl text-blue'/>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default LandingBikes
