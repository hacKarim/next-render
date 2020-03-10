import "isomorphic-unfetch";
import { Regenerate } from "../../src/components/Regenerate";
import Link from "next/link";

function Index(props: any) {
    return (
        <>
            <h1>SSG [{props?.name}]</h1>
            <p>
                This page is statically generated and does not update until
                redeployed. You'll notice that the "Page generated on:" date
                doesn't change until the website is redeployed. Use the
                "Regenerate site" link below to redeploy.
            </p>
            <p>Some of the effects of SSG:</p>
            <ul>
                <li>Short TTFB (can compete with CSR)</li>
                <li>Static data (can be stale if not used correctly)</li>
                <li>No flickering caused by rendering dynamic data</li>
                <li>SPA capable</li>
            </ul>
            <p>With `fallback: true`:</p>
            <ul>
                <li>
                    <p>
                        Slugs not explicitly handled by `getStaticPaths` for
                        static generation can be statically generated upon first
                        visit. Try it out by visiting some non-sense url like:
                    </p>
                    <Link
                        href="/ssg/[slug]"
                        as="/ssg/sadasdasdasdasdasdqweqwdeasdqweqw"
                    >
                        <a>nonsensical SSG URL</a>
                    </Link>
                    <p>
                        Subsequent visits to this weird URL will then serve up
                        the statically generated version.
                    </p>
                </li>
            </ul>
            <p>
                This implementation uses <i>getStaticProps</i> and{" "}
                <i>getStaticPaths</i>.
            </p>
            <Regenerate date={props?.date} />
        </>
    );
}

export async function getStaticProps(context: any) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/test"
    ).then((res) => res.json());
    console.log("getStaticProps", res, context.params, context.query);
    return { props: { ...res, name: context.params.slug ?? context.query } };
}

export async function getStaticPaths(context: any) {
    const res = await fetch(
        "https://static-next.willemliu.now.sh/api/getRoutes"
    ).then((res) => res.json());
    console.log("getStaticPaths", res, context);
    return {
        paths: res,
        fallback: true
    };
}

export default Index;
