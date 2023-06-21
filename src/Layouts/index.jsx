import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/LayoutWrapper.module.css";
const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Docs",
    path: "/docs",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Post",
    path: "/post",
  },
  {
    label: "Users",
    path: "/users",
  },
  {
    label: "Todos",
    path: "/todos",
  },
];
const LayoutWrapper = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <ul className={styles.navList}>
        {routes.map((route, index) => {
          return (
            <li key={index} className={styles.navItem}>
              <Link
                className={pathname === route.path ? styles.active : null}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div style={{ marginTop: "50px" }}>{children}</div>
    </>
  );
};

export default LayoutWrapper;
