import linksModel from "./links";
import author from "./author";
export default interface blogPost{
    id:string,
    title:string,
    image:string,
    description:postDescription,
    body:string,
    content:linksModel[],
    createdAt:string,
    updatedAt:string,
    author:author,
}

 interface postDescription{
    subHeading:string,
    description:string,
}
