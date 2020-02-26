import React from "react";
import Link from "next/link";
import styles from "./Menu.module.scss";

function Menu() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a>Home SPA</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/hello-world">
                <a>Static SPA</a>
            </Link>
            <Link href="/ssg/[slug]" as="/ssg/hello-world2">
                <a>Static SPA 2</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/hello-world">
                <a>SSR</a>
            </Link>
            <Link href="/ssr/[slug]" as="/ssr/hello-world2">
                <a>SSR 2</a>
            </Link>
            <Link href="/spa/[slug]" as="/spa/hello-world">
                <a>SSR SPA</a>
            </Link>
            <Link href="/spa/[slug]" as="/spa/hello-world2">
                <a>SSR SPA 2</a>
            </Link>
        </nav>
    );
}

export { Menu };
