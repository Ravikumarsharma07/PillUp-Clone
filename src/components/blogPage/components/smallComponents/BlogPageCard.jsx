import { Link } from "react-router-dom";

const BlogPageCard = ({ title, blogContent,blogURL }) => {
  return (
    
    <div className="p-4 shadow-2xl rounded-xl ">
      <img
        className="rounded-2xl p-2 sm:mx-4 mr-2 h-24 w-24 sm:h-[120px] sm:w-[120px] md:h-[160px] md:w-[160px] bg-slate-300  odd:float-left even:float-right"
        src="https://pillup.com/assets/logo.svg"
        alt="Blog"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="" dangerouslySetInnerHTML={{__html:blogContent}}></p><Link to={blogURL}><p className="text-end text-blue-600 underline">read more</p></Link>
    </div>
  );
};

export default BlogPageCard;
