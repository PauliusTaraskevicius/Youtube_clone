import { DEFAULT_LIMIT } from "@/constants";
import { TrendingVIew } from "@/modules/home/ui/components/views/trending-view";

import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

const Page = async () => {
  void trpc.videos.getManyTrending.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <TrendingVIew />
    </HydrateClient>
  );
};

export default Page;
