import { useProductContext } from "@/presentation/hooks/useProduct";
import { useState } from "react";
import type { ProductEntity } from "@/domain/Entities/Product";

export const useDashboard = () => {
  const [productName, setProductName] = useState<string | null>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productUnit, setProductUnit] = useState<number | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductEntity | null>(
    null
  );
  const bloc = useProductContext();

  const addNewProduct = () => {
    if (productName && productPrice && productUnit) {
      const newProduct = {
        id: Math.random(),
        producerId: 4,
        price: productPrice,
        unit: productUnit,
        name: productName,
      };
      bloc?.addNewProduct(newProduct);
    }
  };

  const openEditModal = (product: ProductEntity) => {
    setEditingProduct(product);
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
    setEditingProduct(null);
  };

  return {
    setProductName,
    setProductPrice,
    setProductUnit,
    addNewProduct,
    isEditModalVisible,
    editingProduct,
    openEditModal,
    closeEditModal,
  };
};
