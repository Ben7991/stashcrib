import { Shop } from "@/components/layouts/shop/Shop";

import { Button } from "@/components/atoms/button/Button";
import { Grid } from "@/components/atoms/grid/Grid";
import { Card } from "@/components/molecules/card/Card";

export default function ProductsPage() {
  return (
    <Shop>
      <main>
        <header className="border-b border-border flex justify-between px-15 items-center">
          <div className="pt-5">
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

            <h1 className="font-newsreader text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              New arrivals
            </h1>
          </div>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Eighteen pieces in wool, cotton drill, and merino. Added every
            Thursday.
          </p>
        </header>

        <div className="flex justify-between mx-15 my-2">
          <ol className="flex gap-4">
            <li>
              <Button size="lg" className="rounded-none">
                All
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="lg" className="rounded-none">
                Outerwear
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="lg" className="rounded-none">
                Shirting
              </Button>
            </li>
            <li>
              <Button variant="secondary" size="lg" className="rounded-none">
                Knitwear
              </Button>
            </li>
          </ol>
          <ol className="flex gap-4">
            <li>
              <Button variant="ghost">Cloth</Button>
            </li>
            <li>
              <Button variant="ghost">Size</Button>
            </li>
            <li>
              <Button variant="ghost">Price</Button>
            </li>
          </ol>

          <ol>
            <li className="flex gap-2">
              <Button className="rounded-none" variant="secondary">
                Sort
              </Button>
              <Button variant="ghost">Newest</Button>
            </li>
          </ol>
        </div>

        <Grid>
          <Grid.Container className="py-8">
            <Grid.Row className="-mx-2">
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
                  className="mb-6 w-full px-2 sm:w-1/2 lg:w-1/4"
                >
                  <Card className="overflow-hidden border-border rounded-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover !rounded-none"
                    />
                    <Card.Header>
                      <Card.Title className="text-sm font-normal">{product.name}</Card.Title>
                      <Card.Action className="font-medium">
                        {product.price}
                      </Card.Action>
                      <Card.Description>
                        {product.description}
                      </Card.Description>
                    </Card.Header>
                  </Card>
                </Grid.Col>
              ))}
            </Grid.Row>
          </Grid.Container>
        </Grid>
        <div className="flex justify-center p-5">
          <Button variant="outline" className="border-black rounded-none">Show 12 more</Button>
        </div>
      </main>
    </Shop>
  );
}
