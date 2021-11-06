import * as fs from 'fs';
import csv from 'csv-parser';

var args = process.argv.slice(2);
const pathToData = './data/';
const candidatesStream = fs.createReadStream(`${pathToData}faction_${args[0]}.csv`);
const resultStream = fs.createWriteStream(`${pathToData}faction_lottery_${args[0]}_results.csv`);
const numberOfWinners = +args[1];
const candidates = [];



candidatesStream
    .pipe(csv())
    .on('data', (data) => {
        for (let i = 0; i < data.tickets; i++) {
            candidates.push(data)
        }
    })
    .on('end', () => {
        const randomWinnersAddresses = getRandomWinners(numberOfWinners, candidates);
        randomWinnersAddresses.forEach(element => {
            resultStream.write(`${element}\n`)
        });
    });

const getRandomWinners = (quantity, array) => {
    let winners = []
    while (winners.length < quantity) {
        let candidateIndex = Math.floor(Math.random() * array.length)
        let candidateAddress = array[candidateIndex].address
        if (winners.indexOf(candidateAddress) === -1) {
            winners.push(candidateAddress)
        }
    }
    return (winners)
}