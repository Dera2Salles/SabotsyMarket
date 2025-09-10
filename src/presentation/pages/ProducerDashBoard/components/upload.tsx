// import { useSendFile } from "../hooks/useSendFiles";

// const FileSendUpload: React.FC = () => {
//   const {
//     handleCancel,
//     handleUpload,
//     handleFileChange,
//     uploadStatus,
//     errorMessage,
//     uploadProgress,
//     fileInputRef,
//     selectedFile,
//   } = useSendFile();

//   return (
//     <div
//       style={{
//         maxWidth: "500px",
//         margin: "2rem auto",
//         padding: "1rem",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2 style={{ color: "#333" }}>Téléversement de fichier </h2>

//       <div style={{ marginBottom: "1rem" }}>
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileChange}
//           style={{ display: "block", marginBottom: "0.5rem" }}
//         />
//         {selectedFile && (
//           <p style={{ fontSize: "0.9rem", color: "#666" }}>
//             Fichier sélectionné: <strong>{selectedFile.name}</strong> (
//             {Math.round(selectedFile.size / 1024)} Ko)
//           </p>
//         )}
//       </div>

//       {uploadStatus === "uploading" && (
//         <div style={{ margin: "1rem 0" }}>
//           <div className={`w-${uploadProgress} bg-gray-300 overflow-hidden`}>
//             <div
//               className={`h-2 w-${uploadProgress} bg-green-500  transition-all duration-300 rounded-2xl`}
//             ></div>
//           </div>
//           <p style={{ textAlign: "center", margin: "0.5rem 0" }}>
//             {uploadProgress}%
//           </p>
//         </div>
//       )}

//       {uploadStatus === "success" && (
//         <p style={{ color: "#4caf50", fontWeight: "bold" }}>
//           ✅ Téléversement réussi!
//         </p>
//       )}

//       {uploadStatus === "error" && (
//         <p style={{ color: "#f44336" }}>❌ {errorMessage}</p>
//       )}

//       <div style={{ display: "flex", gap: "0.5rem" }}>
//         <button
//           onClick={handleUpload}
//           disabled={!selectedFile || uploadStatus === "uploading"}
//           style={{
//             padding: "0.5rem 1rem",
//             backgroundColor: "#4caf50",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor:
//               selectedFile && uploadStatus !== "uploading"
//                 ? "pointer"
//                 : "not-allowed",
//             opacity: selectedFile && uploadStatus !== "uploading" ? 1 : 0.6,
//           }}
//         >
//           {uploadStatus === "uploading"
//             ? "Téléversement..."
//             : "Téléverser le fichier"}
//         </button>

//         {(selectedFile || uploadStatus === "uploading") && (
//           <button
//             onClick={handleCancel}
//             style={{
//               padding: "0.5rem 1rem",
//               backgroundColor: "#f44336",
//               color: "white",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Annuler
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FileSendUpload;
