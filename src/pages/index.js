import React from 'react';

const MyComponent = () => {
    return (
        <div>
            <div className="border-t border-accents-2 bg-cyan">
                <ul className="py-3">
                    <li className="flex justify-between py-1">
                        <span>Subtotal</span>
                    </li>
                    <li className="flex justify-between py-1">
                        <span>Taxes</span>
                        <span>Calculated at checkout</span>
                    </li>
                    <li className="flex justify-between py-1">
                        <span>Estimated Shipping</span>
                        <span className="font-bold tracking-wide">FREE</span>
                    </li>
                </ul>
                <div className="flex justify-between border-t border-accents-2 py-3 font-bold mb-10">
                    <span>Total</span>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
