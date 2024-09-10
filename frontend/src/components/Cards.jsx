import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} className='relative w-60 h-72 rounded-[20px] bg-zinc-700 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between py-4 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose/> : <LuDownload size=".7em" color='#fff' />}
                </span>
            </div>
            {
              data.tag.isOpen && (
                <div className='tag w-full py-4 bg-green-500 flex items-center justify-center'>
                  <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                </div>
              )
            }
        </div>
    </motion.div>
  )
}

export default Cards