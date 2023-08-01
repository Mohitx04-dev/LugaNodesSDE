import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import CoinsList from "../Table";
import { useEffect, useState } from "react";

function Home() {
    const [Coins, setCoins] = useState(new Map())
    const url = "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin"
    useWebSocket(url, {
        onOpen: (data) => {
          console.log(data);
        },
        onMessage: (data) => {
           const map = JSON.parse(data.data)
           updateMap(map)
        }
    })
    const updateMap = (map)=>{
        setCoins((prev)=>{
            const newMap = new Map(prev)
            for(const [key,value] of Object.entries(map)){
                newMap.set(key,value)
            }
            return newMap;
        })
    }
       return <>
        <div className="container mb-2">
         <CoinsList Coins = {Coins}/>
        </div>
    </>
}
export default Home;