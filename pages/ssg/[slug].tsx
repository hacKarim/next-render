import React from "react";
import "isomorphic-unfetch";
import { Menu } from "../../src/components/Menu";

function Index(props: any) {
    console.log(props);
    return (
        <>
            <Menu />
            <h1>Test {props?.name}</h1>
            {props?.date && <p>Static site generation: {props?.date}</p>}
            <div>
                <a
                    href="https://api.zeit.co/v1/integrations/deploy/QmNYzrk6Y9P1qL6PWVTnp9fForR7FuZp8JTfFyZ71CnVVS/Z7ZOSYG4EM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Regenerate site
                </a>
            </div>
        </>
    );
}

async function getStaticProps(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getStaticProps", res, context);
    return { props: { ...res, name: context.params.slug } };
}

async function getStaticPaths(context) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/getRoutes"
    ).then((res) => res.json());
    console.log("getStaticPaths", res, context);
    return {
        paths: res
    };
}

export {
    getStaticProps as unstable_getStaticProps,
    getStaticPaths as unstable_getStaticPaths
};

export default Index;