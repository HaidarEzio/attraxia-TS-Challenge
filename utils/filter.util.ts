import { Row } from "react-table";

export const customFilterFunction = (rows: any, id: string[], filterValue: string) => {
  if (filterValue === "All") return rows;
  return rows.filter((row: any) => row.original.status === filterValue);
};
