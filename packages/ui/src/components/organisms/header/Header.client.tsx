'use client';

import { useEffect, useRef, useState } from 'react';
import { Command, Search, X } from 'lucide-react';

export function SearchInput(): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMode = e.metaKey || e.ctrlKey;
      if (!isMode || e.key.toLowerCase() !== 'k') return;
      e.preventDefault();
      inputRef.current?.focus();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
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
