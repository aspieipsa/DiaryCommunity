import Head from "next/head";

const PageHeader = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      crossorigin="anonymous"
    />
  </Head>
);

export default PageHeader;
