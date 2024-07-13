import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import UserNav from "./UserNav";
import { SearchModalComponent } from "./SearchComponent";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b xl:max-w-[1440px]">
      <div className="flex items-center justify-between container mx-auto px-2 py-4 sm:px-6 sm:py-5 md:px-10 lg:px-10 ">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt={"Desktop Logo"}
            className="w-32 hidden md:block"
          />
          <Image
            src={MobileLogo}
            alt={"Mobile Logo"}
            className="w-10 sm:w-12 md:hidden xl:hidden"
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
