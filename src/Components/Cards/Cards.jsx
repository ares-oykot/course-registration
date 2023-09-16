import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Dollar from "../../assets/dollar-sign 1.png";
import Frame from "../../assets/Frame.png";
import Swal from 'sweetalert2'

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSelect = (card) => {
    const isExist = selectCard.find((item) => item.id == card.id);
    let count = card.credit;
    if (isExist) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'You have already selected this Course Please choose another one.',
        footer: '<a href="">Report</a>'
      });
    } else {
      selectCard.forEach((item) => {
        count = count + item.credit;
      });

      const totalRemaining = 20 - count;
      if (count > 20) {
        Swal.fire({
          icon: 'error',
          title: 'Sorry',
          text: "You don't have enough credit.",
          footer: '<a href="">Report</a>'
        });
      } else {
        setTotalCredit(count);
        setTotalPrice(totalPrice + card.price);
        setRemaining(totalRemaining);
        setSelectCard([...selectCard, card]);
      }
    }
  };
  return (
    <div className="">
      <h1 className="text-center md:text-2xl lg:text-3xl font-bold mt-2 md:mt-4">
        Course Registration
      </h1>
      <div className="flex gap-1 md:gap-5 mt-2 md:mt-3 lg:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-3  w-9/12">
          {cards.map((card, idx) => (
            <div className="" key={idx}>
              <div className="p-1 md:p-2 lg:p-4 rounded-md bg-white h-full flex flex-col justify-around">
                <div className="">
                  <img className="w-full" src={card.cover} alt="" />
                </div>
                <h3 className="text-[8px] md:text-[10px] lg:text-lg font-semibold  lg:pt-2">{card.title}</h3>
                <p className="text-[6px] md:text-[8px] lg:text-sm text-[#1C1B1B99]">
                  <span>{card.description}</span>
                </p>
                <div className="">
                  <div className="flex lg:my-3">
                    <div className="flex md:items-center">
                      <img className="h-2 w-2 md:w-3 md:h-3 lg:w-4 lg:h-4" src={Dollar} alt="" />
                      <span className="text-[7px] md:text-[9px] lg:text-base"> Price : {card.price}</span>
                    </div>
                    <div className="flex md:items-center ml-2 lg:ml-3">
                      <img className="h-2 w-2 md:w-4 md:h-4 mr-1" src={Frame} alt="" />
                      <span className="text-[7px] md:text-[9px] lg:text-base">Credit : {card.credit} hr</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleSelect(card)}
                  className="w-full text-white py-[2px] md:py-1 lg:py-2 text-[7px] md:text-[8px] lg:text-base rounded-sm  md:rounded lg:rounded-md md:mt-1 lg:mt-2 bg-[#2F80ED] hover:bg-[#3445ff]"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <Cart
          selectCard={selectCard}
          totalCredit={totalCredit}
          remaining={remaining}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

export default Cards;
