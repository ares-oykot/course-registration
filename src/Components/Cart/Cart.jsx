const Cart = ({remaining}) => {
    return (
        <div className='w-1/4 border p-4 bg-white rounded-md'>
            <h4 className="font">Credit Hour Remaining {remaining} hr</h4>
        </div>
    );
};

export default Cart;