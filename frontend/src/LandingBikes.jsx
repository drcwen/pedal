import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "motion/react";

function LandingBikes() {
  const [bikes, setBikes] = useState([]);
  const [familyBikes, setFamilyBikes] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [familyCurrentIndex, setFamilyCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(1); // next = 1, prev = -1


  {/*PC Visible Bikes*/}
  const visibleBikes = bikes.slice(currentIndex, currentIndex + 2);
  const visibleFamilyBikes = familyBikes.slice(familyCurrentIndex, familyCurrentIndex + 2);

  {/*PC Solo Bike Next Button*/}
  const nextBike = () => {
    setDirection(1);
    setCurrentIndex((soloPrev) =>
      soloPrev + 2 >= bikes.length ? 0 : soloPrev + 2
    );
  };

  {/*PC Solo Bike Prev Button*/}
  const prevBike = () => {
    setDirection(-1);
    setCurrentIndex((soloPrev) =>
      soloPrev - 2 < 0 ? bikes.length - 2 : soloPrev - 2
    );
  };

  {/*PC Family Bike Next Button*/}
  const familyNextBike = () => {
    setDirection(1);
    setFamilyCurrentIndex((prev) =>
      prev + 2 >= familyBikes.length ? 0 : prev + 2
    );
  };

  {/*PC Family Bike Next Button*/}
  const familyPrevBike = () => {
    setDirection(-1);
    setFamilyCurrentIndex((prev) =>
      prev - 2 < 0 ? familyBikes.length - 2 : prev - 2
    );
  };
  

  {/*useEffect Solo Bikes*/}
  useEffect(() => {
    axios
      .get("http://localhost:4000/inventory/solobikes")
      .then((res) => {
        setBikes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  {/*useEffect Family Bikes*/}
  useEffect(() => {
    axios
      .get("http://localhost:4000/inventory/familybikes")
      .then((res) => {
        setFamilyBikes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  {/*Motion for Pagination*/}
  const variants = {
    hidden: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="min-w-full min-h-screen bg-[#F7F7F7] px-5 py-15 md:px-20 md:py-25 flex flex-col md:gap-10 gap-20 justify-center">

      {/*Solo Bikes*/}
      <div className='flex flex-col md:gap-10 gap-15'>
          <h1 className='font-akagi md:text-3xl text-4xl font-black tracking-wide text-blue'>Solo Bikes</h1>

          <div className='flex flex-row gap-5 items-center justify-center'>

            {/*Previous Button*/}
            <div className='hidden md:block'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
              >
                <button>
                  <GrFormPrevious
                    onClick={prevBike}
                    className="text-7xl cursor-pointer text-blue"
                  />
                </button>
              </motion.button>
            </div>

             <div className='w-full flex flex-1 md:gap-10'>
                <div className=' hidden md:w-full md:grid md:grid-cols-2 md:gap-5 md:items-center'>
                  {/*PC*/}
                  {visibleBikes.map((bike) => (
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex gap-5"
                      >
                        <div className='w-full flex justify-center'>
                          <div key={bike._id} className='grid grid-cols-2 gap-5 items-center justify-center'>
                            <div className='flex'>
                              <img src={bike.modelImage} className='w-50'></img>
                            </div>

                            <div className='flex flex-col gap-5'>
                              <div>
                                <h1 className="text-3xl font-akagi text-blue font-bold">
                                    {bike.modelName}
                                </h1>
                                <h1 className="text-xl font-bold text-gray">
                                  {bike.rentalRatePerHour}/hr
                                </h1>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log('hover started!')}
                              >
                                <button className='bg-blue rounded-lg py-2 w-fit px-3 font-bold font-akagi text-white block'>
                                  <h1>Rent Now!</h1>
                                </button>
                              </motion.button>
                            </div>
                            

                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ))}

                </div>

                <div className='w-full flex flex-col gap-30 md:hidden md:grid md:grid-cols-2 md:gap-5 md:items-center'>

                  {/*Mobile*/}
                  {bikes.map((bike) => (
                    <div key={bike._id} className='w-full flex flex-col items-center justify-center gap-10'>
                      <div className='flex flex-col gap-5'>
                        <img src={bike.modelImage} className='w-50' />
                      </div>
                      <div className='flex flex-col gap-2 items-center'>
                        <div className='flex flex-col gap-1 items-center'>
                          <h1 className='font-bold font-akagi text-2xl text-darkblue'>{bike.modelName}</h1>
                          <h1 className='font-bold font-akagi text-lg text-gray'>{bike.rentalRatePerHour}/hr</h1>
                        </div>
                        <button className='px-3 py-2 bg-blue rounded-lg w-fit items-center justify-center'>
                          <h1 className='font-akagi font-bold text-white'>Reserve</h1>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
             </div>

            {/*Next Button*/}
            <div className='hidden md:block'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
              >
                <button>
                  <MdOutlineNavigateNext
                    onClick={nextBike}
                    className="text-7xl cursor-pointer text-blue"
                  />  
                </button>
              </motion.button>
            </div>
          </div>
      </div>


      {/*Family Bikes*/}
      <div className='flex flex-col md:gap-10 gap-15'>
          <h1 className='font-akagi md:text-3xl text-4xl font-black tracking-wide text-blue'>Family Bikes</h1>

          <div className='flex flex-row gap-5 items-center justify-center'>

            {/*Previous Button*/}
            <div className='hidden md:block'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
              >
                <button>
                  <GrFormPrevious
                    onClick={familyPrevBike}
                    className="text-7xl cursor-pointer text-blue"
                  />
                </button>
              </motion.button>
            </div>

             <div className='w-full flex flex-1 md:gap-10'>
                <div className=' hidden md:w-full md:grid md:grid-cols-2 md:gap-5 md:items-center'>
                  {/*PC*/}
                  {visibleFamilyBikes.map((bike) => (
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={familyCurrentIndex}
                        custom={direction}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex gap-5"
                      >
                        <div className='w-full flex justify-center'>
                          <div key={bike._id} className='grid grid-cols-2 gap-5 items-center justify-center'>
                            <div className='flex'>
                              <img src={bike.modelImage} className='w-50'></img>
                            </div>

                            <div className='flex flex-col gap-5'>
                              <div>
                                <h1 className="text-3xl font-akagi text-blue font-bold">
                                    {bike.modelName}
                                </h1>
                                <h1 className="text-xl font-bold text-gray">
                                  {bike.rentalRatePerHour}/hr
                                </h1>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log('hover started!')}
                              >
                                <button className='bg-blue rounded-lg py-2 w-fit px-3 font-bold font-akagi text-white block'>
                                  <h1>Rent Now!</h1>
                                </button>
                              </motion.button>
                            </div>
                            

                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ))}

                </div>

                <div className='w-full flex flex-col gap-30 md:hidden md:grid md:grid-cols-2 md:gap-5 md:items-center'>

                  {/*Mobile*/}
                  {familyBikes.map((bike) => (
                    <div key={bike._id} className='w-full flex flex-col items-center justify-center gap-10'>
                      <div className='flex flex-col gap-5'>
                        <img src={bike.modelImage} className='w-50' />
                      </div>
                      <div className='flex flex-col gap-2 items-center'>
                        <div className='flex flex-col gap-1 items-center'>
                          <h1 className='font-bold font-akagi text-2xl text-darkblue'>{bike.modelName}</h1>
                          <h1 className='font-bold font-akagi text-lg text-gray'>{bike.rentalRatePerHour}/hr</h1>
                        </div>
                        <button className='px-3 py-2 bg-blue rounded-lg w-fit items-center justify-center'>
                          <h1 className='font-akagi font-bold text-white'>Reserve</h1>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
             </div>

            {/*Next Button*/}
            <div className='hidden md:block'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
              >
                <button>
                  <MdOutlineNavigateNext
                    onClick={familyNextBike}
                    className="text-7xl cursor-pointer text-blue"
                  />  
                </button>
              </motion.button>
            </div>
          </div>
      </div>

    
    </div>
  );
}

export default LandingBikes;