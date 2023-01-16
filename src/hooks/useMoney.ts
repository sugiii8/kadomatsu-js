import { moneyState } from "@/atoms/money";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useMoney = (paymentMoney: number | null) => {
  const [money, setMoney] = useRecoilState(moneyState);
  useEffect(() => {
    if (!paymentMoney) {
      return;
    }

    const resultMoney = money - paymentMoney;
    setMoney(resultMoney);
  }, [paymentMoney]);
};
