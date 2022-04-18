### How to check IDO participation ?
1. Go to our specific IDO contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1wcmquav80s07phd3wc4zkshuv40wmcpurqw5t2).
2. IDO contract is dedicated and specific for each IDO.
3. Click ➔ **Query** button.
4. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "funder_info": {
        "address":"TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

5. Click ➔ **Next** button.
6. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "is_joined": true
}
```

7. If the value of `is_joined` argument is `true` it means that this address joined this particular IDO, if `false` this address most likely didn't click `Participate` button or didn't passed all the requirements.