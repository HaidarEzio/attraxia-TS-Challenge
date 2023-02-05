import { useMemo } from "react";
import { atom, useAtom } from "jotai";
import Head from "next/head";
import Image from "next/image";

import { BiRightArrowAlt } from "react-icons/bi";

import { Column } from "react-table";

import Header from "@/pages/components/reusable/header.reusable";
import DropDown from "@/pages/components/reusable/dropdown.reusable";
import SearchBar from "@/pages/components/reusable/searchBar.reusable";
import StatusBadge from "@/pages/components/reusable/status.reusable";

import DataTable from "@/pages/components/dataTable.comp";
import Reply from "@/pages/components/table/replies.comp";
import Footer from "@/pages/components/footer.comp";

import { TableDataType, StatusType, defaultData } from "../utils/placeholder.data";
import { customFilterFunction } from "@/utils/filter.util";

export const statusAtom = atom<StatusType>("All");
export const ticketAtom = atom<string>("");

export default function Home() {
  const [ticket, setTicket] = useAtom(ticketAtom);
  const data: TableDataType[] = useMemo(() => [...defaultData], []);

  //! this can't be moved to a separate file, it needs to live in a component
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
        Cell: ({ value }) => <StatusBadge title={value} />,
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
          <Reply
            imgUrl={row.original.replies.imgUrl}
            name={row.original.replies.name}
            replyNumber={row.original.replies.replyNumber}
            staff={row.original.replies.staff}
          />
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
          <section className="flex items-center justify-center px-8 py-10 bg-white border-t-2 ">
            {/* this can be extracted to a reusable component */}
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
              <SearchBar placeholder="Search Support Forum" />
            </div>
          </section>
          <section className="flex items-center justify-between px-8 py-6 mt-10 bg-white mt-flex">
            <h3 className="font-bold">My Tickets</h3>
            <div className="flex items-center space-x-6">
              <DropDown />
              <SearchBar placeholder="Search Tickets" setTicket={setTicket} />
            </div>
          </section>
          <section className="flex items-center justify-center w-full px-8 py-6 bg-white border-t-2 ">
            <DataTable data={data} columns={columns} />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
