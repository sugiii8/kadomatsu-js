import ItemList from "./ItemList";
import { useRecoilState } from "recoil";
import { moneyState } from "@/atoms/money";
import "@/styles/app.css";

const App: React.FC = () => {
  const [money, setMoney] = useRecoilState(moneyState);

  return (
    <>
      <div className="container mx-auto p-4 font-serif">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">門松js</h1>
        <div>{money}pt</div>
        <div className="App">
          <ItemList></ItemList>
        </div>
      </div>
    </>
  );
};

export default App;
