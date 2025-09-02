import { useProductContext } from "@/presentation/hooks/useProduct";
import { useRef, useState } from "react";
import type { ProductEntity } from "@/domain/Entities/Product";
import { sendFilesUseCase } from "@/injection";

export const useDashboard = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const [productName, setProductName] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState<string | null>(
    null
  );
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productUnit, setProductUnit] = useState<number | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductEntity | null>(
    null
  );

  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setUploadStatus("idle");
      setUploadProgress(0);
      setErrorMessage("");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const isValid =
      file && file?.[0].type.startsWith("image/") && file && file.length > 0;

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
      setErrorMessage("Veuillez sélectionner un fichier");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setUploadStatus("uploading");
    setErrorMessage("");
    const result = await sendFilesUseCase.execute(formData);
    if (result.status == "failure") {
      setErrorMessage("Erreur lors du téléchargement");
    } else {
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadStatus("idle");
    setUploadProgress(0);
    setErrorMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const bloc = useProductContext();

  const sendToServer = () => {
    addNewProduct();
    if (selectedFile) handleUpload();
  };

  const addNewProduct = () => {
    if (productName && productPrice && productUnit) {
      const newProduct: ProductEntity[] = [
        {
          producerId: "0388257986",
          price: productPrice,
          unit: productUnit,
          name: productName,
          category: productCategory as string,
          description: productDescription as string,
          image: selectedFile?.name,
        },
      ];
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
    isEditModalVisible,
    editingProduct,
    openEditModal,
    closeEditModal,
    setProductCategory,
    setProductDescription,
    handleCancel,
    handleFileChange,
    uploadStatus,
    errorMessage,
    uploadProgress,
    fileInputRef,
    selectedFile,
    image,
    handleImageChange,
    sendToServer,
  };
};
