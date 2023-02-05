import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import { useTable, Column, useFilters } from "react-table";
import Header from "@/components/reusable/header.reusable";
import DataTable from "@/components/dataTable.comp";
import DropDown from "@/components/reusable/dropdown.reusable";
import { atom } from "jotai";
import { TableDataType, StatusType, defaultData } from "../utils/placeholder.data";
import { useState, useMemo } from "react";
import { useAtom } from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const statusAtom = atom<StatusType>("All");
export const ticketAtom = atom<string>("");

export default function Home() {
  const [ticket, setTicket] = useAtom(ticketAtom);
  const data: TableDataType[] = useMemo(() => [...defaultData], []);

  const customFilterFunction = (rows: any, id: any, filterValue: any) => {
    if (filterValue === "All") return rows;
    return rows.filter((row: any) => row.original.status === filterValue);
  };

  const columns: Column<TableDataType>[] = useMemo(
    () => [
      {
        Header: () => <p className="text-sm text-start">Ticket</p>,
        accessor: "ticket",
        Cell: (title) => (
          <div className="flex flex-col ">
            <h3 className="text-lg font-bold text-blue-700">{title.value}</h3>
            <p className="text-base text-neutral-600 ">{title.row.original.description}</p>
          </div>
        ),
      },
      {
        Header: () => <p className="px-10 text-sm text-start">Status</p>,
        accessor: "status",
        Cell: (data) => (
          <div className="flex justify-center">
            <span className="px-3 py-1 text-center bg-red-500 rounded-full">{data.value}</span>
          </div>
        ),
        filter: customFilterFunction,
      },
      {
        Header: () => <p className="text-start">Created On</p>,
        accessor: "createdOn",
      },
      {
        Header: () => <p className="text-start">Replies</p>,
        accessor: "replies",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <Image className="rounded-full" src={row.original.replies.imgUrl} alt="img" height={20} width={20} />
            <p>Last by {row.original.replies.name}</p>
            <p className="text-white bg-black rounded-full ">{row.original.replies.replyNumber}</p>

            {row.original.replies.staff ? <p className="">staff</p> : null}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Attraxia Challenge</title>
      </Head>
      <div className="h-14 bg-neutral-700" />
      <main className="flex flex-col items-center bg-gray-100">
        <div className="w-4/6">
          <Header />
          <section className="flex items-center justify-center px-8 py-6 bg-white border-t-2 ">
            <div className="flex flex-col items-center justify-center space-y-5 ">
              <Image src="/support-icon.svg" width={64} height={64} alt="support-icon" />
              <h3 className="text-2xl font-bold">Support Forums</h3>
              <p className="text-center">Search the topic you need help with in our support forums.</p>
              <div className="flex items-center text-blue-500">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase ">
                  browse forums
                </a>
                <BiRightArrowAlt />
              </div>
              {/* search bar */}
              <div>
                <div className="h-11 px-4 w-[16rem] border space-x-1 rounded-full text-neutral-700 bg-neutral-100 border-neutral-200 flex items-center">
                  <BiSearch size="1.2rem" className="align-bottom" />
                  <input type="text" className="text-sm bg-transparent focus:outline-none focus:border-blue-500" placeholder="Search Support Forum" />
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-between px-8 py-6 mt-10 bg-white mt-flex">
            <h3 className="font-bold">My Tickets</h3>
            <div className="flex items-center space-x-6">
              <DropDown />

              <div>
                <div className="h-11 px-4 w-[16rem] border space-x-1 rounded-full text-neutral-700 bg-neutral-100 border-neutral-200 flex items-center">
                  <BiSearch size="1.2rem" className="align-bottom" />
                  <input
                    type="text"
                    className="text-sm bg-transparent focus:outline-none focus:border-blue-500"
                    placeholder="Search Support Forum"
                    onChange={(e) => setTicket(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center w-full px-8 py-6 mb-20 bg-white border-t-2 ">
            <DataTable data={data} columns={columns} />
          </section>
        </div>
      </main>
    </>
  );
}
