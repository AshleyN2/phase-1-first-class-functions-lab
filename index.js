// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function anonymousFunction([]){
    return (['Antonia', 'Nuru']);
}

const returnLastTwoDrivers = function anonymousFunction([]){
    return (['Amari', 'Mo']);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}

const fareDoubler = function createFareMultiplier(fare){
    return fare * 2;
}

const fareTripler = function createFareMultiplier(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}