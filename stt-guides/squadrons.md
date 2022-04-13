### How to check how many users are in each squadron ?
1. Go to Squadron contract on [Terra Finder](https://finder.terra.money/columbus-5/address/terra1gffxsr22x45ag0c3705t3vhunv3jndmgqq76qy).
2. Squadron contract is dedicated and specific for each IDO.
3. Click ➔ **Query** button.
4. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

    4.1 List squadron members

```
{
  "users_per_squadron": {
      "id": SQUADRON_ID
  }
}
```

where `SQUADRON_ID` is unique identifier of specific squadron from our [Squadron Endpoint](https://api.starterra.io/squadrons).

    4.2 Count squadron members

```
{
  "users_per_squadron_cnt": {
      "id": SQUADRON_ID
  }
}
```

where `SQUADRON_ID` is unique identifier of specific squadron from our [Squadron Endpoint](https://api.starterra.io/squadrons).

5. Click ➔ **Next** button.
6. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "squadron": SQUADRON_ID,
  "users": [
    "TERRA_WALLET_ADDRESS_1",
    "TERRA_WALLET_ADDRESS_2"
  ]
}
```

or

```
{
  "squadron": SQUADRON_ID,
  "count": SQUADRON_MEMBERS,
  "ste": SUM_OF_STE_FOR_SQUADRON
}
```

6. Above values are self explained. The value of `squadron` is the squadron identificator (`squadronId`).