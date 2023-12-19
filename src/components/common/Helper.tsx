import nature_card from "../../assets/images/png/NatureCardImg.png";
import food_img from "../../assets/images/png/FoodCardImg.png";
import user_img from "../../assets/images/png/userImg.png";
export type AboutCardItem = {
    id: number;
    nature_img: string;
    btn: string;
    heading: string;
    timePara: string;
    mainPara: string;
    bottomImg: string;
    userName: string;
  };
export const items: AboutCardItem[] = [
    {
      id: 1,
      nature_img: nature_card,
      btn: "Travel",
      heading: "What Traveling Greece For 2 Weeks Taught Me About Life",
      timePara: "Jun 21, 2021 • 11 min read",
      mainPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
      bottomImg: user_img,
      userName: "George Costanza",
    },
    {
      id: 2,
      nature_img: food_img,
      btn: "Food Theory",
      heading: "Why You Should Never Order 12 Chicken Nuggets and Fries",
      timePara: "Aug 1, 2021 • 7 min read",
      mainPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
      bottomImg: user_img,
      userName: "George Costanza",
    },
  ];

 
  
