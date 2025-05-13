import { inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@/trpc/routers/_app";

export type CommentsGetManyOneOutput =
  inferRouterOutputs<AppRouter>["comments"]["getMany"];
