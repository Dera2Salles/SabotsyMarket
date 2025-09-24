import { MdDelete, MdEdit } from 'react-icons/md';
import { useDashboardContext } from '../context/useDashboardContext';
import { Button } from '@/components/ui/button';

interface MenuActionProps {
  productId: string;
}

export const MenuAction: React.FC<MenuActionProps> = ({ productId }) => {
  const { openEditModal, deleteProduct } = useDashboardContext();
  return (
    <div className=" flex gap-3">
      <Button
        onClick={openEditModal}
        size="icon"
        variant="outline"
        className="rounded-full size-8 cursor-pointer hover:text-white hover:bg-green-700 border-transparent text-green-700"
      >
        <div className=" px-1 py-0.5">
          <MdEdit />
        </div>
      </Button>
      <Button
        onClick={() => deleteProduct(productId)}
        size="icon"
        variant="outline"
        className="rounded-full size-8 cursor-pointer border-transparent text-red-600 hover:bg-red-600 hover:text-white"
      >
        <div className=" px-1 py-0.5">
          <MdDelete />
        </div>
      </Button>
    </div>
  );
};
