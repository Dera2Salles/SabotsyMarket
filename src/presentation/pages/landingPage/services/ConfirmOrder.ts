import { orderRepository } from '@/injection';
import { toast } from 'sonner';

export const confirmOrderService = async () => {
  const result = await orderRepository.confirmOrder();
  if (result.status === 'success') {
    toast.success('Succes', {
      description: 'Order confirmed',
      className: 'animate-fade animate-once animate-ease-out',
    });
  } else {
    toast.error('Error', {
      description: 'error on order confirmation',
    });
  }
};
