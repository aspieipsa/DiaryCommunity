import Link from "next/link";
import PageHeaders from "./components/PageHeaders";
import api from "../apiMockup/api";
import fetch from "isomorphic-fetch";
// we could use axios instead of fetch when we need to make requests, it is nicerer

const Index = () => (
  <div>
    <PageHeaders title={"Diary Community main page"} />>
    <p>Hello world! We are making the best diary app!</p>
    <Link href="/user?userURL=simoroshka" as="/diary/simoroshka">
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
