### How to check LP lockup in Astroport Lockdrop?
1. Go to our Astroport Lockdrop contract on [Terra Finder](https://finder.terra.money/mainnet/address/terra1627ldjvxatt54ydd3ns6xaxtd68a2vtyu7kakj).
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
  "total_astro_rewards": "18205738462",
  "delegated_astro_rewards": "0",
  "astro_transferred": false,
  "lockup_infos": [
    {
      "terraswap_lp_token": "terra1uwhf02zuaw7grj6gjs7pxt5vuwm79y87ct5p70",
      "lp_units_locked": "1135868800",
      "withdrawal_flag": false,
      "astro_rewards": "18205738462",
      "duration": 2,
      "generator_astro_debt": "0",
      "claimable_generator_astro_debt": "0",
      "generator_proxy_debt": "0",
      "claimable_generator_proxy_debt": "0",
      "unlock_timestamp": 1641279600,
      "astroport_lp_units": null,
      "astroport_lp_token": null,
      "astroport_lp_transferred": null
    }
  ],
  "claimable_generator_astro_debt": "0",
  "lockup_positions_index": 1
}
```

6. The most important values are:
    - `lp_units_locked` amount of LP tokens locked on lockdrop contract,
    - `duration` number of weeks LP tokens are locked for,
    - `unlock_timestamp` timestamp after which you can withdraw your LP tokens (AstroLP tokens), calculated as = `config.init_timestamp + config.deposit_window + config.withdraw_window + duration*86400`