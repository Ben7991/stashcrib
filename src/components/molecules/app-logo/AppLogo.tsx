import { Link } from "react-router";

export function AppLogo(): React.JSX.Element {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-schibsted-grotesk inline-flex items-center justify-center w-7 h-7 bg-black text-white text-[0.8125em]">
        SC
      </span>
      <span className="font-newsreader text-[1.375em] text-[#161616] inline-block">
        StashCrib
      </span>
    </Link>
  );
}
