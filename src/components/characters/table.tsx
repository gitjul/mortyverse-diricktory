import type { Character } from "@/api/characters/types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type CharactersTableProps = {
  data: Character[];
};

const CharactersTable = ({ data }: CharactersTableProps) => {
  const table = useReactTable({
    data,
    columns: [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "species", header: "Species" },
    ] as ColumnDef<Character>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="font-medium">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CharactersTable;
