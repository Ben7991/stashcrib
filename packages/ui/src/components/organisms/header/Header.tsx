import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

import { Grid } from '../../atoms/grid/Grid';
import { AppLogo } from '../../molecules/app-logo/AppLogo';
import { SearchInput } from './Header.client';

export function Header(): React.JSX.Element {
  return (
    <header className="py-3 border border-gray-[#E2E2E2] md:py-4">
      <Grid>
        <Grid.Container>
          <Grid.Row className="justify-between items-center gap-2.5 md:gap-0">
            <Grid.Col className="basis-3">
              <AppLogo />
            </Grid.Col>
            <Grid.Col className="order-3 basis-full md:order-0 md:basis-1/3 xl:basis-1/2">
              <SearchInput />
            </Grid.Col>
            <Grid.Col className="basis-4">
              <Link href="/cart" className="relative">
                <ShoppingCart />
                <span className="w-4 h-4 inline-block text-center absolute -top-2 -right-2 bg-black text-white text-[0.75em] font-schibsted-grotesk">
                  2
                </span>
              </Link>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Grid>
    </header>
  );
}
