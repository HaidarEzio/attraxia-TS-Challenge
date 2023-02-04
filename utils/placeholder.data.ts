export interface TableData {
  ticket: { title: string; description: string };
  status: "All" | "Open" | "Feedback" | "Resolved";
  createdOn: string;
  replies: {
    imgUrl: string;
    name: string;
    replyNumber: number;
    staff: boolean;
  };
}

export const defaultData: TableData[] = [
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: { title: "sup mf", description: "it is what it is" },
    status: "Open",
    createdOn: "2020-01-01",
    replies: {
      imgUrl: "https://picsum.photos/200",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
];
