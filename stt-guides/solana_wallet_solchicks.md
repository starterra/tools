### How to check Solana wallet provided during SolChicks IDO?
1. Go to our SolChicks Data Vault contract on [Terra Finder](https://finder.terra.money/mainnet/address/terra1tjkra2g2n2twjkr7l4w6tjgaeh0uymesun8cmv).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "get_data": { 
        "address": "TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "address": "TERRA_WALLET_ADDRESS",
  "data": "SOLANA_WALLET_ADDRESS"
}
```

6. `data` value is the Solana wallet address provided by `address` during this IDO