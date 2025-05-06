import { redirect } from "next/navigation";

import { caller } from "@/trpc/server";

import SignUp from "@/modules/auth/view/sign-up";

export const dynamic = "force-dynamic";

const SignUpPage = async () => {
  const session = await caller.auth.session();

  if (session.user) redirect("/");

  return <SignUp />;
};

export default SignUpPage;
