/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const GRAPH_SERVER = "http://localhost";
  const PORT = "3000";
  const GRAPH_ENDPOINT = "api/graphql";

  /* development only config options here */
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        PORT,
        GRAPH_URI: `${GRAPH_SERVER}:${PORT}/${GRAPH_ENDPOINT}`,
      },
    };
  }

  return {
    reactStrictMode: true,
  };
};
