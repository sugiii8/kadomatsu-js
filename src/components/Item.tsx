import { useActiveItem } from "@/hooks/useActiveItem";
import { useMoney } from "@/hooks/useMoney";
import { useEffect, useRef, useState } from "react";

type ItemProps = {
  path: string;
  amount: number;
};

const Item: React.FC<ItemProps> = ({ path, amount }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isItemPurchased, setIsItemPurchased] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<null | number>(null);

  // interactJS
  const { enableItem, disableItem } = useActiveItem();

  // 支払い処理
  useMoney(paymentAmount);

  const handlePurchase = (amount: number) => {
    if (window.confirm("購入しますか？")) {
      setIsItemPurchased(true);
      setPaymentAmount(amount);

      const targetElement = itemRef.current as HTMLElement;
      enableItem(targetElement);
    }
  };

  const handleCancel = () => {
    if (window.confirm("売却しますか？")) {
      const targetElement = itemRef.current as HTMLElement;
      setIsItemPurchased(false);
      setPaymentAmount(-amount);
      disableItem(targetElement);
    }
  };

  return (
    <>
      <div className="my-4 mx-2">
        <div
          ref={itemRef}
          className={`cursor-pointer ${isItemPurchased ? "" : "opacity-20"}`}
        >
          <img className="block" src={path} alt="" width={100} />
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
            className={`block bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded ${
              isItemPurchased ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            購入
          </button>
        </div>

        <div className="flex justify-center">
          <button
            disabled={!isItemPurchased}
            onClick={() => {
              handleCancel();
            }}
            className={`block mt-2 bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded ${
              !isItemPurchased ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            売却
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
