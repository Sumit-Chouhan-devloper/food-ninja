import nature_card from "../../assets/images/png/NatureCardImg.png";
import food_img from "../../assets/images/png/FoodCardImg.png";
import user_img from "../../assets/images/png/userImg.png";
import keep_reading1 from "../../assets/images/png/keep_reading_1.png";
import keep_reading2 from "../../assets/images/png/keep_reading_2.png";

// about card data
export type AboutCardItem = {
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
    nature_img: nature_card,
    btn: "Travel",
    heading: "What Traveling Greece For 2 Weeks Taught Me About Life",
    timePara: "Jun 21, 2021 • 11 min read",
    mainPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
    bottomImg: user_img,
    userName: "George Costanza",
  },
  {
    nature_img: food_img,
    btn: "Food Theory",
    heading: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    timePara: "Aug 1, 2021 • 7 min read",
    mainPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
    bottomImg: user_img,
    userName: "George Costanza",
  },
  {
    nature_img: food_img,
    btn: "Food Theory",
    heading: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    timePara: "Aug 1, 2021 • 7 min read",
    mainPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
    bottomImg: user_img,
    userName: "George Costanza",
  },
  {
    nature_img: nature_card,
    btn: "Travel",
    heading: "What Traveling Greece For 2 Weeks Taught Me About Life",
    timePara: "Jun 21, 2021 • 11 min read",
    mainPara:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
    bottomImg: user_img,
    userName: "George Costanza",
  },
];

// food theory data

export type FoodTheoryItem = {
  foodTheoryHeading: string;
  foodTheoryPara1: string;
  foodTheoryPara2: string;
};

export const TheoryItems: FoodTheoryItem[] = [
  {
    foodTheoryHeading: "How to travel without spending a dime",
    foodTheoryPara1:
      "Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo pharetra, vestibulum rhoncus natoque.",
    foodTheoryPara2:
      "Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer praesent tincidunt. At erat sagittis tellus ultricies in a. ",
  },
  {
    foodTheoryHeading: "Get the most out of your credit card reward points",
    foodTheoryPara1:
      "Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.",
    foodTheoryPara2:
      "Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit hac tristique orci. Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit vitae. Duis luctus convallis risus purus sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.",
  },
  {
    foodTheoryHeading: "Why you don’t need more than 3 pieces of clothing",
    foodTheoryPara1: "Massa aenean cursus nulla urna dui, fermentum cursus in facilisis. Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.",
    foodTheoryPara2: "Sed pellentesque quam lorem urna. Mauris donec molestie eget massa pellentesque facilisis netus mauris. Magna eget eget sollicitudin at faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor. Maecenas molestie consequat cursus posuere ultrices facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus sit et.",
  },
];

// keep reading data

export type keepReadingItem = {
  Image: string;
  Heading: string;
  para: string;
};

export const KeepReadingItems: keepReadingItem[] = [
  {
    Image: keep_reading1,
    Heading:"Why you don’t need more than 3 pieces of clothing",
    para:"Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
  },
  {
    Image: keep_reading2,
    Heading:"Why you should cook with your family together everyday",
    para:"Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.",
  },
];
