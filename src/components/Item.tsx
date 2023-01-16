import { useInteract } from "@/hooks/useInteract";
import { useMoney } from "@/hooks/useMoney";
import { useRef, useState } from "react";

type ItemProps = {
  path: string;
  amount: number;
};

const Item: React.FC<ItemProps> = ({ path, amount }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isItemPurchased, setIsItemPurchased] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<null | number>(null);

  // interactJS
  useInteract(itemRef, isItemPurchased);

  // 支払い処理
  useMoney(paymentAmount);

  const handlePurchase = (amount: number) => {
    if (window.confirm("購入しますか？")) {
      setIsItemPurchased(true);
      setPaymentAmount(amount);
    }
  };

  return (
    <>
      <div>
        <div
          ref={itemRef}
          className={`p-2 m-1 cursor-pointer ${
            isItemPurchased ? "" : "opacity-20"
          }`}
        >
          <div>
            <img src={path} alt="" width={100} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center">{amount}</div>
        </div>
        <div className="flex justify-center">
          <button
            disabled={isItemPurchased}
            onClick={() => {
              handlePurchase(amount);
            }}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              isItemPurchased ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            購入
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
