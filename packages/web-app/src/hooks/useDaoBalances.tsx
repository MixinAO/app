import {AssetBalance, TokenType} from '@aragon/sdk-client';
import {useEffect, useMemo, useState} from 'react';
import {alchemyApiKeys, CHAIN_METADATA} from 'utils/constants';

import {HookData} from 'utils/types';
import {getTokenInfo} from 'utils/tokens';
import {useSpecificProvider} from 'context/providers';
import {useNetwork} from 'context/network';
import {MVMBalance} from 'utils/types';

export const useDaoBalances = (
  daoAddress: string
): HookData<Array<AssetBalance> | undefined> => {
  const {network} = useNetwork();

  const [data, setData] = useState<Array<AssetBalance>>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const provider = useSpecificProvider(CHAIN_METADATA[network].id);

  // Construct the MVM API URL
  const url = `${CHAIN_METADATA[network].etherscanApi}?module=account&action=tokenlist&address=${daoAddress}`

  // Use the useEffect hook to fetch DAO balances
  useEffect(() => {
    async function getBalances() {
      try {
        setIsLoading(true);

        // Fetch the token list using from MVM SCAN API
        const res = await fetch(url);
        const tokenList = await res.json();
        
        let nativeTokenBalances = [] as Array<AssetBalance>;

        const fetchNativeCurrencyBalance = provider.getBalance(daoAddress);

        const erc20TokenList = tokenList.result.filter(
          (token: MVMBalance) => {
            return token.type === 'ERC-20';
          }
        );

        // Define a list of promises to fetch ERC20 token balances
        const erc20balances = erc20TokenList.map((e: MVMBalance) => (
            {
              address: e.contractAddress,
              name: e.name,
              symbol: e.symbol,
              updateDate: new Date(),
              type: TokenType.ERC20,
              balance: BigInt(e.balance),
              decimals: e.decimals,
            }
          )
        );

        // Wait for both native currency and ERC20 balances to be fetched
        const [nativeCurrencyBalance] = await Promise.all([
          fetchNativeCurrencyBalance,
        ]);

        // If the native currency balance is non-zero, add it to the list
        if (!nativeCurrencyBalance.eq(0)) {
          nativeTokenBalances = [
            {
              type: TokenType.NATIVE,
              ...CHAIN_METADATA[network].nativeCurrency,
              updateDate: new Date(),
              balance: BigInt(nativeCurrencyBalance.toString()),
            },
          ];
        }

        if (erc20balances) setData([...nativeTokenBalances, ...erc20balances]);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    if (daoAddress) getBalances();
  }, [daoAddress, network, provider, url]);

  return {data, error, isLoading};
};