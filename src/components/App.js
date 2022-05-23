import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Footer from './footer';
import SelectCoin from './SelectCoin';
// import { db } from './firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

const COIN_NAMES = [
  { value : "1INCH", name : "1INCH"},
  { value : "AAVE", name : "AAVE"},
  { value : "ADA", name : "ADA"},
  { value : "ALGO", name : "ALGO"},
  { value : "ANKR", name : "ANKR"},
  { value : "ARDR", name : "ARDR"},
  { value : "ATOM", name : "ATOM"},
  { value : "AXS", name : "AXS"},
  { value : "BAT", name : "BAT"},
  { value : "BCH", name : "BCH"},
  { value : "BTC", name : "BTC"},
  { value : "BTG", name : "BTG"},
  { value : "CHZ", name : "CHZ"},
  { value : "CVC", name : "CVC"},
  { value : "DOGE", name : "DOGE"},
  { value : "DOT", name : "DOT"},
  { value : "ELF", name : "ELF"},
  { value : "ENJ", name : "ENJ"},
  { value : "EOS", name : "EOS"},
  { value : "ETC", name : "ETC"},
  { value : "ETH", name : "ETH"},
  { value : "FLOW", name : "FLOW"},
  { value : "HBAR", name : "HBAR"},
  { value : "HIVE", name : "HIVE"},
  { value : "ICX", name : "ICX"},
  { value : "IOST", name : "IOST"},
  { value : "IOTA", name : "IOTA"},
  { value : "JST", name : "JST"},
  { value : "KAVA", name : "KAVA"},
  { value : "KNC", name : "KNC"},
  { value : "LINK", name : "LINK"},
  { value : "MANA", name : "MANA"},
  { value : "MATIC", name : "MATIC"},
  { value : "MBL", name : "MBL"},
  { value : "MFT", name : "MFT"},
  { value : "MTL", name : "MTL"},
  { value : "NEAR", name : "NEAR"},
  { value : "NEO", name : "NEO"},
  { value : "NU", name : "NU"},
  { value : "OMG", name : "OMG"},
  { value : "ONG", name : "ONG"},
  { value : "ONT", name : "ONT"},
  { value : "PLA", name : "PLA"},
  { value : "POLY", name : "POLY"},
  { value : "POWR", name : "POWR"},
  { value : "PUNDIX", name : "PUNDIX"},
  { value : "QTUM", name : "QTUM"},
  { value : "REP", name : "REP"},
  { value : "SAND", name : "SAND"},
  { value : "SC", name : "SC"},
  { value : "SOL", name : "SOL"},
  { value : "SRM", name : "SRM"},
  { value : "STMX", name : "STMX"},
  { value : "STORJ", name : "STORJ"},
  { value : "STPT", name : "STPT"},
  { value : "STRAX", name : "STRAX"},
  { value : "STX", name : "STX"},
  { value : "SXP", name : "SXP"},
  { value : "TFUEL", name : "TFUEL"},
  { value : "THETA", name : "THETA"},
  { value : "TRX", name : "TRX"},
  { value : "WAVES", name : "WAVES"},
  { value : "WAXP", name : "WAXP"},
  { value : "XEC", name : "XEC"},
  { value : "XEM", name : "XEM"},
  { value : "XLM", name : "XLM"},
  { value : "XRP", name : "XRP"},
  { value : "XTZ", name : "XTZ"},
  { value : "ZIL", name : "ZIL"},
  { value : "ZRX", name : "ZRX"},
]

function App() {
  const winsize = useWindowSize();
/*
  const [coins, setCoins] = useState([]);
  const coinCollectionRef = collection(db, 'coinData')
  useEffect(() => {
    const getCoins = async () => {
      const data = await getDocs(coinCollectionRef);
      setCoins(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getCoins();
  }, []);
*/
  return (
    <div 
      /* {...coins.map((coin) => {
        return(
          <div>
            {" "}
            console.log("Time" : {coin.ts_as_time}) 
          </div>
        );
      })}*/
      style={{
        backgroundColor: '#23333E',
        width: winsize.width,
        height: winsize.height,
        }}>
      <div
        style={{
          fontSize: 36,
          fontWeight: "800",
          color: "#CFDDE6", 
          textAlign: "center", 
          paddingTop: "60px",
          paddingBottom: "40px"}}
      >2022 Capstone Design simulation page</div>
      <div
        style={{
          fontSize: 18,
          fontWeight: "800",
          color: "#98A8B3", 
          textAlign: "right", 
          paddingRight: "7.5%",
          paddingBottom: "60px"}}
      >TEAM 오합지졸</div>

      <Chart/>

      <div style={{ display:"flex", width: winsize.width }}>
        <div style={{ width: "80%" }}/>
        <div
          style={{
            fontSize: 36,
            fontWeight: "800",
            color: "#61ABF2", 
            paddingRight: "7.5%",
            width: '70%',
            textAlign: "center"}}
        >총 수익률 : 0.7%</div>
        <SelectCoin
          style={{
            backgroundColor: "#FFFFFF",
            color: "#000000",
            justifyContent: "flex-end",
            padding: "5px 20px",
            fontSize: "14px",
            marginLeft: "auto",
            marginRight: "20px"
          }}
          options = {COIN_NAMES}
          default = {COIN_NAMES.BTC}
        ></SelectCoin>;
        <button
          style={{
            backgroundColor: "#bfd7ff",
            color: "#000000",
            justifyContent: "flex-end",
            padding: "5px 12px",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "6px",
            marginRight: "7.5%"
          }}>Run Simulation</button>
      </div>
    
      <Footer/>
    </div>
  );
}

// to make window reactive to user page
function useWindowSize(){
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(){
      setWindowSize({
        width: window.innerWidth - 30,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener*("resize", handleResize)
  }, []);

  return windowSize;
}

export default App;