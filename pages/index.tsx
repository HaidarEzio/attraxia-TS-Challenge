import { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";

import { atom, useAtom } from "jotai";
import { Column } from "react-table";
import { BiRightArrowAlt } from "react-icons/bi";

import { DropDown, SearchBar, SectionBody, SectionHeader, StatusBadge } from "@/pages/components/reusable";
import { Reply } from "@/pages/components/table";
import DataTable from "@/pages/components/dataTable.comp";
import Footer from "@/pages/components/footer.comp";

import { TableDataType, StatusType, defaultData } from "../utils/placeholder.data";
import { customFilterFunction } from "@/utils/filter.util";

//? Atoms for using Jotai
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
  //*TODO: DOn't forget to ANY in all return types

  return (
    <>
      <Head>
        <title>Attraxia Challenge</title>
      </Head>
      <div className="h-14 bg-neutral-700" />
      <main className="flex flex-col items-center bg-gray-100">
        <div className="w-4/6">
          <SectionHeader title="Support &nbsp;Resources">
            <div className="flex items-center space-x-5">
              <h4 className="">Need Help?</h4>
              <button className="flex items-center py-3 space-x-2 bg-blue-600 rounded-lg px-7 ">
                <Image src="/lifebuoy.svg" width={20} height={20} alt="support-icon" />
                <span className="font-bold text-white">Get Support</span>
              </button>
            </div>
          </SectionHeader>
          <section className="flex items-center justify-center px-8 py-10 bg-white border-t-2 ">
            <SectionBody imgUrl="/support-icon.svg" text="Support Forums" subText="Search the topic you need help with in our support forums.">
              <div className="flex items-center text-blue-500">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase ">
                  browse forums
                </a>
                <BiRightArrowAlt />
              </div>
              {/* search bar */}
              <SearchBar placeholder="Search Support Forum" />
            </SectionBody>
          </section>
          <SectionHeader title="My Tickets">
            <div className="flex items-center space-x-6">
              <DropDown />
              <SearchBar placeholder="Search Tickets" setTicket={setTicket} />
            </div>
          </SectionHeader>
          <section className="flex items-center justify-center w-full px-8 py-6 bg-white border-t-2 ">
            <DataTable data={data} columns={columns} />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
