import React from 'react'

export default function ContactField() {
  return (
    <>
        <div className="contactFild_container1">
            <div className="activ">
               <h2>Contact the company</h2>
               <label> 
               <input type="text" placeholder="Enter your name"></input>
               <input type="text" placeholder="Enter your surname"></input>
               </label> 
               <input type="email" placeholder="Enter your Email"></input>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minima <a href="#">architecto eaque dolor</a> quaerat modi, minus voluptatum quia a magnam velit voluptatem illum nostrum <a href="#">officia sint dolores</a> esse ut unde.</p>
               <label>
               <input type="text" placeholder="Message..."></input>
               <button className='contact_button'>Send</button>
               </label>
            </div>
        </div>
    </>
  )
}
