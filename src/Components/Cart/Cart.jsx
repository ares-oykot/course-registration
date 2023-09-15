const Cart = ({ selectCard, totalCredit, remaining, totalPrice }) => {
  return (
    <>
      <div className="w-1/4 border p-4 bg-white rounded-md">
        <h4 className="text-lg font-bold text-[#2F80ED] border-b-2 pb-3 mb-3">
          Credit Hour Remaining {remaining} hr
        </h4>
        <h4 className="text-lg font-bold">Course Name</h4>
        <div className="mt-4">
          {selectCard.map((card, idx) => (
            <ol key={idx} className="">
              <li>
                {idx + 1} : {card.title}
              </li>
            </ol>
          ))}
        </div>
        <h5 className="border-y-2 py-2 mt-5 mb-2">Total Credit Hour : {totalCredit}</h5>
        <h5 className="">Total Price : {totalPrice} USD </h5>
      </div>
    </>
  );
};

export default Cart;
