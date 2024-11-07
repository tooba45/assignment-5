import React from 'react'
import Header from './components/Header'
import Image from 'next/image';



const Home = () => {
  return (
    <div className="h-screen">
    <Header/>
    <div className="flex h-[100%}">
      <div className="w-1/2 flex justify-center items-start flex-col m-12">
        <h1 className=" font-bold w-[496px] text-[40px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <Image className=' mt-6 mb-6 items-center  left-[171px]'
        src="/images/imagee.png" alt="paragraph" width={902} height={147}
        />
      
      <button className=" bg-[#6e674d] p-[10px] round-[10px] gap-[10px] text-white">Explore Now</button>
      </div>
      <div className="w-1/2 mt-6 ml-34
       flex justify-center items-center">
    <Image src="/images/figma.jpg" alt="image" width={400} height={600}/>
      </div>
    </div>
    </div>
  )
}

export default Home;




