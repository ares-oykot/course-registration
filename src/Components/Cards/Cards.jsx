import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('../../../public/api.json')
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
    console.log(cards);
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-4">Course Registration</h1>
        </div>
    );
};

export default Cards;