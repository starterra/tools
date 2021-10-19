### How to check AirDrop ?
1. Go to our genesis airdrop contract on [Terra Finder](https://finder.terra.money/columbus-4/address/terra1q2qprmuva3m93vhjmc7vakhs0h2lelxzlt675p).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "user_info": {
        "address": "TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "claimed_amount": "100000000",
  "initial_claim_amount": "100000000",
  "current_passed_missions": {
    "is_in_lp_staking": true,
    "is_in_stt_staking": true,
    "is_in_ido": true
  }
}
```

6. Most of the above values are self explained, to be clear `claimed_amount` value tells how many of the airdrop this particular address already claimed, `initial_claim_amount` tells how many of the airdrop this particular address should be able to claim.

> PS to get exact number of tokens you have to divide each number by 1000000.