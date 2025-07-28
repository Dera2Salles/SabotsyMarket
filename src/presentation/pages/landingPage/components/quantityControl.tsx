import { Button } from "@/components/ui/button";
import type { ProductEntity } from "@/domain/Entities/Product";
import { MdAdd, MdRemove } from "react-icons/md";

interface QuantityControlProps {
  quantity: number;
  item: ProductEntity;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  item,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className="rounded-full border-black hover:border-white"
        onClick={onDecrease}
      >
        <MdRemove />
      </Button>
      <span className="font-bold text-xl">{quantity}</span>
      <Button
        size="icon"
        variant="outline"
        className="rounded-full border-black hover:border-white"
        onClick={onIncrease}
        disabled={quantity == item.unit ? true : false}
      >
        <MdAdd />
      </Button>
    </div>
  );
};
