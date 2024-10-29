import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from "react-router-dom";

const  BlogCard = ({ title, content, blogURL }) => {
  return (
    <Link
      to={blogURL}
      className="cursor-pointer sm:h-max h-[103px] max-sm:p-1 py-1 px-2 bg-[#e8f8ff] flex rounded-xl  col-span-5 shadow-2xl"
    >
      <LibraryBooksIcon
        style={{
          fontSize: window.innerWidth < 640 ? "4.6rem" : "8.2rem",
          color: "#ffb0b0",
        }}
      />
      <div className="overflow-hidden ml-1 mt-1">
        <h2 className="font-semibold sm:font-bold text-[14px] sm:text-lg opacity-90">
          {title}
        </h2>
        <p className="opacity-80 sm:mt-0 max-sm:text-[13px] ">{content}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
