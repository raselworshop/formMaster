import Friend from "../Friend/Friend";
import SpecialMy from "../SpecialMy/SpecialMy";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <scet className="flex">
               {asset && <SpecialMy asset={asset}></SpecialMy>}
               {name === 'Rubiya' && <Friend></Friend>}
            </scet>
        </div>
    );
};

export default Cousin;