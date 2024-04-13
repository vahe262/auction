import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function AuctionsGame() {
  const $ = useContext(Context);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  const [money, setMoney] = useState($.actualSingle.price);
  const [picture, setPicture] = useState($.actualSingle.picture);
  const [fifty, setFifty] = useState(0);
  const [betTime, setBetTime] = useState(Math.round(Math.random() * 4500));
  // const [betCount, setBetCount] = useState(Math.round(Math.random() * 15));
  const [betCount, setBetCount] = useState(2);
  const [opponent, setOpponent] = useState([50,100,150,200,250,300].sort(() => Math.random() - 0.5));
  const [startBid, setStartBid] = useState(true);
  const [myClick, setMyClick] = useState(0);
  const [betBool, setBetBool] = useState(false);
  const [enemyMovesOver, setEnemyMovesOver] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 1
        );
      }, 50);
      return () => {
        clearInterval(timer);
      };
    }
  }, [start]);

  useEffect(() => {
    setPicture(JSON.parse(localStorage.getItem("auctionSingle")));
    setMoney(JSON.parse(localStorage.getItem("auctionSingle")).price);
  }, []);

  const handleBid = () => {
    setBetBool(true);
    setOpponent([50,100,150,200,250,300].sort(() => Math.random() - 0.5));
    setBetTime(Math.round(Math.random() * 4500));
    setMoney(money + fifty);
    setFifty(0);
    setStart(true);
    setProgress(0);
    setStartBid(false);
    setMyClick(myClick + 1);
    if (myClick < betCount) {
      setTimeout(() => {
        setMoney(money + opponent[0] + fifty);
        setProgress(0);
        setBetBool(false);
      }, betTime);
    } else {
      setBetBool(true);
      setTimeout(() => {
        setEnemyMovesOver(true);
        setMoney('Bonus');
      }, 5000);
      setTimeout(() => {
        setStart(false);
      }, 1e4);
    }
  };

  return (
    <div className="bid_container">
      <div className="img_info">
        <h2>{$.actualSingle.name}</h2>
        <img src={$.actualSingle.picture} alt="" />
      </div>
      <div className="bid_info">
        <CircularProgressbar
          styles={{
            path: { stroke: enemyMovesOver ? "red" : null, },
            text: {
              fill: enemyMovesOver ? "red" : null,
              fontSize:"18px", 
            },
          }}
          value={progress}
          text={`${money}$`}
        />
        <p>all bids are USD</p>
        <div className="inputs_container">
          <div className="buttons_container">
            <button
              onClick={() => {
                fifty > 0 ? setFifty(fifty - 50) : setFifty(0);
              }}
            >
              -
            </button>
            <span>
              <input type="text" value={fifty} />$
            </span>
            <button
              onClick={() => {
                setFifty(fifty + 50);
              }}
            >
              +
            </button>
          </div>
          <button disabled={betBool} onClick={handleBid}>
            Bid
          </button>
        </div>
      </div>
    </div>
  );
}