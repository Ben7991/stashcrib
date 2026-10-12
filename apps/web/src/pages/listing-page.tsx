import { ListingCatalog, SiteShell, listingProducts } from "@repo/ui";

export const ListingPage = () => (
  <SiteShell>
    <ListingCatalog products={listingProducts} />
  </SiteShell>
);
