import logo from "../assets/logos/oncampus.svg";
import logoSmall from "../assets/logos/oncampusSmall.svg";

const NavBar = () => {
  return (
    <div className="w-full px-4 md:px-8 py-5 font-inter">
      <nav className="flex justify-between items-center">

        <img src={logo} alt="logo" className="hidden md:block" />
        <div className="md:hidden rounded-md overflow-hidden">
          <img src={logoSmall} alt="logo" className=" w-[32px] h-[32px]" />
        </div>
        <section className="flex gap-2">
          <select className="text-[15px]">
            <option value="students">Students</option>
            <option value="employers">Employers</option>
            <option value="universities">Universites</option>
          </select>
          <button
            className={`bg-transparent hover:bg-black hover:text-[white] border border-black transition-colors duration-150 hover:cursor-pointer px-4 py-2 rounded-sm `}
          >
            <p className={` font-medium text-[16px]`}>Sign up</p>
          </button>{" "}
          <button
            className={`bg-[#000000] text-white border px-4 py-2 rounded-sm hover:cursor-pointer`}
          >
            <p className={`font-medium text-[16px]`}>Log in</p>
          </button>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
