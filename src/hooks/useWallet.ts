import { moneyState } from "@/atoms/money";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export const useWallet = () => {
  const [money, setMoney] = useRecoilState(moneyState);
  const payMoney = useCallback(
    (paymentMoney: number) => {
      console.log("mononon", money);
      const resultMoney = money - paymentMoney;
      setMoney(resultMoney);
    },
    [money]
  );

  return { payMoney };
};
