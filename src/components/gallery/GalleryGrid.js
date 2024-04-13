import { cars } from '../../allLists'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { Context } from '../../Context';
import { FaHeartCirclePlus,FaHeartCircleCheck } from "react-icons/fa6";

export default function GalleryGrid() {
  const $ = useContext(Context)
  const pageSize = window.innerWidth <= 1024 ? 6 : 12;
  const [searching, setSearching] = useState([]);
  const startIndex = ($.currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults= $.select ? $.filtered.slice(startIndex, endIndex) : cars.slice(startIndex, endIndex);
  const [openReg, setOpenReg] = useState(false);
  const addToFavorites = (car) => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCars')) || [];
    localStorage.setItem('favoriteCars', JSON.stringify([...favorites, car]));
  };
  return (
    <>
    <div className="register_block" style={{display : openReg ? 'flex' : 'none'}}>
        <p>For Auction game go to register</p>
        <Link to='/SignUP'>Sign up</Link>
    </div>
    <div className='gallery_grid'>
      {paginatedResults.map((car,i) =>{
        return <div className='gallery_item' key={car.id}>
            <img src={car.picture} alt="" />
            <h2>{car.name}</h2>
            <h4>{car.date}</h4>
            <span>${car.price},00</span>
            <div className="butttons">
            <Link to={localStorage.getItem('reginfo') !== null ? '/AuctionGame' : '/Gallery'} style={$.stylesevents}><button style={$.stylesbackground} onClick={() =>{
              $.setActualSingle(car);
              localStorage.setItem('auctionSingle',JSON.stringify(car));
              if(localStorage.getItem('reginfo') !== null) {
                $.setforloader(!$.forloader);
              }
              else {
                setOpenReg(true);
              }
            }}>Bid Now</button></Link>
            <Link to='/Single'><button onClick={() =>{
               $.setActualCar(car);
               localStorage.setItem('actualcar',JSON.stringify(car));
               $.setforloader(!$.forloader);
             }}>View Details</button></Link>
            </div>
             {
                !$.favorite.includes(car) ?
                <FaHeartCirclePlus onClick={() => {
                    $.favoriteAdding(car);
                    addToFavorites(car);
             }}/> : 
                <FaHeartCircleCheck style={{color:'teal'}} onClick={() => {
                  $.favoriteRemoveing(car.id);
                  const favorites = JSON.parse(localStorage.getItem('favoriteCars')) || [];
                  const updatedFavorites = favorites.filter(item => item.id !== car.id);
                  localStorage.setItem('favoriteCars', JSON.stringify(updatedFavorites));
                  $.favoriteRemoveing(car.id);
            }}/>
             }
        </div> 
      })}
    </div>
    <div className="pagination">
          <button
            disabled={$.currentPage === 1}
            onClick={() => {
                $.setCurrentPage($.currentPage - 1)
            }}
            style={{ opacity: $.currentPage === 1 ? 0.4 : 1 }}
          >
            <HiOutlineArrowNarrowLeft />
          </button>
          <span>Page {$.currentPage}</span>
          <button
            disabled={$.select ?searching == '' ? endIndex >= $.filtered.length : endIndex >= searching.length : searching == '' ? endIndex >= cars.length : endIndex >= searching.length }
            onClick={() => {
               $.setCurrentPage($.currentPage + 1)
            }}
            style={{opacity: $.select ?endIndex >= $.filtered.length ? 0.4 : 1 : endIndex >= cars.length ? 0.4 : 1}}
          >
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
    </>
  )
}
