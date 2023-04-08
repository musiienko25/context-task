import QuoteBlock from "./QuoteBlock";
import QuoteBlockProvider from "./QuoteBlockContext";

function App() {
  return (
    <div className="App">
      <QuoteBlockProvider>
        <QuoteBlock />
      </QuoteBlockProvider>
    </div>
  );
}

export default App;
