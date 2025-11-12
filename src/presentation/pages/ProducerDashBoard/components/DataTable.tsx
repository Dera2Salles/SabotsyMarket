import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { flexRender } from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';
import { EditInput } from './EditInput';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useScrollLock } from '@/presentation/hooks/useScrollLock';
import { useDashboardContext } from '../context/useDashboardContext';
import { useDataTable } from '../hooks/useDataTable';

export const ProductDataTable = () => {
  const { observerRef, table, columns } = useDataTable();
  const { isEditModalVisible } = useDashboardContext();
  useScrollLock(isEditModalVisible);

  return (
    <div className=" border transition-all duration-500 dark:bg-zinc-900 p-4 w-full">
      <div className="flex justify-between items-center w-full pt-6 px-4">
        <section className="flex flex-col">
          <p className="font-bold text-2xl">Product list</p>
          <p className=" text-gray-500 dark:text-zinc-300">
            Gérer vos produits de maniere rapide
          </p>
        </section>
        <Button className=" text-lg text-white bg-green-700 hover:bg-green-900 flex  cursor-pointer p-6">
          <p>Ajouter</p>
        </Button>
      </div>
      <div className=" p-4 w-full">
        <div className="flex items-center py-4 ">
          <Input
            placeholder="Filter product..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border ">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
          </Table>
          <ScrollArea className="h-screen">
            <Table>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <span ref={observerRef}></span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollArea>
          {isEditModalVisible && (
            <Modal>
              <EditInput />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
