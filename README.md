# pointless-profile-button

a button for GitHub README.md profiles that counts the number of times it was clicked

## Demo

[![pointless button](https://pointless-profile-button.vercel.app/api/button)](https://pointless-profile-button.vercel.app)

## Deploying

### Set Up Database

Set the database URL on your computer

```bash
export DATABASE_URL="..."
```

Generate tables

```bash
yarn migrate
yarn generate
```

### Set the Environment Variables on the Server

This varies from provider to provider, but the environment variable `DATABASE_URL` will need to be set manually.

### Build for Production

```bash
yarn build
```

### Start the App

```bash
yarn start
```
