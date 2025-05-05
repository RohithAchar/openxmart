import { getQueryClient, trpc } from "@/trpc/server";

export default async function Home() {
  const queryClient = getQueryClient();
  const user = await queryClient.fetchQuery(trpc.auth.session.queryOptions());
  return <div>USER: {JSON.stringify(user.user)}</div>;
}
