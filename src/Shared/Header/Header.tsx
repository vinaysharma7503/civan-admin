import moment from 'moment'
import React from 'react'
import avatar from '../../assets/avatar.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <>
    <div className="h-14 bg-blue">
      <div className="md:flex justify-end items-center">
        <img src={avatar} alt="avatar" className='h-12 cursor-pointer' />
        <div className="md:flex md:flex-col justify-start items-start mr-8 ml-1">
          <h3 className='text-black'>Vinay</h3>
          <p className="text-xs text-black font-semibold">{moment().format("hh:mm:ss DD-MM-YYYY")}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header