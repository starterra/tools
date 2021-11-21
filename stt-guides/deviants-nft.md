### How to check NFT from Deviants?
1. Go to Deviants Factions contract on [Terra Finder](https://finder.terra.money/mainnet/address/terra1tv5hu9d2hw4q9tn4x30870ae0e4mrttqj0fcv6).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "tokens": {
        "owner":"TERRA_WALLET_ADDRESS",
        "limit": 10
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "tokens": [
    "9801"
  ]
}
```

6. If the `tokens` array is not empty it means that this address hold at least one NFT, if else this address do not hold any NFT from Deviants Factions.