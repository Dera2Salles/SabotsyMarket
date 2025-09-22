import { useRef, useState } from 'react';
import type { ProductEntity } from '@/features/product/ProductEntity';
import { autRepository, productRepository } from '@/injection';
import { toast } from 'sonner';

export const useDashboard = () => {
  const [productTotalNumber, setProductTotalNumber] = useState<number>(0);
  const [productOnOrderTotalNumber, setProductOnOrderTotalNumber] =
    useState<number>(0);
  const [userName, setUserName] = useState<string | null>(null);
  const [productList, setProductList] = useState<ProductEntity[]>([]);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [productName, setProductName] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState<string | null>(
    null,
  );
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productUnit, setProductUnit] = useState<number | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductEntity | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const limit = 5;

  const fetchProduct = async () => {
    const result = await autRepository.getData(page, limit);
    if (result.status === 'success') {
      if (result.data.product.length == 0) {
        setHasReachedMax(true);
      } else {
        setProductTotalNumber(result.data.productTotalNumber);
        setProductOnOrderTotalNumber(result.data.productOnOrderTotalNumber);
        setProductList((product) => [...product, ...result.data.product]);
        setPage((prev) => prev + 1);
      }
      setUserName(result.data.name);
    } else {
      toast.error('Error', {
        description: 'Failed to fetch products',
      });
    }
  };

  const deleteProduct = async (productId: string) => {
    const result = await productRepository.delete(productId);
    if (result.status === 'success') {
      const newProduct = productList.filter((item) => item.id != productId);
      setProductList(newProduct);
      setProductTotalNumber((number) => number - 1);
      toast.success('Succes', {
        description: 'product deleted',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'error on deleting product',
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setUploadProgress(0);
      setErrorMessage('');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const isValid =
      file && file?.[0].type.startsWith('image/') && file && file.length > 0;

    if (isValid) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file?.[0]);
      setSelectedFile(file[0]);
    } else {
      setImage(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Veuillez sélectionner un fichier');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setErrorMessage('');
    const result = await productRepository.sendFiles(formData);
    if (result.status == 'failure') {
      setErrorMessage('Erreur lors du téléchargement');
    } else {
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const sendToServer = () => {
    addNewProduct();
    if (selectedFile) handleUpload();
  };

  const addNewProduct = async () => {
    const newProduct: ProductEntity[] = [
      {
        price: productPrice as number,
        unit: productUnit as number,
        name: productName as string,
        category: productCategory as string,
        description: productDescription as string,
        fileName: selectedFile?.name,
      },
    ];

    const result = await productRepository.add(newProduct);
    if (result.status === 'success') {
      const [newToAdd] = newProduct;
      const listUpdate: ProductEntity[] = [...productList, newToAdd];
      setProductTotalNumber((number) => number + 1);
      setProductList(listUpdate);
      toast.success('Succes', {
        description: 'Product added',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to add product',
      });
    }
  };

  const openEditModal = () => {
    // setEditingProduct(product);
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
    setEditingProduct(null);
  };

  //   useEffect(() => {
  //   const callFetchProduct = async () => {
  //     await fetchProduct();
  //   };

  //   callFetchProduct();
  // }, []);

  return {
    setProductName,
    setProductPrice,
    setProductUnit,
    isEditModalVisible,
    editingProduct,
    openEditModal,
    closeEditModal,
    setProductCategory,
    setProductDescription,
    handleCancel,
    handleFileChange,
    errorMessage,
    uploadProgress,
    fileInputRef,
    selectedFile,
    image,
    handleImageChange,
    sendToServer,
    fetchProduct,
    hasReachedMax,
    productList,
    userName,
    deleteProduct,
    productTotalNumber,
    productOnOrderTotalNumber,
  };
};
