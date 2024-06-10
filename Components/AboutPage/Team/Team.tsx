import React from 'react'
import TeamInfo from './TeamInfo'

const Team = () => {
  return (
    <div className='px-36 py-24 max-lg:px-10 relative max-md:px-7 gap-5'>
      <div className='flex-col flex justify-center items-center'>
        <h1 className='font-bold text-4xl'>Meet our team</h1>
        <p className='text-grayCustom py-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <TeamInfo />
    </div>
  )
}

export default Team
