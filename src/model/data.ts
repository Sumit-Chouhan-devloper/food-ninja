import blogPost from "./blogPost";
import { authors } from "./authors";

export const post: blogPost[] = [
  {
    id: "1",
    author: authors[0],
    body: "<h1>hello world</h1>",
    content: [{ label: "hello content", to: "#" }],
    createdAt: "dec 21 2022",
    updatedAt: "dec 20 2023",
    description: { description: "this is description", subHeading:"sub heading" },
    title: "this is title",
    image: "../assets/images/webp/NatureCardImg.webp",
  },
];
