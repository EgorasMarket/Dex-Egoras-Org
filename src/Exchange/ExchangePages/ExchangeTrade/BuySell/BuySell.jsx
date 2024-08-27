import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingCart01Icon,
  ArrowDown02Icon,
  ArrowUp02Icon,
} from "hugeicons-react";
import { Slider } from "antd";
import { Select } from "antd";
import { ConfigProvider } from "antd";

import {
  useWriteContract,
  useReadContract,
  useAccount,
  useWatchContractEvent,
} from "wagmi";
import contractAbi from "../../../../web3/contracts/Egomart.json";
import "./index.css";
import { ethers, formatEther, parseEther } from "ethers";

import useFetchBalance from "../../../../hooks/useFetchBalance";
import abi from "../../../../web3/contracts/Egomart.json";
import { INSERT_NEW_ORDER } from "../../../../services/trade.services";
import { useDispatch, useSelector } from "react-redux";
import { DECIMAL_COUNT } from "../../../../constants/config";
import { updateOrder } from "../../../../features/orders/OrderSlice";
const BuySell = ({ payload }) => {
  const dispatch = useDispatch();
  const {
    data: hash,
    writeContract,
    isPending: loading,
    isError,
    isSuccess,
    error,
    writeContractAsync,
  } = useWriteContract();
  const { address } = useAccount();

  const [selectedValue, setSelectedValue] = useState("Limit");
  const [price, setPrice] = useState("10.00");
  const [amount, setAmount] = useState("");
  const [activeBtn, setActiveBtn] = useState("buy");
  const [buyOffersArr, setBuyOffersArr] = useState([]);
  const [balanceOf, setBalance] = useState(0);

  useEffect(() => {
    console.log("switch");
  }, [activeBtn]);

  const aa = useFetchBalance(
    activeBtn === "buy" ? payload?.tickerB : payload?.tickerA
  );

  // console.log(formatEther(aa), "aa balance");

  const marks = {
    0: "0%",
    25: "25%",
    50: "50%",
    75: "75%",
    100: "100%",
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log(`selected ${value}`);
  };

  const sliderChange = (value) => {
    setAmount(parseFloat(value).toFixed(3));
  };

  //  price change
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  //  amount change
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // calculating the total
  const parsedPrice = parseFloat(price);
  const parsedAmount = parseFloat(amount);
  const Total = parsedPrice * parsedAmount;

  const toggleActiveBtn = async (e) => {
    setActiveBtn(e.currentTarget.id);
  };

  const setOrder = () => {
    // const quantity =
    const marketType = activeBtn === "sell" ? true : false;
    try {
      writeContract({
        address: import.meta.env.VITE_CONTRACT_ADDRESS,
        abi: contractAbi,
        functionName: "matchingEngine",
        args: [
          payload?.pair,
          [
            marketType,
            address,
            parseEther(price).toString(),
            parseEther(amount).toString(),
          ],
        ],
      });
    } catch (error) {
      console.log(error, "error");
    }
  };

  useWatchContractEvent({
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    abi,
    eventName: "OrderPlaced",
    async onLogs(logs) {
      console.log("New Order placed!", logs);

      console.log(formatEther(logs[0].args.value), "formatted value");

      //construct payload and dispatch to store

      const data = {
        id: parseInt(formatEther(logs[0].args?.orderId).toString()),
        price: parseFloat(formatEther(logs[0].args.value)).toFixed(
          DECIMAL_COUNT
        ),
        indexId: parseInt(formatEther(logs[0].args?.orderId)),
        ticker: logs[0].args?.ticker,
        type: logs[0].args?.isSale === false ? "BUY" : "SELL",
        amount: parseFloat(formatEther(logs[0]?.args?.numberOfShares)).toFixed(
          DECIMAL_COUNT
        ),
        address: logs[0].args?.userAddress,
        status: "OPEN", //ENUM OPEN, CANCELLED,COMPLETED,
        createdAt: new Date(),
      };
      console.log(data, "prepared response");

      dispatch(updateOrder(data));

      let payload = {
        userAddress: data.address,
        orderType: data.type,
        amount: data?.price,
        numberOfShares: data.amount,
        transHash: logs[0].transactionHash,
        time: logs[0].args?.time.toString().split("n")[0],
        ticker: data?.ticker,
        orderId: data?.indexId,
      };
      console.log(payload, "to be sent to backend");

      //after pushing the data to the store,
      //post to backend to correlate record
      const res = await INSERT_NEW_ORDER(payload);
      console.log(res, "to backend");
    },
  });
  return (
    <div>
      <div className="buy_modal_div_div1_cont1">
        <div className="buy_modal_div_div1_cont1_btns">
          <div
            id="buy"
            className={
              activeBtn === "buy"
                ? "buy_modal_div_div1_cont1_btns_btn1 buy_btn"
                : "buy_modal_div_div1_cont1_btns_btn1_buy"
            }
            onClick={toggleActiveBtn}
          >
            <div className="buy_modal_div_div1_cont1_btns_btn1_Span">Buy</div>
          </div>
          <div
            id="sell"
            className={
              activeBtn === "sell"
                ? "buy_modal_div_div1_cont1_btns_btn1 sell_btn"
                : "buy_modal_div_div1_cont1_btns_btn1_sell"
            }
            onClick={toggleActiveBtn}
          >
            <div className="buy_modal_div_div1_cont1_btns_btn1_Span">Sell</div>
          </div>
        </div>
        <div className="buy_modal_div_div1_cont1_body">
          <div className="buy_modal_div_div1_cont1_body_cont1_head1">
            <div className="buy_modal_div_div1_cont1_body_cont1_head1_txt1">
              Avbl
            </div>
            <div className="buy_modal_div_div1_cont1_body_cont1_head1_txt2">
              {aa}
              {activeBtn === "buy"
                ? payload?.pair?.split("-")[1]
                : payload?.pair?.split("-")[0]}
            </div>
          </div>
          <div className="buy_modal_div_div1_cont1_body_1">
            {" "}
            <div className="market_select_input_div">
              <Select
                value={selectedValue}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "45px",
                  fontSize: "14px",
                }}
                options={[
                  {
                    value: "limit",
                    label: "Limit",
                  },
                  {
                    value: "market",
                    label: "Market",
                  },
                ]}
              />
            </div>
            {selectedValue === "market" ? (
              <label
                htmlFor="price"
                className="buy_modal_div_div1_cont1_body_1_label"
              >
                <p className="buy_modal_div_div1_cont1_body_para">
                  <div className="buy_modal_div_div1_cont1_body_para1">
                    Price
                  </div>
                </p>
                <input
                  name="price"
                  id="price"
                  type="number"
                  autocapitalize="off"
                  autocorrect="off"
                  autocomplete="off"
                  spellcheck="false"
                  className="buy_modal_div_div1_cont1_body_1_label_input"
                  value={price}
                />
              </label>
            ) : (
              <label
                htmlFor="price"
                className="buy_modal_div_div1_cont1_body_1_label"
              >
                <p className="buy_modal_div_div1_cont1_body_para">
                  <div className="buy_modal_div_div1_cont1_body_para1">
                    Price
                  </div>{" "}
                </p>
                <input
                  name="price"
                  id="price"
                  type="number"
                  autocapitalize="off"
                  autocorrect="off"
                  autocomplete="off"
                  spellcheck="false"
                  className="buy_modal_div_div1_cont1_body_1_label_input"
                  value={price}
                  onChange={handlePriceChange}
                />
              </label>
            )}
            <div className="est_val">
              {/* {selectedValue === "market" ? null : "≈0.00 USD"} */}
            </div>
            <label htmlFor="" className="buy_modal_div_div1_cont1_body_1_label">
              <p className="buy_modal_div_div1_cont1_body_para">
                <div className="buy_modal_div_div1_cont1_body_para1">
                  Amount
                </div>
                <div className="buy_modal_div_div1_cont1_body_para1">
                  {payload?.pair?.split("-")[0]}
                </div>
              </p>
              <input
                type="number"
                autocapitalize="off"
                autocorrect="off"
                autocomplete="off"
                spellcheck="false"
                className="buy_modal_div_div1_cont1_body_1_label_input"
                onChange={handleAmountChange}
                value={amount}
              />
            </label>
            <div className="amount_slider">
              <ConfigProvider
                theme={{
                  components: {
                    Slider: {
                      dotActiveBorderColor: "#12b66f",
                      handleActiveColor: "#12b66f",
                      handleActiveOutlineColor: "#12b66f",
                      handleColor: "#12b66f",
                      trackBg: "#12b66f",
                      trackHoverBg: "#12b66f",
                    },
                  },
                }}
              >
                <Slider
                  marks={marks}
                  defaultValue={0}
                  className="amount_slider_input"
                  onChange={sliderChange}
                />
              </ConfigProvider>
            </div>
            {selectedValue === "market" ? null : (
              <label
                htmlFor=""
                className="buy_modal_div_div1_cont1_body_1_label"
              >
                <p className="buy_modal_div_div1_cont1_body_para">
                  <div className="buy_modal_div_div1_cont1_body_para1">
                    Total
                  </div>{" "}
                  <div className="buy_modal_div_div1_cont1_body_para1">
                    {payload?.pair?.split("-")[1]}
                  </div>
                </p>
                <input
                  type="number"
                  autocapitalize="off"
                  autocorrect="off"
                  autocomplete="off"
                  spellcheck="false"
                  className="buy_modal_div_div1_cont1_body_1_label_input"
                  value={Total}
                />
              </label>
            )}
          </div>

          <div className="buy_modal_div_div1_cont1_body_button_div">
            {activeBtn === "buy" ? (
              <>
                {selectedValue === "market" ? (
                  <>
                    <button className="ProductDetailPage_div_body_div2_div7_btn">
                      Buy
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={setOrder}
                      className="ProductDetailPage_div_body_div2_div7_btn"
                    >
                      Buy
                      {hash && <p> laoding...</p>}
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {selectedValue === "market" ? (
                  <button className="ProductDetailPage_div_body_div2_div7_btn_sell">
                    Sell
                  </button>
                ) : (
                  <button
                    onClick={setOrder}
                    className="ProductDetailPage_div_body_div2_div7_btn_sell"
                  >
                    Sell
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
