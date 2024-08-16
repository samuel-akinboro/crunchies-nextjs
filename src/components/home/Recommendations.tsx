import React from 'react'
import Image from 'next/image'

const Recommendations = () => {
  return (
    <div className="flex items-center gap-1 mt-6 w-full">
      <button className="flex-1 h-[6.5rem] relative overflow-visible transform active:scale-90">
        <Image
          src="/images/recom-1.png"
          layout="fill"
          objectFit="cover"
          alt="Recommendation 1"
          className="w-full h-full overflow-visible"
        />
      </button>
      <button className="flex-1 h-[6.5rem] relative overflow-visible transform active:scale-90">
        <Image
          src="/images/recom-2.png"
          layout="fill"
          objectFit="cover"
          alt="Recommendation 2"
          className="w-full h-full overflow-visible"
        />
      </button>
      <button className="flex-1 h-[6.5rem] relative overflow-visible transform active:scale-90">
        <Image
          src="/images/recom-3.png"
          layout="fill"
          objectFit="cover"
          alt="Recommendation 3"
          className="w-full h-full overflow-visible"
        />
      </button>
    </div>
  )
}

export default Recommendations