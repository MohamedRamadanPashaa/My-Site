import Link from "next/link";
import Logo from "./logo";

import classes from "./main-navigation.module.css";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href={"/posts"}
              className={
                router.pathname.includes("posts") ? classes.active : ""
              }
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className={
                router.pathname.includes("contact") ? classes.active : ""
              }
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
