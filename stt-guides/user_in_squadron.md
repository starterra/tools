### How to check if user is in squadron ?
1. Go to our Squadron contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1a6737fj7tulyw2j9l9l8lht7e8zzqj5qg0elxe).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "user_squadron": {
        "user":"TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "user": "TERRA_WALLET_ADDRESS",
  "squadron": 27
}
```

6. Above values are self explained. The value of `squadron` is the squadron identificator (`squadronId`), by which you can find squadron name using [this](https://api.starterra.io/squadrons) endpoint.