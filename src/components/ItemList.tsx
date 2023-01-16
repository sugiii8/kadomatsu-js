import itemPaths from "@/assets/items.json";
import Item from "@/components/Item";

type ItemProps = React.ComponentProps<typeof Item>;

const ItemList: React.FC = () => {
  const items = itemPaths.items.map((item, index) => {
    const path = item.path;
    const amount = item.amount;
    const props: ItemProps = {
      path,
      amount,
    };
    return <Item key={index} {...props}></Item>;
  });

  return (
    <>
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2">
        素材リスト
      </h2>
      <div className="flex flex-wrap overflow-y-scroll border">
        {items}

        <div
          className="mt-4 mx-auto bg-lime-50"
          style={{
            width: "1200px",
            height: "1000px",
          }}
        ></div>
      </div>
    </>
  );
};

export default ItemList;
