### How to check prefund value ?
1. Go to our IDO prefund contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1yzewp648fwq7ymlfdg5h90dfzk5y2hf6kk9pdm).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "funder_info": {
        "address": "TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "available_funds": "1200000000",
  "spent_funds": "0"
}
```

6. Above values are self explained. The value of `available_funds` tells how many funds ($UST) has user deposited on contract.

> PS to get exact number of tokens you have to divide each number by 1000000.