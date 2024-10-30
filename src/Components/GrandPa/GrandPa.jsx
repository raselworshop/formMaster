import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext();
export const MoneyContext = createContext(1000)

const GrandPa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'Diamond'
    return (
        <div className="GrandPa">
            <h2>Grand Papa</h2>
            <p>Net Money:{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='Gold'>
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle asset={asset}></Uncle>
                        <Anty></Anty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;

/**
 * To passing data with Context API:::
 * 1.   Create a Context and export it.
 * 2.   Add Provider for the context with a value could be anything.
 * 3.   useContext to access value in the Context API 
 */