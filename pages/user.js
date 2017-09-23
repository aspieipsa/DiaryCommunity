import api from "../apiMockup/api";
import fetch from "isomorphic-fetch";
import PageHeaders from "./components/PageHeaders";
import UserProfile from "./components/UserProfile";

export default class Page extends React.Component {
  static async getInitialProps({ pathname, query }) {
    //console.log("REQ", req); // can be seen in the serve console, not browser
    console.log("Query", query);

    let user = await api.getUserProfileData(query.userURL);
    return {
      user
    };
  }
  render() {
    return (
      <div>
        <PageHeaders title={`Profile page of ${this.props.user.name}`} />
        <UserProfile user={this.props.user} />
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
