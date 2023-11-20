import { useState, useEffect } from "react";
import star from "../assets/star.svg";
import like from "../assets/like.svg";
import love from "../assets/love.svg";
import view from "../assets/views.svg";
import { formattedCount } from "../utils/Helper";

const Icon = ({ icon, count, onIconClick }) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={icon} alt="icon" className="w-6 h-6" onClick={onIconClick} />
      <p className="font-semibold text-lg text-gray-500 hover:text-gray-900">
        {formattedCount(count)}
      </p>
    </div>
  );
};

const ProfileStats = () => {
  const [stars, setStars] = useState(() => {
    const storedStars = localStorage.getItem("stars");
    return storedStars ? parseInt(storedStars, 10) : 125;
  });
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem("likes");
    return storedLikes ? parseInt(storedLikes, 10) : 12;
  });
  const [loves, setLoves] = useState(() => {
    const storedLoves = localStorage.getItem("loves");
    return storedLoves ? parseInt(storedLoves, 10) : 57800;
  });
  const [views, setViews] = useState(() => {
    const storedViews = localStorage.getItem("views");
    return storedViews ? parseInt(storedViews, 10) : 26000;
  });

  const handleIconClick = (setter, key) => {
    setter((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem(key, newCount);
      return newCount;
    });
  };

  useEffect(() => {
    localStorage.setItem("stars", stars);
    localStorage.setItem("likes", likes);
    localStorage.setItem("loves", loves);
    localStorage.setItem("views", views);
  }, [stars, likes, loves, views]);

  return (
    <div className="flex items-center gap-6">
      <Icon
        icon={star}
        count={stars}
        onIconClick={() => handleIconClick(setStars)}
      />
      <Icon
        icon={like}
        count={likes}
        onIconClick={() => handleIconClick(setLikes)}
      />
      <Icon
        icon={view}
        count={views}
        onIconClick={() => handleIconClick(setViews)}
      />
      <Icon
        icon={love}
        count={loves}
        onIconClick={() => handleIconClick(setLoves)}
      />
    </div>
  );
};

export default ProfileStats;
