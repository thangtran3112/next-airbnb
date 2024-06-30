import { Button } from "@/components/ui/button";
import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import type { ReactNode } from "react";

export default async function LayoutCreation({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) {
    return (
      <div className="w-[75%] mx-auto mt-10 mb-12 flex flex-col">
        <h1 className="font-medium text-xl mb-5">
          Please Login to create a listing
        </h1>
        <Button variant="default" size="sm" className="w-20">
          <LoginLink>Login</LoginLink>
        </Button>
      </div>
    );
  }
  return <div className="mt-10">{children}</div>;
}
