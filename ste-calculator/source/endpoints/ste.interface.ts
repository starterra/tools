export interface StarTerraEnergy {
    address: string;
    block_time: number;
    ste_value: number;
    faction: string;
}

export interface StakerInfoQuery {
    bond_amount: BondAmount;
}

export interface BondAmount {
    user: string;
}

export interface StakingResult {
    ste_value: number;
    faction: string;
}