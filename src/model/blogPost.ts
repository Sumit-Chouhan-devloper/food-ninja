import Author from "./author";

export default interface BlogPost {
  id: string;
  author: Author;
  body: string;
  content: { label: string; to: string }[];
  createdAt: string; // You might want to use Date type here
  updatedAt: string; // You might want to use Date type here
  category: string;
  description: { description: string; subHeading: string }[];
  title: string;
  image: string;
}
