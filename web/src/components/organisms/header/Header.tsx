import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ShoppingCart, Command, Search, X } from "lucide-react";

import { Grid } from "../../atoms/grid/Grid";
import { AppLogo } from "../../molecules/app-logo/AppLogo";

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
              <Link to="/cart" className="relative">
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

function SearchInput(): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMode = e.metaKey || e.ctrlKey;
      if (!isMode || e.key.toLowerCase() !== "k") return;
      e.preventDefault();
      inputRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full border border-gray-[#E2E2E2] py-2.5 px-3.75 flex items-center gap-2.5 bg-[#F3F3F3] md:pe-1.5"
    >
      <Search width={18} height={18} />
      <input
        type="text"
        aria-label="Search"
        name="Search"
        ref={inputRef}
        placeholder="Search coats, knitwear, cloth..."
        className="grow outline-none font-schibsted-grotesk"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <button type="button" className="hidden">
        <X />
      </button>
      <button
        type="button"
        className="hidden md:inline-flex md:justify-center md:items-center bg-white w-9.25 h-7 border border-gray-[#E2E2E2]"
      >
        <Command width={14} height={14} />
        <span className="font-schibsted-grotesk text-[0.875rem]">K</span>
      </button>
    </div>
  );
}
