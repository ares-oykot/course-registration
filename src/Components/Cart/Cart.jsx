const Cart = ({ selectCard, totalCredit, remaining, totalPrice }) => {
  return (
    <>
      <div className="w-1/4 p-4 bg-white rounded-md">
        <h4 className="text-lg font-bold text-[#2F80ED] border-b-2 pb-3 mb-4">
          Credit Hour Remaining {remaining} hr
        </h4>
        <h4 className="text-lg font-bold">Course Name</h4>
        <div className="mt-4">
          {selectCard.map((card, idx) => (
            <ol key={idx} className="">
              <li className="text-black bg-slate-200 mb-2 rounded px-2">
                {idx + 1} : {card.title}
              </li>
            </ol>
          ))}
        </div>
        <h5 className="border-y-2 py-4 mt-5 mb-4 font-medium">Total Credit Hour : {totalCredit}</h5>
        <h5 className="font-bold">Total Price : {totalPrice} USD </h5>
      </div>
    </>
  );
};

export default Cart;
