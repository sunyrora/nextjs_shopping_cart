import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/type-def";
import { resolvers } from "../../graphql/resolvers";
import Cors from "micro-cors";

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

// export default async (req, res) => {
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://studio.apollographql.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );

//   if (req.method === "OPTIONS") {
//     res.end();
//     return false;
//   }

//   await startServer;

//   await apolloServer.createHandler({
//     path: "/api/graphql",
//   })(req, res);
// };

export const config = {
  api: {
    bodyParser: false,
  },
};
