import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".99mb",
      close:true ,
      tag:{ isOpen : true, tagtitle : "Download", tagColor : "green"},

    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".99mb",
      close:true ,
      tag:{ isOpen : true, tagtitle : "Download", tagColor : "green"},

    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".99mb",
      close:true ,
      tag:{ isOpen : true, tagtitle : "Download", tagColor : "green"},

    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-10'>
       {data.map((item, index)=>(
        <Cards data={item} reference = {ref} />
       ))}
    </div>
  )
}

export default Foreground