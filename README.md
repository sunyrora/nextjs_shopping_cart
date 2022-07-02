This is a [Next.js](https://nextjs.org/) **`Shopping cart`** project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app),

- GraphQL with ApolloServer/Client.
- Local state management with ApolloClient's ReactiveVariable.

[View Deom page](https://nextjs-shopping-cart-eight.vercel.app/)

[<img src="./doc_img/demoImg.png" height="200" />](https://nextjs-shopping-cart-eight.vercel.app/)

## Getting Started

run this command below in your console

```bash
npm install

npm run dev
```

The server will be started with a port number 3000.

Open http://localhost:3000 with your browser to see the result.

If you want to change the port number:

> 1. Open the `package.json` file.
> 2. On `dev` script, change the --port number to the number you want.
> 3. Open the `next.config.js` file.
> 4. Change the value of the `PORT` to the same number you defiend above in the package.json

\
<br>

## In the `next.config.js` file, ther is <mark>`GRAPH_URI`</mark> under the `env` configuration. This will be the graphql endpoint.

> So the default value here is: http://localhost:3000/api/graphql

<br>

## It's for the development, when you deploy it on a host server, set **`GRAPH_URI`** environment variable to the hosted adress on your hosting service site like below.

> [YOUR HOST ADRESS]**/api/graphql**

\
<br>

---

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
