import { Billboard, Media } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";

export const homeRouter = createTRPCRouter({
  getBillboard: baseProcedure.query(async ({ ctx, input }) => {
    const billboardData = await ctx.payload.find({
      collection: "billboard",
      depth: 1,
      pagination: false,
      limit: 1,
    });

    const data = {
      ...billboardData.docs[0],
    };

    if (!data) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Billboard not found",
      });
    }

    return data as Billboard & { image: Media };
  }),
});
