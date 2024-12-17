import React, { useEffect, useState } from "react";
import "./index.css";
import { userOpenOrders } from "../../../../Components/Static";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useWriteContract } from "wagmi";
import { format } from "date-fns";
import contractAbi from "../../../../web3/contracts/Egomart.json";
import { formatEther, parseEther } from "ethers";
// import { toast, ToastContainer } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { cancelOne } from "../../../../features/orders/OrderSlice";
import ClipLoader from "react-spinners/ClipLoader";
import OrdersModel from "./OrdersModel";

const OpenOrders = ({ ticker, ticker_img }) => {
  const dispatch = useDispatch();

  const { address } = useAccount();
  const { orders } = useSelector((state) => state.orders);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let arr = orders.filter(
      (order) =>
        order.address === address &&
        order.status === "OPEN" &&
        order.ticker === ticker
    );
    setPositions(arr);
  }, [ticker, orders]);

  console.log(ticker);
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
        {positions.map((data) => {
          return (
            <OrdersModel data={data} ticker_img={ticker_img} ticker={ticker} />
          );
        })}
      </div>
      <Toaster />
    </div>
  );
};

export default OpenOrders;
