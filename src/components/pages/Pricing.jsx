import React from "react";
import PricingCard from "../UI/PricingCard";
import { pricingCardData } from "../../data/cardData";

function Pricing() {
  return (
    <>
      <div className="bg-green-800">
        <div className="p-5">
          <h1 className="text-4xl font-bold">
            Choose the Plan That’s Right for You
          </h1>
          <p className="p-2">
            Unlimited games, one subscription. Pick the plan that fits your
            gaming style.
          </p>
        </div>

        <div className="p-5"> 
            <h1 className="text-4xl font-bold">Plans</h1>

            <div className="flex gap-5 w-full justify-around my-10">
                {
                    pricingCardData.map(el=>{
                        return (<PricingCard plan={el.plan} price={el.price} feature={el.feature} note={el.note}/>)
                    })
                }
            </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
