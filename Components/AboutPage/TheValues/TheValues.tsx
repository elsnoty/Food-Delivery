import Image, { StaticImageData } from 'next/image'
import React from 'react'
import coking from "../../../public/coking.svg"
import taste from "../../../public/taste.svg"
import heart from "../../../public/heart.svg"
import avatar from "../../../public/avatar.svg"
import achive from "../../../public/achive.svg"
import teamwork from "../../../public/teamWork.svg"
interface Values {
    photo: StaticImageData,
    Title: string,
    comment: string,
}
const TheValues = () => {
    const data: Values[] = [
        {
            photo: heart,
            Title: "Love & Passion",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            photo: taste,
            Title: "Flavour",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            photo: coking,
            Title: "Care & craft",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            photo: avatar,
            Title: "Customer-first",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            photo: teamwork,
            Title: "Teamwork",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            photo: achive,
            Title: "Quality",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ]
  return (
    <div className='px-36 py-24 max-lg:px-10 relative max-md:px-7 gap-5'>
        <h1 className='text-4xl font-bold text-center'>The values that drive everything we do</h1>
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 py-8 m'>
  {data.map((ele, index) => (
    <div key={index} className='flex flex-col items-center text-center '>
      <Image src={ele.photo} alt={ele.Title} />
      <h1 className='py-5 text-3xl font-bold'>{ele.Title}</h1>
      <p className='text-grayCustom'>{ele.comment}</p>
    </div>
  ))}
</div>

    </div>

  )
}

export default TheValues
