import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "../../../Components/Modal/Modal";

const Earn = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [isLoading2, setIsLoading2] = useState(false);
  const [redeemModal, setRedeemModal] = useState(false);

  const referralLeaderBoard = [
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
    {
      id: 0,
      address: "0xa5ff0Fd1a84D004649E97b465779499546654feD",
      Vol24h: "1,000,000",
      Reward24h: "100,000",
      allTimeVol: "10,000,000",
      allTimeReward: "1,000,000",
    },
  ];

  const containerRef = useRef(null);
  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      container.scrollTop = container.scrollHeight;
      // Disable smooth scrolling after the animation is complete
      container.addEventListener("scroll", () => {
        container.style.scrollBehavior = "auto";
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [itemsToShow]);

  const displayNextItems = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 10);
      setIsLoading2(false);
    }, 2000); // Adjust the delay duration as needed (e.g., 1000 milliseconds or 1 second)
  };
  const ToggleRedeemModal = () => {
    setRedeemModal(!redeemModal);
  };

  return (
    <div className="earn_div">
      <section className="earn_div_section1">
        <div className="earn_div_section1_container">
          <div className="earn_div_section1_area">
            <div className="earn_div_section1_area1">
              <div className="earn_div_section1_area1_cont1">
                <div className="earn_div_section1_area1_cont1_title">
                  ETH Staking
                </div>
                <div className="earn_div_section1_area1_cont1_para">
                  Stake to receive BETH for liquidity at 1:1 ratio and earn
                  daily BETH rewards
                </div>
              </div>
              <div className="earn_div_section1_area1_cont2">
                <img
                  src="/img/earn_sec_img.webp"
                  alt=""
                  className="earn_div_section1_area1_cont2img"
                />
              </div>
            </div>
            <div className="earn_div_section1_area2">
              <div className="earn_div_section1_area2_title">
                Accumulated Rewards
              </div>
              <div className="earn_div_section1_area2_cont_area">
                <div className="earn_div_section1_area2_cont_area_1">
                  <div className="earn_div_section1_area2_para">
                    Plt Rewards
                  </div>
                  <div className="earn_div_section1_area2_amount">
                    0.00
                    <span className="earn_div_section1_area2_amount_span">
                      plt
                    </span>
                  </div>
                </div>
                <div className="earn_div_section1_area2_cont_area_1">
                  <div className="earn_div_section1_area2_para">
                    Egax Rewards
                  </div>
                  <div className="earn_div_section1_area2_amount">
                    0.00
                    <span className="earn_div_section1_area2_amount_span">
                      egax
                    </span>{" "}
                  </div>
                </div>
              </div>

              <div className="earn_div_section1_area2_btns">
                <button className="earn_div_section1_area2_btns_btn1">
                  Earn Now
                </button>
                <button
                  className="earn_div_section1_area2_btns_btn2"
                  onClick={ToggleRedeemModal}
                  disabled={redeemModal}
                >
                  {redeemModal ? (
                    <>
                      loading <ClipLoader color="#717171" size={10} />
                    </>
                  ) : (
                    <>Redeem</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      <section className="earn_div_section2">
        <div className="earn_div_section2_container">
          <div className="earn_div_section2_area1">
            <div className="earn_div_section2_area1_title">How It Works</div>
            {/* <div className="earn_div_section2_area1_title_span">
              <span className="earn_div_section2_area1_title_span_1">
                {" "}
                <div className="earn_div_section2_area1_title_span_1_div1">
                  1
                </div>
                <div className="earn_div_section2_area1_title_span_1_div2"></div>
              </span>
              <span className="earn_div_section2_area1_title_span_1">
                {" "}
                <div className="earn_div_section2_area1_title_span_1_div1">
                  2
                </div>
                <div className="earn_div_section2_area1_title_span_1_div2"></div>
              </span>
              <span className="earn_div_section2_area1_title_span_2">
                {" "}
                <div className="earn_div_section2_area1_title_span_2_div1">
                  3
                </div>
              </span>
            </div> */}
            <div className="earn_div_section2_area1_area">
              <div className="earn_div_section2_area1_area_1">
                <span className="earn_div_section2_area1_title_span_1">
                  {" "}
                  <div className="earn_div_section2_area1_title_span_1_div2_hidden"></div>
                  <div className="earn_div_section2_area1_title_span_1_div1">
                    1
                  </div>
                  <div className="earn_div_section2_area1_title_span_1_div2"></div>
                </span>
                <div className="earn_div_section2_area1_area_1_body">
                  <div className="earn_div_section2_area1_area_1_title">
                    Stake ETH
                  </div>
                  <div className="earn_div_section2_area1_area_1_para">
                    Deposit and stake ETH, receive BETH 1:1 for extra liquidity
                    2 Earn daily rewards
                  </div>
                </div>
              </div>
              <div className="earn_div_section2_area1_area_1">
                <span className="earn_div_section2_area1_title_span_1">
                  {" "}
                  <div className="earn_div_section2_area1_title_span_1_div2"></div>
                  <div className="earn_div_section2_area1_title_span_1_div1">
                    2
                  </div>
                  <div className="earn_div_section2_area1_title_span_1_div2"></div>
                </span>
                <div className="earn_div_section2_area1_area_1_body">
                  <div className="earn_div_section2_area1_area_1_title">
                    Stake ETH
                  </div>
                  <div className="earn_div_section2_area1_area_1_para">
                    Deposit and stake ETH, receive BETH 1:1 for extra liquidity
                    2 Earn daily rewards
                  </div>
                </div>
              </div>
              <div className="earn_div_section2_area1_area_3">
                <span className="earn_div_section2_area1_title_span_1">
                  {" "}
                  <div className="earn_div_section2_area1_title_span_1_div2"></div>
                  <div className="earn_div_section2_area1_title_span_1_div1">
                    3
                  </div>
                  <div className="earn_div_section2_area1_title_span_1_div2_hidden"></div>
                </span>
                <div className="earn_div_section2_area1_area_1_body">
                  <div className="earn_div_section2_area1_area_1_title">
                    Stake ETH
                  </div>
                  <div className="earn_div_section2_area1_area_1_para">
                    Deposit and stake ETH, receive BETH 1:1 for extra liquidity
                    2 Earn daily rewards
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          <div className="earn_div_section2_area2">
            <div className="earn_div_section2_area2_title">Leaderboard</div>
            <div className="earn_div_section2_area2_area">
              <div className="earn_div_section2_area2_area_header">
                <div className="earn_div_section2_area2_area_header_cont1">
                  User
                </div>
                <div className="earn_div_section2_area2_area_header_cont2">
                  24h Volume
                </div>
                <div className="earn_div_section2_area2_area_header_cont2">
                  24h Amount Earned
                </div>
                <div className="earn_div_section2_area2_area_header_cont2">
                  Total Volume
                </div>
                <div className="earn_div_section2_area2_area_header_cont3">
                  Total Amount Earned
                </div>
              </div>
              <div className="earn_div_section2_area2_area_body">
                {referralLeaderBoard
                  .slice(0, itemsToShow)
                  .sort((a, b) => b.points - a.points)
                  .map((data, index) => (
                    <div className="earn_div_section2_area2_area_body_cont1">
                      <div className="earn_div_section2_area2_area_body_cont1_div1">
                        <span className="earn_div_section2_area2_area_body_cont1_div1_position">
                          1st
                        </span>{" "}
                        @0x3de...5634
                      </div>
                      <div className="earn_div_section2_area2_area_body_cont1_div2">
                        10,000 Egod
                      </div>
                      <div className="earn_div_section2_area2_area_body_cont1_div2">
                        1,000,000 plt
                      </div>
                      <div className="earn_div_section2_area2_area_body_cont1_div2">
                        100,000 Egod
                      </div>
                      <div className="earn_div_section2_area2_area_body_cont1_div_last">
                        100,000 plt
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {itemsToShow < referralLeaderBoard.length && (
              <button
                className="depositDiv_cont4_btn"
                onClick={displayNextItems}
                disabled={isLoading2 ? true : false}
              >
                {isLoading2 ? (
                  <ClipLoader color="#6ba28b" size={18} />
                ) : (
                  "  Load More"
                )}
              </button>
            )}
          </div>
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          {/* ====== */}
          <div className="earn_div_section2_area3">
            <div className="homeDiv_section2_area_head">
              {/* <div className="homeDiv_section2_area_head_tag">FAQ</div> */}
              <div className="homeDiv_section2_area_head_title">
                Frequently Asked Questions
              </div>
              {/* <div className="homeDiv_section2_area_head_txt">
                Why should control mean slow & complex?
              </div> */}
            </div>
            <div className="homeDiv_section6_area_body">
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What is tokenization?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Tokenization is the process of converting rights to an asset
                    into a digital token on a blockchain. This allows for the
                    secure, transparent, and decentralized ownership and
                    transfer of assets.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">What is EGAX?</summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    $EGAX Coin is the native utility token of the Egochain
                    blockchain, serving a crucial role within the Egochain
                    ecosystem. Holders of $EGAX can utilize the token to access
                    the Egochain suite, settle transactions on the network, and
                    participate in governance through voting. Additionally, on
                    the Egochain, $EGAX can be used to mint EgoUSD. This enables
                    users to acquire Egoras physical products and gain
                    fractional ownership of tokenized assets. Alternatively,
                    users may stake their $EGAX with validators to help secure
                    the Egochain network.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">What is EgoUSD?</summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    EgoUSD is Egoras’s premier stablecoin, built on the
                    Egochain. It is the second most significant product in the
                    Egochain ecosystem and is crucial to the success of the
                    Egomart platform. In essence, EgoUSD will serve as the
                    backbone of the Egomart ecosystem. All EgoUSD tokens will be
                    distributed to bonders for their necessary needs and
                    actions.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What is the total Supply of $EGAX?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    The total supply of Egochain Coin is fixed at 10,000,000
                    $EGAX (ten million) to ensure scarcity. The tokens will be
                    released in vested phases and will be fully vested over a
                    period of 20 years.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What Tokenized Assets Can Be Traded on Egomart?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    On Egomart, tokenized assets represent ownership of
                    real-world assets (RWAs) such as real estate, physical
                    properties, artwork, collectibles, and other valuable items.
                    Through our Egochain blockchain, Egomart offers a unique and
                    tamper-proof method of verifying ownership of these assets,
                    facilitating easier, decentralized, and transparent buying,
                    selling, and trading.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Who Built Egochain?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Egochain was developed by Egoras, a clean-tech pioneer with
                    over 400 employees. Founded in 2018, Egoras aims to drive a
                    large-scale shift towards sustainable energy in emerging
                    markets.
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      {/* ==== */}
      <section className="earn_div_section3">
        <div className="earn_div_section3_container">
          <div className="earn_div_section3_area">
            <img
              src="/img/earn_sec3_img.webp"
              alt=""
              className="earn_div_section3_area_img"
            />
            <div className="earn_div_section3_area_title">
              Join the new Ethereum ecosystem. Be a part of crypto history.
            </div>
            <div className="earn_div_section3_area_btn_div">
              <button className="earn_div_section3_area_btn">Earn Now</button>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={redeemModal}
        closeModal={ToggleRedeemModal}
        title={"Redeem"}
      >
        <div className="redeemModal_div">
          <div className="redeemModal_div_1">
            <div className="redeemModal_div_1_title">Available to claim</div>
            <div className="redeemModal_div_1_body">
              <div className="redeemModal_div_1_body_cont1">
                <img
                  src="/img/pluto_swap_icon.png"
                  alt=""
                  className="redeemModal_div_1_body_cont1_img"
                />
                PLT
              </div>
              <div className="redeemModal_div_1_body_cont2">100,000</div>
            </div>
          </div>
          <div className="redeemModal_div_1">
            <div className="redeemModal_div_1_title">Available to claim</div>
            <div className="redeemModal_div_1_body">
              <div className="redeemModal_div_1_body_cont1">
                <img
                  src="/img/egax_logo.png"
                  alt=""
                  className="redeemModal_div_1_body_cont1_img"
                />
                EGAX
              </div>
              <div className="redeemModal_div_1_body_cont2">100</div>
            </div>
          </div>
          <div className="redeemModal_div_1">
            <div className="redeemModal_div_1_title">Destination Wallet</div>
            <div className="redeemModal_div_1_body">
              <div
                className="redeemModal_div_1_body_cont2_input
              "
              >
                0xa5ff0Fd1a84D004649E97b465779499546654feD
              </div>
            </div>
          </div>

          <button
            className="depositDiv_cont4_btn"
            // onClick={displayNextItems}
            // disabled={isLoading2 ? true : false}
          >
            Claim Rewards
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Earn;