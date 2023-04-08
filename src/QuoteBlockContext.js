import { createContext, useState } from "react";

export const QuoteBlockContext = createContext();

const QuoteBlockProvider = ({ children }) => {
  const [currentBrand, setCurrentBrand] = useState("brandA");

  return (
    <QuoteBlockContext.Provider value={{ currentBrand, setCurrentBrand }}>
      {children}
    </QuoteBlockContext.Provider>
  );
};

export default QuoteBlockProvider;
