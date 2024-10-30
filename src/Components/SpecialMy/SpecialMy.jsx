import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const SpecialMy = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h3>Special Person</h3>
            <p>Has:{asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default SpecialMy;