export interface TableData {
  ticket: string;
  description: string;
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
    ticket: "Domain Mapped Site Shows Cors Policy Error",
    description: "General WordPress ",
    status: "Open",
    createdOn: "Today @ 12:04 AM",
    replies: {
      imgUrl: "https://avatarapi.com/images/person2.jpg",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: "sup mf",
    description: "it is what it is",
    status: "Open",
    createdOn: "Today @ 12:04 AM",
    replies: {
      imgUrl: "https://avatarapi.com/images/person2.jpg",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
  {
    ticket: "sup mf",
    description: "it is what it is",
    status: "Open",
    createdOn: "Today @ 12:04 AM",
    replies: {
      imgUrl: "https://avatarapi.com/images/person2.jpg",
      name: "John Doe",
      replyNumber: 6,
      staff: true,
    },
  },
];
