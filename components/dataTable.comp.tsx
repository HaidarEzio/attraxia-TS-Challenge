import { TableDataType, defaultData } from "../utils/placeholder.data";
import { useTable, Column, useFilters } from "react-table";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import DropDown from "./reusable/dropdown.reusable";
import { useAtom } from "jotai";
import { statusAtom, ticketAtom } from "@/pages";

// const columns = [
//   columnHelper.accessor("ticket", {
//     header: () => <p className="text-sm text-start">Ticket</p>,
//     cell: (title) => (
//       <div className="flex flex-col ">
//         <h3 className="text-lg font-bold text-blue-700">{title.getValue()}</h3>
//         <p className="text-base text-neutral-600 ">{title.row.original.description}</p>
//       </div>
//     ),
//   }),
//   columnHelper.accessor("status", {
//     header: () => <p className="px-10 text-sm text-start">Status</p>,
//     cell: (data) => (
//       <div className="flex justify-center">
//         <span className="px-3 py-1 text-center bg-red-500 rounded-full">{data.getValue()}</span>
//       </div>
//     ),
//   }),
//   columnHelper.accessor("createdOn", {
//     header: () => <p className="text-start">Created On</p>,
//   }),
//   columnHelper.accessor("replies", {
//     header: () => <p className="text-start">Replies</p>,
//     cell: (data) => (
//       <div className="flex space-x-2">
//         <Image className="rounded-full" src={data.row.original.replies.imgUrl} alt="img" height={20} width={20} />
//         <p>Last by {data.row.original.replies.name}</p>
//         <p className="text-white bg-black rounded-full ">{data.row.original.replies.replyNumber}</p>

//         {data.row.original.replies.staff ? <p className="">staff</p> : null}
//       </div>
//     ),
//   }),
// ];

const DataTable = ({ columns, data }: any) => {
  const [status] = useAtom(statusAtom);
  const [ticket] = useAtom(ticketAtom);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable(
    {
      columns,
      data,
    },
    useFilters
  );
  // Listen for input changes outside
  useEffect(() => {
    // This will now use our custom filter for age
    setFilter("status", status);
    setFilter("ticket", ticket);
  }, [status, setFilter, ticket]);
  return (
    <>
      <table {...getTableProps()} className="w-full">
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="" key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td className="py-4 border-t-2" {...cell.getCellProps()} key={cell.row.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
// function DataTables() {
//   const data = useMemo(
//     () => [
//       {
//         col1: "Hello",
//         col2: "World",
//       },
//       {
//         col1: "react-table",
//         col2: "rocks",
//       },
//       {
//         col1: "whatever",
//         col2: "you want",
//       },
//     ],
//     []
//   );

//   const columns = useMemo(
//     () => [
//       {
//         Header: "Column 1",
//         accessor: "col1", // accessor is the "key" in the data
//       },
//       {
//         Header: "Column 2",
//         accessor: "col2",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

//   return (
//     <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   borderBottom: "solid 3px red",
//                   background: "aliceblue",
//                   color: "black",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {column.render("Header")}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{
//                       padding: "10px",
//                       border: "solid 1px gray",
//                       background: "papayawhip",
//                     }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

export default DataTable;
