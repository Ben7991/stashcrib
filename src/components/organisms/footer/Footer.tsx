import { Link } from "react-router";
import { Send } from "lucide-react";

import { Grid } from "../../atoms/grid/Grid";
import { Headline } from "../../atoms/headline/Headline";
import { AppLogo } from "../../molecules/app-logo/AppLogo";
import {
  FIRST_SHOP_LINKS,
  SECOND_SHOP_LINKS,
  THIRD_SHOP_LINKS,
} from "./Footer.data";
import { Form } from "../../atoms/form/Form";
import { Button } from "../../atoms/button/Button";

export function Footer(): React.JSX.Element {
  return (
    <footer className="text-[0.8125em] border-t border-t-gray-200">
      <Grid>
        <Grid.Container className="py-10">
          <Grid.Row className="gap-8 md:gap-0">
            <Grid.Col className="basis-full md:basis-1/3 md:pe-4">
              <div className="mb-4">
                <AppLogo />
              </div>
              <p className="leading-4.5 mb-3">
                We are a fashion enthusiasts, interested in latest fashion
                trends for a completely new look for everyday life, work and
                occassions.
              </p>
              <p className="leading-4.5">
                We are your number one place for a refreshed complete look for
                all your fashion needs.
              </p>
            </Grid.Col>
            <Grid.Col className="basis-full md:basis-1/3 md:px-4">
              <Headline tag="h5" className="text-[#161616] mb-4">
                Shop
              </Headline>
              <div className="flex justify-between">
                <ul className="list-none space-y-1">
                  {FIRST_SHOP_LINKS.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/products?category=${item.split(" ").join("-").toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-none space-y-1">
                  {SECOND_SHOP_LINKS.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/products?category=${item.split(" ").join("-").toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="list-none space-y-1">
                  {THIRD_SHOP_LINKS.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/products?category=${item.split(" ").join("-").toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid.Col>
            <Grid.Col className="basis-full md:basis-1/3 md:ps-4">
              <Headline tag="h4" className="mb-3">
                Get notified for new arrivals.
              </Headline>
              <p className="leading-4.5 mb-4">
                Whenever new collections arrives, be the first to know about
                them and select your favorites
              </p>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address ..."
                    aria-label="Email address"
                  />
                </Form.Group>
                <Button>
                  <Send width={16} height={16} />
                  <span>Submit</span>
                </Button>
              </Form>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Grid>
      <div className="py-4 mt-4 text-center border-t border-t-gray-200">
        <p>&copy; 2026 StashCrib | All rights reserved</p>
      </div>
    </footer>
  );
}
