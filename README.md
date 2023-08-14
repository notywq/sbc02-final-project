# sbc02-final-project

# Running this Solana Project

This guide will walk you through the process of setting up and running this Solana project. It consists of an on-chain program built using Anchor and a React frontend with Vite.

## Step 1: Deploying the Solana On-Chain Program

1. Navigate to the `basic_1` folder that contains the Anchor code for the Solana on-chain program, located in `lib.rs`.
2. Open a terminal window and navigate to the `basic_1` folder using the `cd` command.
3. Build the Anchor project by running the following command:
```shell
anchor build
```
Deploy the program to the Solana network using:
```shell
anchor deploy
```
Make sure to replace the public key entries in Cargo.toml and lib.rs with the appropriate keys before deploying.

## Step 2: Setting Up the React Frontend

1. Open another terminal window.
2. Navigate to the app/cra-vite-migrated-frontend/ folder using the cd command.
3. Install the project dependencies by running:
```shell

yarn install

```
## Step 3: Running the React Frontend

With the terminal still in the app/cra-vite-migrated-frontend/ folder, start the development server by running:
```shell

yarn run start

```
This will launch the React development server.

If you want to build the production version of the frontend, run the following command instead:
```shell

yarn run build

```
This will generate a production-ready dist folder.

## Note
- Ensure that you have the necessary keys and configurations set up for both the Solana on-chain program and the React frontend.
- Keep your public and private keys secure and do not share them in public repositories.
