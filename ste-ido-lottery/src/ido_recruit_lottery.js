import * as fs from 'fs';
import csv from 'csv-parser';

const pathToData = './data/';
const candidatesStream = fs.createReadStream(`${pathToData}recruits.csv`);
const resultStream = fs.createWriteStream(`${pathToData}recruits_lottery_results.csv`);
const numberOfWinners = 999;
const candidates = [];

candidatesStream
    .pipe(csv())
    .on('data', (data) => {
        for (let i = 0; i < data.tickets; i++) {
            candidates.push(data)
        }
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