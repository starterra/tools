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
        // console.log({data});
    })
    .on('end', () => {
        const randomWinnersIndexes = getRandomWinners(numberOfWinners, candidates);
        randomWinnersIndexes.forEach(element => {
            resultStream.write(`${candidates[element.int].address}\n`)
        });
    });

const getRandomWinners = (quantity, array) => {
    const arr = []
    const max = array.length - 1
    while (arr.length < quantity) {
        var candidateInt = Math.floor(Math.random() * max) + 1;
        if (arr.indexOf(candidateInt) === -1) {
            let isAlreadyAdded = arr.find(e => e.address === array[candidateInt].address)
            if (isAlreadyAdded === undefined) {
                var toAdd = {
                    int: candidateInt,
                    address: array[candidateInt].address
                }
                arr.push(toAdd)
            }
        }
    }
    return (arr)
}