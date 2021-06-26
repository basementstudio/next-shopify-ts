# next-shopify-ts

The objective of this boilerplate is to set up everything the developer will need (in terms of configuration) to start a next + shopify + typescript project. Eslint, prettier and husky are configured to work independent of the user's IDE configuration (as long as it's vscode).

## Get Started

### Shopify Setup

You'll need to create a Shopify store and a private app for that Shopify store. To that private app, you'll need to give access to the Storefront API.

### Code Setup

Copy the `.env.example` file into `.env` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env`:

- NEXT_PUBLIC_SHOPIFY_DOMAIN is the domain of the store
- SHOPIFY_STOREFRONT_ACCESS_TOKEN is your private app's storefront api token

Finally:

```bash
yarn && yarn dev
```

## Featured Aspects of the Stack

- Typescript
- NextJS
- shopify-buy

## Things to Note

- It comes with Inter (it's better to host fonts here rather than getting them from google fonts). Remove it if you are not going to use it.
- Pages, components, etc... are located under `/src`. If you are changing this, be sure to also update `tsconfig.json`'s `baseUrl`.

---

If you found you needed to make extra config to make this work better, feel free to submit a pr suggesting your changes. Our focus is for you to get up and running with the least steps and burden as possible.

---

Let's go 🚀
