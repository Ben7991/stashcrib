import {
  LandingHero,
  NewThisWeek,
  RepairSection,
  ShopByCloth,
  SiteShell,
  landingNewProducts,
} from "@repo/ui";

export const LandingPage = () => (
  <SiteShell>
    <LandingHero />
    <ShopByCloth />
    <NewThisWeek products={landingNewProducts} />
    <RepairSection />
  </SiteShell>
);
