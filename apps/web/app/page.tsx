import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <div className="max-w-md space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">StashCrib</h1>
        <p className="text-muted-foreground text-sm">
          Shared UI lives in <code className="text-foreground">@repo/ui</code>.
          Add components with{" "}
          <code className="text-foreground">npx shadcn add … -c apps/web</code>.
        </p>
      </div>
      <Button variant='outline'>Get started</Button>
    </main>
  );
}
