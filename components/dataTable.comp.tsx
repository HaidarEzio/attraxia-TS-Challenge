import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { TableData, defaultData } from "../utils/placeholder.data";
import { useState } from "react";
import Image from "next/image";

//? this is for type safety and autocompletion
const columnHelper = createColumnHelper<TableData>();

const columns = [
  columnHelper.accessor("ticket", {
    header: () => <p className="text-sm text-start">Ticket</p>,
    cell: (title) => (
      <div className="flex flex-col ">
        <h3 className="text-xl text-blue-700">{title.getValue()}</h3>
        <p className="text-base text-neutral-600 ">{title.row.original.description}</p>
      </div>
    ),
  }),
  columnHelper.accessor("status", {}),
  columnHelper.accessor("createdOn", {}),
  columnHelper.accessor("replies", {
    cell: (data) => (
      <div className="flex space-x-2">
        <Image className="rounded-full" src={data.row.original.replies.imgUrl} alt="img" height={20} width={20} />
        <p>Last by {data.row.original.replies.name}</p>
        <p className="text-white bg-black rounded-full ">{data.row.original.replies.replyNumber}</p>

        {data.row.original.replies.staff ? <p className="">staff</p> : null}
      </div>
    ),
  }),
];

const DataTable = () => {
  // const [data, setData] = useState<TableData[]>();
  const data: TableData[] = [...defaultData];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead className="mx-4">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="mx-11" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
