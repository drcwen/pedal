import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function LandingBikes() {

  const [bikes, setBikes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleBikes = bikes.slice(currentIndex, currentIndex + 2);

  const nextBike = () => {
    setCurrentIndex((prev) =>
      prev + 2 >= bikes.length ? 0 : prev + 2
    );
  };

  const prevBike = () => {
  setCurrentIndex((prev) =>
    prev - 2 < 0 ? bikes.length - 2 : prev - 2
  );
};

  useEffect(() => {
  axios.get("http://localhost:4000/inventory")
    .then(res => {
      console.log("DATA:", res.data);
      setBikes(res.data);
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
              
              <GrFormPrevious 
                onClick={prevBike}
                className='text-5xl cursor-pointer'
              />
              
                <div className='flex flex-row gap-5'>
                  {visibleBikes.map((bike) => (
                    <div key={bike._id} className='flex gap-5'>
                      
                      <div>
                        <img src={bike.modelImage} className='w-50' />
                      </div>

                      <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold'>{bike.modelName}</h1>
                        <h1>{bike.rentalRatePerHour}/hr</h1>
                      </div>

                    </div>
                  ))}
                </div>

              <MdOutlineNavigateNext 
                onClick={nextBike}
                className='text-5xl cursor-pointer'
              />
            </div>
          </div>
          
        </div>
    </>
  )
}

export default LandingBikes
