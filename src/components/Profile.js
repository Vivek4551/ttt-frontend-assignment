import profiledata from "../data.json";
import Name from "./Name";
import FollowerCount from "./FollowerCount";
import ProfileStats from "./ProfileStats";
import coverImage from "../assets/coverone.png";
import profileImage from "../assets/profile.png";
import Post from "./Post";

const Profile = () => {
  return (
    <div className="mx-auto max-w-screen-lg bg-gray-50">
      {profiledata?.profiles?.map((profile) => (
        <div className="flex flex-col gap-8" key={profile?.id}>
          {/* profle pic */}
          <div className="flex flex-col justify-between">
            <img
              src={coverImage}
              alt="cover-img"
              className="h-52 min-w-full object-cover"
            />
            <div className="flex px-3 gap-6 md:gap-10 items-center">
              {/* profile image */}
              <img
                src={profileImage}
                alt="profile-img"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full z-10 -mt-10"
              />
              {/* name & follower */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-2xl font-semibold -mt-2">
                  <Name name={profile?.name} />
                </div>
                <div className="flex gap-6">
                  <FollowerCount
                    count={profile?.followers}
                    heading={"Followers"}
                  />
                  <FollowerCount
                    count={profile?.following}
                    heading={"Following"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* bio */}
          <div className="flex flex-col gap-2 mx-4 md:mx-12">
            <p className="text-xl">{profile?.designation}</p>
            <a
              href={profile?.["ig-link"]}
              target="_blank"
              className="text-cyan-500 text-xl"
            >
              {profile?.igLink}
            </a>
            <div className="flex mt-4">
              <ProfileStats />
            </div>
          </div>
          <div className="mb-12">
            <div className="flex justify-between items-center">
              <div className="border-t border-r px-4 py-2 pr-3.5 border-gray-300 text-blue-600 font-semibold">
                {profile?.totalPosts} Posts
              </div>
            </div>
            <div className="border-b ml-24 border-gray-300" />
            <Post posts={profile.posts} profile={profile} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
