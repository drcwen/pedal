import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

function Gallery() {

  return (
    <>
    <div className="min-w-full min-h-screen bg-navyblue px-5 py-15 md:px-20 md:py-25 flex flex-col md:gap-10 gap-20">
        <h1 className='font-akagi md:text-5xl text-4xl font-black tracking-wide text-yellow'>Gallery</h1>

        <div className='md:w-full bg-white'>
            <div className='flex flex-row justify-between gap-5 items-center'>
                {/*Previous Button*/}
                    
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}
                >
                    <button>
                        <GrFormPrevious
                            
                            className="text-7xl cursor-pointer text-blue"
                        />
                    </button>
                </motion.button>

                <div className='w-full flex'>
                    <img src="./images/hero_background.png" className='w-100'></img>
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log('hover started!')}
                >
                    <button>
                        <MdOutlineNavigateNext
                        className="text-7xl cursor-pointer text-blue"
                        />  
                    </button>
                </motion.button>
            </div>
        </div>
    </div>
    </>

)}

export default Gallery
