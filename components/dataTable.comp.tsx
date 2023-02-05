import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, ColumnFiltersState } from "@tanstack/react-table";

import { TableDataType, defaultData } from "../utils/placeholder.data";
import { useState } from "react";
import Image from "next/image";

//? this is for type safety and autocompletion
const columnHelper = createColumnHelper<TableDataType>();

const columns = [
  columnHelper.accessor("ticket", {
    header: () => <p className="text-sm text-start">Ticket</p>,
    cell: (title) => (
      <div className="flex flex-col ">
        <h3 className="text-lg font-bold text-blue-700">{title.getValue()}</h3>
        <p className="text-base text-neutral-600 ">{title.row.original.description}</p>
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    header: () => <p className="px-10 text-sm text-start">Status</p>,
    cell: (data) => (
      <div className="flex justify-center">
        <span className="px-3 py-1 text-center bg-red-500 rounded-full">{data.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("createdOn", {
    header: () => <p className="text-start">Created On</p>,
  }),
  columnHelper.accessor("replies", {
    header: () => <p className="text-start">Replies</p>,
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
  // const [data, setData] = useState<TableDataType[]>();
  const data: TableDataType[] = [...defaultData];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className="w-full">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="" key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanFilter() ? <div></div> : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-4 border-t-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
