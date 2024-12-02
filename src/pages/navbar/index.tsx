import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-20 text-xl items-center bg-transparent text-black">
        <Link href="/">
          <div className="title text-3xl font-bold ">
            <Image
              src="/Hairisma.png"
              alt="Hairisma Image"
              width={140}
              height={10}
            />
          </div>
        </Link>
        <div className="menu ">
          <ul className="flex  text-center items-center">
            <li className="px-3 hover:text-blue-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-3 hover:text-blue-500 cursor-pointer">
              <Link href="../about">About</Link>
            </li>
            <li className="px-3 hover:text-blue-500 cursor-pointer">
              <Link href="../service">Services</Link>
            </li>
            <li className="px-3 hover:text-blue-500 cursor-pointer">
              <Link href="../contact">Contact</Link>
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center text-white rounded bg-[#B009DF] h-10">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
