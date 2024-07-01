import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import UserNav from "./UserNav";
import { SearchModalComponent } from "./SearchComponent";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-2 py-4 sm:px-10 sm:py-5 lg:px-10 ">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt={"Desktop Logo"}
            className="w-32 hidden sm:block"
          />
          <Image
            src={MobileLogo}
            alt={"Mobile Logo"}
            className="w-8 sm:w-10 sm:hidden md:hidden xl:hidden"
          />
        </Link>
        <Suspense>
          <SearchModalComponent />
        </Suspense>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
