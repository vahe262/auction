import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { FaHeartCirclePlus, FaHeartCircleCheck } from "react-icons/fa6";

export default function Favorite() {
  const $ = useContext(Context);
  $.favorite = JSON.parse(localStorage.getItem('favoriteCars')) || [];

  const removeFromFavorites = (carId) => {
    const updatedFavorites = $.favorite.filter(item => item.id !== carId);
    localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));
    $.favoriteRemoveing(carId);
  };

  return (
    <div className='favorite_container'>
      <h2 key='car'>Your Favorite Cars</h2>
      <div className="favorite_map">
      {$.favorite.map(fav => {
        return <div className='favorite_item'>
          <img src={fav.picture} alt="" />
          <div className="names">
            <span><h2>{fav.name}</h2></span>
            <span>Lot<h4>#{fav.id * 10000000000000000}</h4></span>
          </div>
          <div className="favcar_info">
            <span>(Actual hp)<h4>{fav.hp}hp</h4></span>
            <span>Estimated retail value<h4>${fav.price},00</h4></span>
          </div>
          <div className="fav_buttons_container">
            <span>Actual bid<h4>$0,00</h4></span>
            <Link style={$.stylesevents} to='/AuctionGame' onClick={() =>{
               $.setActualSingle(fav);
               localStorage.setItem('auctionSingle',JSON.stringify(fav));
               $.setforloader(!$.forloader)
            }}><button style={$.stylesbackground} >bid now</button></Link >
        <Link to='/Single'><button onClick={() => {
          $.setActualSingle(fav);
          localStorage.setItem('actualcar', JSON.stringify(fav))
          $.setforloader(!$.forloader)
        }}>View Details</button></Link></div >
  {
    !$.favorite.includes(fav) ?
      <FaHeartCirclePlus onClick={() => {
        $.favoriteAdding(fav);
      }} /> :
      <FaHeartCircleCheck style={{ color: 'teal' }} onClick={() => {
        $.favoriteRemoveing(fav.id);
        removeFromFavorites(fav.id)
      }} />
  }
            </div >
            
        })}
        </div>
    </div >
  )
}