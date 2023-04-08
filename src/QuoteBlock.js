import { useContext } from "react";
import { QuoteBlockContext } from "./QuoteBlockContext";
import Brand from "./components/Brand/Brand";
import "./QuoteBlock.css";

const QuoteBlock = () => {
  const { currentBrand, setCurrentBrand } = useContext(QuoteBlockContext);

  const handleBrandChange = (brand) => {
    setCurrentBrand(brand);
  };

  return (
    <div>
      <div className={`quote-block quote-block-${currentBrand}`}>
        <h2>
          <div>
            {currentBrand === "brandA" ? (
              <Brand
                title="Possit etimam"
                subTitle="Morbi eget efficitur nunc."
                description="A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained."
              />
            ) : (
              <Brand
                compBackground="blue"
                title="Possit etimam"
                subTitle="Morbi eget efficitur nunc."
                description="A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained."
              />
            )}
          </div>
        </h2>
      </div>
      <button
        className="brand-selector__button"
        onClick={() => handleBrandChange("brandA")}
      >
        Brand A
      </button>
      <button
        className="brand-selector__button"
        onClick={() => handleBrandChange("brandB")}
      >
        Brand B
      </button>
    </div>
  );
};

export default QuoteBlock;
