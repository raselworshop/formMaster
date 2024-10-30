import SpecialMy from "../SpecialMy/SpecialMy";

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <SpecialMy asset={asset}></SpecialMy>
            </section>
        </div>
    );
};

export default MySelf;