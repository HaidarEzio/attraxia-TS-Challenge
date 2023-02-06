export const customFilterFunction = (rows: any, id: any, filterValue: any) => {
  if (filterValue === "All") return rows;
  return rows.filter((row: any) => row.original.status === filterValue);
};
