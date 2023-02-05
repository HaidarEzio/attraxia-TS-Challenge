const columnsData = [
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
    // Filter: DropDown,
    // filter: "includes",
  },
  {
    Header: () => <p className="text-start">Created On</p>,
    accessor: "createdOn",
  },
  {
    Header: "Replies",
    accessor: "replies",
    Cell: ({ row }) =>
      row && (
        <div className="flex space-x-2">
          <Image className="rounded-full" src={row.original.replies.imgUrl} alt="img" height={20} width={20} />
          <p>Last by {row.original.replies.name}</p>
          <p className="text-white bg-black rounded-full ">{row.original.replies.replyNumber}</p>

          {row.original.replies.staff ? <p className="">staff</p> : null}
        </div>
      ),
  },
];
