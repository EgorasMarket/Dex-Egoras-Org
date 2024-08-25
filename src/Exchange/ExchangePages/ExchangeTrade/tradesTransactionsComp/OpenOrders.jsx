import React from "react";
import "./index.css";
import { userOpenOrders } from "../../../../Components/Static";

const OpenOrders = () => {
  return (
    <div className="TradesDiv">
      <div className="TradesDiv_head">
        <div className="TradesDiv_head_cont1">Time</div>
        <div className="TradesDiv_head_cont1">Market/Action</div>
        <div className="TradesDiv_head_cont1">Type</div>
        <div className="TradesDiv_head_cont1">Avg.Price</div>
        <div className="TradesDiv_head_cont1">Amount</div>
        <div className="TradesDiv_head_cont1">Total</div>
        <div className="TradesDiv_head_cont1">Filled Amount</div>
        <div className="TradesDiv_head_cont1">Unfilled Amount</div>
        <div className="TradesDiv_head_cont1_last"></div>
      </div>
      <div className="TradesDiv_body">
        {userOpenOrders.map((data) => (
          <div className="TradesDiv_body_cont">
            <div className="TradesDiv_body_cont1">Aug 1st, 2024 / 10:00 pm</div>
            <div className="TradesDiv_body_cont1">
              <img src={data.img} alt="" className="TradesDiv_body_cont1_img" />
              <div className="TradesDiv_body_cont1_cont">
                <div className="TradesDiv_body_cont1_cont_div1">
                  {data.pair}
                </div>
                <div className="TradesDiv_body_cont1_cont_div2">
                  <span
                    className={
                      data.action === "buy"
                        ? "TradesDiv_body_cont1_span_type_buy"
                        : "TradesDiv_body_cont1_span_type_sell"
                    }
                  >
                    {" "}
                    {data.action}
                  </span>
                </div>
              </div>
            </div>
            <div className="TradesDiv_body_cont1">{data.type}</div>
            <div className="TradesDiv_body_cont1">{data.price}</div>
            <div className="TradesDiv_body_cont1">
              {data.baseAmount}{" "}
              <span className="TradesDiv_body_cont1_span">EGOD</span>
            </div>
            <div className="TradesDiv_body_cont1">
              {data.total}{" "}
              <span className="TradesDiv_body_cont1_span">{data.token}</span>
            </div>
            <div className="TradesDiv_body_cont1">
              {data.filled}{" "}
              <span className="TradesDiv_body_cont1_span">{data.token}</span>
            </div>
            <div className="TradesDiv_body_cont1">
              {parseFloat(data.total - data.filled).toFixed(2)}{" "}
              <span className="TradesDiv_body_cont1_span">{data.token}</span>
            </div>
            <div className="TradesDiv_body_cont1_last">
              <button className="TradesDiv_body_cont1_last_btn">Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenOrders;
