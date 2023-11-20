import { useState, useEffect } from "react";
import like from "../assets/like.svg";
import {
  formatProfileName,
  renderThoughtContent,
  renderListContent,
  truncateContent,
} from "../utils/Helper";

const Post = ({ posts, profile }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg bg-gray-50 ">
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-6 px-4 pt-8 ">
            <div className="flex justify-between items-end">
              <p className="text-2xl font-extrabold text-gray-950 ">
                {post.heading}
              </p>
              <img src={like} alt="like" className="w-6 h-6" />
            </div>
            <p className="text-gray-600 font-medium">
              {renderContent(post, isSmallScreen)}
            </p>
            <div className="flex justify-between text-xs md:text-sm">
              <p className="text-blue-500 font-semibold ">
                {post?.postType}{" "}
                <span className="text-gray-700 ">
                  by {formatProfileName(profile?.name)}
                </span>
              </p>
              {post.date} &bull; {post.readTime} mins Read &bull;
              {post.viewsCount} Views
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;

export const renderContent = (post, smallScreen) => {
  switch (post.id) {
    case "para":
      return (
        <p className={smallScreen ? "" : null}>
          {smallScreen ? truncateContent(post.content, 20) : post.content}
        </p>
      );
    case "ideas":
      return renderThoughtContent(post.content);
    case "list":
      return renderListContent(post.content);
    default:
      return null;
  }
};
