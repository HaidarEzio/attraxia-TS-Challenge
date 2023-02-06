import { useTable, useFilters } from "react-table";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { statusAtom, ticketAtom } from "@/pages";
import { SectionBody } from "./reusable";

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

  //? Listen for input changes outside
  useEffect(() => {
    // This will now use our custom filter for the status column
    setFilter("status", status);
    setFilter("ticket", ticket);
  }, [status, setFilter, ticket]);

  return (
    <div className="flex flex-col w-full">
      {
        //? No data found
        rows.length === 0 ? (
          <SectionBody imgUrl="/no-query.svg" text={`No tickets found for "${ticket}"`} subText="Please adjust your search term and try again." />
        ) : (
          <table {...getTableProps()} className="relative w-full">
            <thead>
              {headerGroups.map((headerGroup, idx) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                  {headerGroup.headers.map((column, idx) => (
                    <th {...column.getHeaderProps()} className="" key={idx}>
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
        )
      }
    </div>
  );
};

export default DataTable;
