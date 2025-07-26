import { Button } from "@/components/ui/button";
import { MdAdd, MdRemove } from "react-icons/md";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className="rounded-full"
        onClick={onDecrease}
      >
        <MdRemove />
      </Button>
      <span className="font-bold text-lg">{quantity}</span>
      <Button
        size="icon"
        variant="outline"
        className="rounded-full"
        onClick={onIncrease}
      >
        <MdAdd />
      </Button>
    </div>
  );
};
