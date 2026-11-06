import { Shop } from "@/components/layouts/shop/Shop";

import { Button } from "@/components/atoms/button/Button";
import { Grid } from "@/components/atoms/grid/Grid";
import { Card } from "@/components/molecules/card/Card";

export default function ProductsPage() {
  return (
    <Shop>
      <main>
        <header className="flex flex-col items-start gap-5 border-b border-border px-4 py-6 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-15">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <a
                    className="transition-colors hover:text-foreground"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-foreground">
                  New
                </li>
              </ol>
            </nav>

            <h1 className="mt-3 font-newsreader text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              New arrivals
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:max-w-sm lg:max-w-xl">
            Eighteen pieces in wool, cotton drill, and merino. Added every
            Thursday.
          </p>
        </header>

        <section
          aria-label="Product controls"
          className="mx-4 my-4 space-y-3 sm:mx-6 md:my-5 lg:mx-15"
        >
          <ol className="flex gap-2 overflow-x-auto pb-1 sm:gap-3">
            <li>
              <Button size="sm" className="rounded-none">
                All
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="sm" className="rounded-none">
                Outerwear
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="sm" className="rounded-none">
                Shirting
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="sm" className="rounded-none">
                Knitwear
              </Button>
            </li>
          </ol>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <ol className="flex flex-wrap gap-1 sm:gap-2">
              <li>
                <Button variant="ghost" size="sm">Cloth</Button>
              </li>
              <li>
                <Button variant="ghost" size="sm">Size</Button>
              </li>
              <li>
                <Button variant="ghost" size="sm">Price</Button>
              </li>
            </ol>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button className="rounded-none" variant="secondary" size="sm">
                Sort
              </Button>
              <Button variant="ghost" size="sm">Newest</Button>
            </div>
          </div>
        </section>

        <Grid>
          <Grid.Container className="py-5 sm:py-8">
            <Grid.Row className="-mx-1.5 sm:-mx-2">
              {[
                {
                  name: "Wool field coat",
                  price: "₵480",
                  image: "/shirt-1.jpg",
                  description: "Charcoal",
                },
                {
                  name: "Cotton drill overshirt",
                  price: "₵312",
                  image: "/shirt-2.jpg",
                  description: "Oatmeal",
                },

                {
                  name: "Merino Crew",
                  price: "$562",
                  image: "/shirt-1.jpg",
                  description: "Olive",
                },
                {
                  name: "Cotton drill overshirt",
                  price: "₵312",
                  image: "/shirt-2.jpg",
                  description: "Charcoal",
                },
                {
                  name: "Wool field coat",
                  price: "₵480",
                  image: "/shirt-1.jpg",
                  description: "Olive",
                },
                {
                  name: "Cotton drill overshirt",
                  price: "₵312",
                  image: "/shirt-2.jpg",
                  description: "Oatmeal",
                },
                {
                  name: "Merino Crew",
                  price: "₵562",
                  image: "/shirt-1.jpg",
                  description: "Charcoal",
                },
              ].map((product, index) => (
                <Grid.Col
                  key={`${product.name}-${index}`}
                  className="mb-5 w-1/2 px-1.5 sm:mb-6 sm:px-2 md:w-1/3 lg:w-1/4"
                >
                  <Card className="overflow-hidden border-border rounded-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover !rounded-none"
                    />
                    <Card.Header>
                      <Card.Title className="text-xs font-normal sm:text-sm">
                        {product.name}
                      </Card.Title>
                      <Card.Action className="text-xs font-medium sm:text-sm">
                        {product.price}
                      </Card.Action>
                      <Card.Description className="text-xs sm:text-sm">
                        {product.description}
                      </Card.Description>
                    </Card.Header>
                  </Card>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Grid.Container>
        </Grid>
        <div className="flex justify-center px-4 py-5 sm:py-8">
          <Button
            variant="outline"
            className="w-full max-w-xs rounded-none border-black sm:w-auto"
          >
            Show 12 more
          </Button>
        </div>
      </main>
    </Shop>
  );
}
