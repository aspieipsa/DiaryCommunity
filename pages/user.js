import Head from "next/head";
import api from "../apiMockup/api";
import fetch from "isomorphic-fetch";

export default class Page extends React.Component {
  static async getInitialProps({ pathname, query }) {
    //console.log("REQ", req); // can be seen in the serve console, not browser
    console.log("Query", query);
    let user = await api.getUserProfileData(query.name);
    return {
      user
    };
  }
  render() {
    let { name, info } = this.props.user;
    return (
      <div>
        <Head>
          <title>Diary is the best, {name}!</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h3>Hello {name}!</h3>
        <h4>Here is your profile info: </h4>
        <p>{info}</p>
      </div>
    );
  }
}

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
