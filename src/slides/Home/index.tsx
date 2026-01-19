import ProfileCard from "./profileCard/profileCard";
import avatar from "../../assets/images/avatar.jpg";

import HomeContent from "./content/content";

const Home = () => {
  return (
    <div>
      {/* Desktop Layout */}
      <div
        className="hidden md:flex"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Nửa trái: Content */}
        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          <HomeContent />
        </div>
        {/* Nửa phải: Card */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ProfileCard
            avatarUrl={avatar}
            showUserInfo
            enableMobileTilt
            onContactClick={() =>
              window.open("https://www.instagram.com/_man.pn/", "_blank")
            }
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 w-screen h-screen flex md:hidden flex-col md:flex-row pt-20 mt-10">
        {/* CARD – mobile lên trước */}
        <div className="w-full h-[20vh] flex items-center justify-center">
          <ProfileCard
            avatarUrl={avatar}
            showUserInfo
            enableMobileTilt
            onContactClick={() =>
              window.open("https://www.instagram.com/_man.pn/", "_blank")
            }
          />
        </div>

        {/* CONTENT – mobile nằm dưới */}
        <div className="w-full h-[90vh] md:flex-[2] justify-end text-white px-4 py-10 text-center mt-20">
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
