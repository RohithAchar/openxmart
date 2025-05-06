import { redirect } from "next/navigation";

import { caller } from "@/trpc/server";

import SignIn from "@/modules/auth/view/sign-in";

export const dynamic = "force-dynamic";

const Login = async () => {
  const session = await caller.auth.session();

  if (session.user) redirect("/");

  return <SignIn />;
};

export default Login;
