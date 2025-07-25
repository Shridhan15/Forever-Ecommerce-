import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur pariatur id quam praesentium error neque maxime, quisquam eveniet nisi nobis sit officiis molestiae illo possimus reiciendis libero. Voluptate fugit magni assumenda laboriosam!
                </p>

            </div>
            <div>
                <p className=" text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="textxl font-medium mb-5">GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-22233-422-00</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>
        </div>

        <div className="">
            <hr className="" />
            <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - All rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer