const Cart = ({ selectCard, totalCredit, remaining, totalPrice }) => {
  return (
    <>
      <div className="w-1/4 p-1 md:p-2 lg:p-4 bg-white rounded md:rounded-md">
        <h4 className="text-[6px] md:text-xs lg:text-lg font-bold text-[#2F80ED] border-b lg:border-b-2 pb-1 md:pb-2 lg:pb-3 mb-1 md:mb-2 lg:mb-4">
          Credit Hour Remaining {remaining} hr
        </h4>
        <h4 className="text-[6px] md:text-[10px] lg:text-lg font-bold">Course Name</h4>
        <div className="mb-1 md:mb-0 mt-1 md:mt-2 lg:mt-4">
          {selectCard.map((card, idx) => (
            <ol key={idx} className="">
              <li className="text-[5px] md:text-[8px] lg:text-base text-black bg-slate-200 py-[1py] md:py-0 mb-[2px] md:mb-1 lg:mb-2 rounded-sm md:rounded px-1 lg:px-2">
                {idx + 1} : {card.title}
              </li>
            </ol>
          ))}
        </div>
        <h5 className="border-y lg:border-y-2 py-1 md:py-2 lg:py-4 lg:mt-5 mb-1 md:mb-2 lg:mb-4 text-[5px] md:text-[10px] lg:text-base font-medium">Total Credit Hour : {totalCredit}</h5>
        <h5 className="text-[6px] md:text-[10px] lg:text-base font-bold">Total Price : {totalPrice} USD </h5>
      </div>
    </>
  );
};

export default Cart;
