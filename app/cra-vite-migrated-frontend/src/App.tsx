import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection} from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react';
import { Program, Provider, web3, BN, AnchorProvider} from '@project-serum/anchor'
import './App.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import basic_1 from './../basic_1.json';

const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Wallets that implement either of these standards will be available automatically.
             *
             *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
             *     (https://github.com/solana-mobile/mobile-wallet-adapter)
             *   - Solana Wallet Standard
             *     (https://github.com/solana-labs/wallet-standard)
             *
             * If you wish to support a wallet that supports neither of those standards,
             * instantiate its legacy wallet adapter here. Common legacy adapters can be found
             * in the npm package `@solana/wallet-adapter-wallets`.
             */
            //new PhantomWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    const wallet = useAnchorWallet();
    function getProvider()
    {
        if (!wallet)
        {
            return null;
        }
    
    /*Create the provider and return it to the caller*/
    // Connection Local
    const network = "http://127.0.0.1:8899";
    const connection = new Connection(network,"processed");

    if(wallet !== undefined)
    {
        let provider = new AnchorProvider(connection, wallet,{"preflightCommitment":"processed"});
    }
    }
    return (
        <div className="App">
            <h1> Initial Setup! </h1>
            <button>Hey Fam</button>
            <WalletMultiButton />
        </div>
    );
};
