import Head from "next/head";
import Link from "next/link";
import api from "../apiMockup/api";
import fetch from "isomorphic-fetch";

const Index = () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world! We are making the best diary app!</p>
    <Link href={{ pathname: "/user", query: { name: "simoroshka" } }}>
      <a>Click me</a>
    </Link>
  </div>
);

Index.getInitialProps = async ({ req }) => {
  /* get initial data here, return an object that will become props for the page
  
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
  */
  return {};
};

export default Index;

/*
getInitialProps receives a context object with the following properties:

pathname - path section of URL
query - query string section of URL parsed as an object
asPath - String of the actual path (including the query) shows in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
jsonPageRes - Fetch Response object (client only)
err - Error object if any error is encountered during the rendering

*/
