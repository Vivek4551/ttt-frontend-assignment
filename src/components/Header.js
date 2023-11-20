import tttLogo from "../assets/ttt.svg";

const Header = () => {
  return (
    <div className="bg-black px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={tttLogo} alt="ttt-logo" className="h-12 w-12 md:w-16 md:h-16 "/>
        <div className=" h-10 md:h-14 w-px bg-yellow-500" />
        <div className=" text-white font-semibold uppercase text-xl md:text-3xl tracking-widest">
          Stories
        </div>
      </div>
        <button className="bg-yellow-600 rounded-xl p-2.5 font-bold w-20 h-12">Courses</button>
    </div>
  );
};

export default Header;
