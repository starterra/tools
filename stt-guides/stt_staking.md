### How to check STT staking balance?
1. Go to our STT staking gateway contract on [Terra Finder](https://finder.terra.money/columbus-4/address/terra1t3sfxw28fl3ptnpnxtm30zruxma2utqvxlh794).
2. Click ➔ **Query** button.
3. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "bond_amount": {
        "user": "TERRA_WALLET_ADDRESS"
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check.

4. Click ➔ **Next** button.
5. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "user": "TERRA_WALLET_ADDRESS",
  "contract": "terra1v6cagryg27qyk7alp7lq35fttkjyn8cmd73fgv",
  "bond_amount": "AMOUNT"
}
```

6. `contract` value if not empty tells in which faction user is staking tokens, if this value is empty it means that user is not staking. Possible values are available on [StarTerra API](https://api.starterra.io/factions):

```
[
    {
        "name":"lunatics",
        "lp_contract":"terra1pyl3u0v0y7szlj8njctkhys9fvtsl6wva00fd5",
        "stt_contract":"terra1ruh00lyqux5g5zjf4gcg66clrkvk7u7e37ntut"
    },
    {
        "name":"interstellars",
        "lp_contract":"terra1snra29afr9efzt6l34wfnhj3jn90hq6rx8jhje",
        "stt_contract":"terra1v6cagryg27qyk7alp7lq35fttkjyn8cmd73fgv"
    },
    {
        "name":"degens",
        "lp_contract":"terra1pafra8qj9efnxhv5jq7n4qy0mq5pge8w4k8s2k",
        "stt_contract":"terra1z9et2n9ltdqle2s7qq0du2zwr32s3s8ulczh0h"
    }
]
```

7. In this example user is staking in Interstellars faction, so the next step is to go to this contract on [Terra Finder](https://finder.terra.money/columbus-4/address/terra1v6cagryg27qyk7alp7lq35fttkjyn8cmd73fgv)

8. Click ➔ **Query** button.

9. In the opened pop-up window ➔ **QueryMsg JSON**, paste below message:

```
{
    "staker_info": {
        "staker": "TERRA_WALLET_ADDRESS",
        "block_time": 5457746
    }
}
```

where `TERRA_WALLET_ADDRESS` is an address from Terra blockchain which you would like to check and `block_time` is the block number.

> PS to get current block number go to [terra.stake.id](https://terra.stake.id/#/).

10. Click ➔ **Next** button.

11. In respone window ➔ **JSON Output** you will receive, below message:

```
{
  "staker": "TERRA_WALLET_ADDRESS",
  "reward_index": "",
  "bond_amount": "AMOUNT",
  "pending_reward": "",
  "rewards_per_fee": [],
  "time_to_best_fee": null,
  "pending_unbond_left": 3
}
```

where the `bond_amount` is the amount of staked tokens on provided `block_time`.