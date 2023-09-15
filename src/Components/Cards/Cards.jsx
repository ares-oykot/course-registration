import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Dollar from "../../assets/dollar-sign 1.png";
import Frame from "../../assets/Frame.png";

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
    let price = card.price;
    if (isExist) {
      alert(
        "You have already selected these Course Please select another one."
      );
    } else {
      selectCard.forEach((item) => {
        count = count + item.credit;
        price = price + item.price;
      });

      const totalRemaining = 20 - count;
      if (count > 20) {
        alert("You do not have enough credit");
      } else {
        setTotalCredit(count);
        setTotalPrice(price);
        setRemaining(totalRemaining);
        setSelectCard([...selectCard, card]);
      }
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold mt-4">
        Course Registration
      </h1>
      <div className="flex gap-5 mt-8">
        <div className="grid grid-cols-3 gap-3  w-9/12">
          {cards.map((card, idx) => (
            <div className="" key={idx}>
              <div className="border p-4 rounded-md bg-white h-full flex flex-col justify-around">
                <div className="">
                  <img className="w-full" src={card.cover} alt="" />
                </div>
                <h3 className="text-lg font-semibold pt-2">{card.title}</h3>
                <p className="text-sm">
                  <small>{card.description}</small>
                </p>
                <div className="bottom-4">
                  <div className="flex my-3">
                    <div className="flex items-center">
                      <img className="w-4 h-4" src={Dollar} alt="" />
                      <span> Price : {card.price}</span>
                    </div>
                    <div className="flex items-center ml-3">
                      <img className="w-4 h-4" src={Frame} alt="" />
                      <span>Credit : {card.credit} hr</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleSelect(card)}
                  className="w-full text-white py-2 rounded-md mt-2 bg-[#2F80ED]"
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
