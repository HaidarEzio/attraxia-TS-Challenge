export type StatusType = "All" | "Open" | "Feedback" | "Resolved";
export interface TableDataType {
  ticket: string;
  description: string;
  status: StatusType;
  createdOn: string;
  replies: {
    imgUrl: string;
    name: string;
    replyNumber: number;
    staff: boolean;
  };
}

export const defaultData: TableDataType[] = [
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
