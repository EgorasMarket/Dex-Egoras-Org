import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { DECIMAL_COUNT } from "../../../../../constants/config";

const MobileTrades = ({ current }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [current]);
  const { trades } = useSelector((state) => state.trades);

  const fillTrade = async () => {
    const arr = [
      {
        createdAt: "2024-07-15T12:00:00Z",
        address: "0x690B4cBEF361ccD9F2f4eAf0a47BE649b9910b7d",
        ticker: "EGAX-EGOD",
        type: "BUY",
        price: 1915.3,
        amount: 0.5,
      },
    ];

    // dispatch(setTrade([]));
  };
  useEffect(() => {
    fillTrade();
  }, []);
  const filteredTrades = trades
    .filter((t) => t.ticker === current?.pair)
    .slice(0, 25); // Filter and limit to first 25 trades
  const filledTrades = [
    ...filteredTrades,
    ...Array(25 - filteredTrades.length).fill({
      price: "--",
      amount: "--",
      type: "--",
      createdAt: "--",
    }),
  ]; // Fill remaining spots with placeholders
  return (
    <div className="ProductDetailPage_div_body_div2_body_area_trades">
      <div className="ProductDetailPage_div_body_div2_body_area_trades_head">
        <div className="ProductDetailPage_div_body_div2_body_area_trades_head_cont1">
          Time
        </div>
        <div className="ProductDetailPage_div_body_div2_body_area_trades_head_cont1_2">
          Price
        </div>
        <div className="ProductDetailPage_div_body_div2_body_area_trades_head_cont1_last">
          Amount
        </div>
      </div>

      {/* filter sort map */}
      {filledTrades.map((data, index) => {
        return (
          <div
            className="ProductDetailPage_div_body_div2_body_area_trades_body"
            key={data.id || `placeholder-${index}`} // Provide unique key for placeholders
          >
            <div className="ProductDetailPage_div_body_div2_body_area_trades_body_cont1">
              {data.createdAt !== "--"
                ? format(parseISO(data.createdAt), "h:mm:ss aa")
                : "--"}
            </div>
            <div
              className="ProductDetailPage_div_body_div2_body_area_trades_body_cont2"
              style={{
                color:
                  data?.type === "SELL"
                    ? "#ff445d"
                    : data?.type === "BUY"
                    ? "#12b66f"
                    : "fff",
              }}
            >
              {data.price !== "--"
                ? parseFloat(data?.price).toFixed(DECIMAL_COUNT)
                : "--"}
            </div>
            <div className="ProductDetailPage_div_body_div2_body_area_trades_body_cont3">
              {data.amount !== "--"
                ? parseFloat(data?.amount).toFixed(DECIMAL_COUNT)
                : "--"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileTrades;