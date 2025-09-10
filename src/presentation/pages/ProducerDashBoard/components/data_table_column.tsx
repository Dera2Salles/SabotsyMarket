"use client";
import defaut from "@/assets/defaut.jpg";

import { type ColumnDef } from "@tanstack/react-table";
// import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import type { ProductEntity } from "@/product/domain/Entity/Product";
import { MenuAction } from "./menu_action";

export const columns: ColumnDef<ProductEntity>[] = [
  {
    accessorKey: "filename",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Picture
        </Button>
      );
    },
    cell: ({ row }) => (
      <img
        src={
          row.getValue("filename")
            ? `http://localhost:5000/product/stream/${row.getValue("filename")}`
            : defaut
        }
        alt={row.getValue("name")}
        className="size-25 rounded-2xl"
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-bold">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "unit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Unit
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-center">{row.getValue("unit")}</div>
    ),
  },

  {
    accessorKey: "price",
    header: () => <div className="text-center">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      return <div className="text-center font-medium">{amount}.00 MGA</div>;
    },
  },
  {
    accessorKey: "id",
    header: () => {},
    enableHiding: false,
    cell: ({ row }) => {
      const productId: string = row.getValue("id") || "null";
      return <MenuAction productId={productId} />;
    },
  },
];

// <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="h-8 w-8 p-0">
//             <span className="sr-only">Open menu</span>
//             <MoreHorizontal />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//           <DropdownMenuItem
//           >
//             Copy payment ID
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>View customer</DropdownMenuItem>
//           <DropdownMenuItem>View payment details</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
