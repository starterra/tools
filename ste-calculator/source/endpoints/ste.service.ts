import axios from "axios";
import { StakerInfoQuery, StakingResult, StarTerraEnergy } from "./ste.interface";
import HttpException from "../common/http-exception";

const lcdStarTerraInstance = axios.create({
    baseURL: 'https://lcd.terra.dev/'
});

const STE_GATEWAY = "terra1x2q544xgumzukn0cnqyzpv3l576acxsp2qaaep";

export const getSteValue = async (address: string): Promise<StarTerraEnergy> => {
    const currentBlock = await getCurrentBlock();
    const stakerInfo = await getStakerInfo(address);

    return {
        address: address,
        block_time: currentBlock,
        ste_value: stakerInfo.ste_value,
        faction: stakerInfo.faction
    };
};

const getCurrentBlock = async (): Promise<number> => {
    let result: number = 0;
    try {
        const currentBlockRequest = await lcdStarTerraInstance.get("/blocks/latest");
        const { block } = currentBlockRequest.data;

        result = parseInt(block.header.height);
    } catch (e) {
        console.error((e as HttpException).message);
    }
    return result;
};

const getStakerInfo = async (address: string): Promise<StakingResult> => {
    const query: StakerInfoQuery = {
        bond_amount: {
            user: address
        }
    }
    const queryStringify = JSON.stringify(query);

    let response = await queryContract(STE_GATEWAY, queryStringify);

    return {
        ste_value: parseInt(response.ste) / 1000000,
        faction: response.faction
    }
}

const queryContract = async (address: string, message: string) =>
    await lcdStarTerraInstance
        .get(`/wasm/contracts/${address}/store?query_msg=${message}`)
        .then(response => {
            return response.data.result;
        })
        .catch(error => {
            console.error((error as HttpException).message);
        });