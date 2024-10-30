import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Anty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Anty</h2>
            <section className="flex">
                <Cousin name='Rashed'></Cousin>
                <Cousin name='Rubiya'></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>Add 1000</button>
        </div>
    );
};

export default Anty;