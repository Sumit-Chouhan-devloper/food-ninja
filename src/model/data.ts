import BlogPost from "./blogPost";
import { authors } from "./authors";
import food from "../assets/images/webp/FoodCardImg.webp";
import nature from "../assets/images/webp/NatureCardImg.webp";
export const posts: BlogPost[] = [
  {
    id: "1",
    author: authors[0],
    body: "<h1>hello world</h1>",
    content: [{ label: "hello content", to: "#" }],
    createdAt: "Jun 21, 2021 • 11 min read",
    updatedAt: "dec 20 2023",
    category: "Travel",
    description: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima impedit neque accusamus, corporis quisquam et. Rem explicabo magnam vitae, eos praesentium cum fugiat esse accusamus commodi nisi, doloribus libero.",
        subHeading: "sub heading",
      },
    ],
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    image: nature,
  },
  {
    id: "2",
    author: authors[1],
    body: "<h1>hello world</h1>",
    content: [{ label: "hello content", to: "#" }],
    createdAt: "Aug 1, 2021 • 7 min read",
    updatedAt: "dec 20 2023",
    category: "Food",
    description: [
      { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima impedit neque accusamus, corporis quisquam et. Rem explicabo magnam vitae, eos praesentium cum fugiat esse accusamus commodi nisi, doloribus libero.", subHeading: "sub heading" },
    ],
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    image: food,
  },
  {
    id: "3",
    author: authors[2],
    body: "<h1>hello world</h1>",
    content: [{ label: "hello content", to: "#" }],
    createdAt: "Aug 1, 2021 • 7 min read",
    updatedAt: "dec 20 2023",
    category: "Food",
    description: [
      { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima impedit neque accusamus, corporis quisquam et. Rem explicabo magnam vitae, eos praesentium cum fugiat esse accusamus commodi nisi, doloribus libero.", subHeading: "sub heading" },
    ],
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    image: food,
  },
  {
    id: "4",
    author: authors[3],
    body: "<h1>hello world</h1>",
    content: [{ label: "hello content", to: "#" }],
    createdAt: "Jun 21, 2021 • 11 min read",
    updatedAt: "dec 20 2023",
    category: "Travel",
    description: [
      { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima impedit neque accusamus, corporis quisquam et. Rem explicabo magnam vitae, eos praesentium cum fugiat esse accusamus commodi nisi, doloribus libero.", subHeading: "sub heading" },
    ],
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    image: nature,
  },
];
