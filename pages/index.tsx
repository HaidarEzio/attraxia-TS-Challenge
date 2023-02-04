import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import Header from "@/components/reusable/header.reusable";
import DataTable from "@/components/dataTable.comp";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Attraxia Challenge</title>
      </Head>
      <div className="h-14 bg-neutral-700" />
      <main className="flex flex-col items-center bg-gray-100">
        <div className="w-4/6">
          <Header />
          <div className="flex items-center justify-center px-8 py-6 bg-white border-t-2 ">
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
          </div>
          <div className="flex items-center justify-between px-8 py-6 mt-10 bg-white mt-flex">
            <h3 className="font-bold">My Tickets</h3>
            <div className="flex items-center space-x-5">
              <h4 className="">All Tickets + 14</h4>
              <div>
                <div className="h-11 px-4 w-[16rem] border space-x-1 rounded-full text-neutral-700 bg-neutral-100 border-neutral-200 flex items-center">
                  <BiSearch size="1.2rem" className="align-bottom" />
                  <input type="text" className="text-sm bg-transparent focus:outline-none focus:border-blue-500" placeholder="Search Support Forum" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-8 py-6 bg-white border-t-2 ">
            <DataTable />
          </div>
        </div>
      </main>
    </>
  );
}
