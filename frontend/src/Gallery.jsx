import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

function Gallery() {

  return (
    <>
    <div className="min-w-full min-h-screen bg-navyblue px-5 py-15 md:px-20 md:py-25 flex flex-col md:gap-10 gap-20">
        <h1 className='font-akagi md:text-5xl text-4xl font-black tracking-wide text-yellow'>Gallery</h1>

        <div className='md:w-full'>
            <div className='flex flex-row justify-between md:gap-5 items-center'>
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

                <div className='w-full flex items-center justify-center grid md:grid-cols-2 grid-rows-2 gap-5'>
                    <div className='flex items-center justify-center'>
                        <img className='w-100 rounded-2xl border border-blue border-6' src='https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/502638986_9630934067032644_1889315869874849885_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFBd_KEA9qvi1x9BPY33fki1Ev9TaWTye_US_1NpZPJ793pg2xNtH-1kTnfYVr0LMcjbLTj9hRke24MEzkNZ3TO&_nc_ohc=65G25A-v9PkQ7kNvwEkqfcb&_nc_oc=Adpe7Y_M4wTKWvLqXgZtLRtn-1MZ--ransvqwju7SREjy-SzzwaggdRqmi_r41Dn65M&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=imQuwMYpTMrdEWfGwmi6pQ&_nc_ss=7a3a8&oh=00_Af0Y75ACmXdQfaBJ48Q2suWZWzx6NE3Sts_ty8akVkQgsw&oe=69E676F3'></img>
                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='w-100 rounded-2xl border border-blue border-6' src='https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/502638986_9630934067032644_1889315869874849885_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFBd_KEA9qvi1x9BPY33fki1Ev9TaWTye_US_1NpZPJ793pg2xNtH-1kTnfYVr0LMcjbLTj9hRke24MEzkNZ3TO&_nc_ohc=65G25A-v9PkQ7kNvwEkqfcb&_nc_oc=Adpe7Y_M4wTKWvLqXgZtLRtn-1MZ--ransvqwju7SREjy-SzzwaggdRqmi_r41Dn65M&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=imQuwMYpTMrdEWfGwmi6pQ&_nc_ss=7a3a8&oh=00_Af0Y75ACmXdQfaBJ48Q2suWZWzx6NE3Sts_ty8akVkQgsw&oe=69E676F3'></img>
                    </div>

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
