### How to check IDO participation ?
1. Go to our $LOOP IDO contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1wcmquav80s07phd3wc4zkshuv40wmcpurqw5t2).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "funder_info": {
        "address":"TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "is_joined": true
}
```

6. If the value of `is_joined` argument is `true` it means that this address joined this particular IDO, if `false` this address most likely didn't click `Participate` button or didn't passed all the requirements.