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
      { accessorKey: "name", header: "Name" },
      {
        accessorKey: "image",
        header: "Avatar",
        cell: ({ getValue }) => (
          <img
            src={getValue() as string}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        ),
      },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "species", header: "Species" },
      { accessorKey: "location.name", header: "Location" },
      { accessorKey: "origin.name", header: "Origin" },
      { accessorKey: "gender", header: "Gender" },
    ] as ColumnDef<Character>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className="font-bold">
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
