/* eslint-disable @next/next/no-img-element */
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { createAirbnbHome } from "../actions";

const PlaceholderAvatarSrc =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createHomeWithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="h-6 w-6 lg:w-5 lg:h-5" />
          <img
            src={user?.picture ?? PlaceholderAvatarSrc}
            alt="user"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form action={createHomeWithId} className="w-full">
                <button type="submit" className="w-full text-start">
                  Airbnb your home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes">My Listings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favourties">My Favourites</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations">My Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav;
