import React from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  children: React.ReactNode;
};

export const SiteShell: React.FC<SiteShellProps> = ({ children }) => (
  <>
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </>
);
