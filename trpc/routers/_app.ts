import { authRouter } from "@/modules/auth/server/procedures";
import { createTRPCRouter } from "../init";
import { homeRouter } from "@/modules/home/server/procedure";
import { categoriesRouter } from "@/modules/categories/server/procedure";
import { productsRouter } from "@/modules/products/server/procedures";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  home: homeRouter,
  categories: categoriesRouter,
  products: productsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
