import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-purple-900 to-blue-500 text-white flex flex-col justify-center items-center p-2 w-full'>
            <div className="logo font-bold text-2xl">
                <span className="text-green-500"> &lt;</span>
                Pass
                <span className="text-green-500">OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center tracking-wider text-lg	'>
                Created with <img className='w-12' src="icons/heart.png" alt="" /> by KS08
            </div>
        </div>

    )
}

export default Footer
