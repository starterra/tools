### How to check KYC and TOU status ?
1. Go to our KYC & TOU Vault contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1ru8qeh0mvf8m80vul84wsljqvltm6t64n8gjr0).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "is_accepted_verified": {
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
  "is_accepted": true,
  "is_verified": true
}
```

6. Above values are self explained. The value of `is_accepted` tells if the owner of this particular address accepted terms of use of our service, `is_verified` tells if the owner of this particular address passed KYC process.