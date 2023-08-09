function timeToWalk(steps, lengthOfSteps, speed) {

    let stepsInMeter = steps * lengthOfSteps;
    let meterInSeconds=speed/3.6;
    let rest = Math.floor(stepsInMeter / 500)*60;

    let time=stepsInMeter/meterInSeconds + rest;

    let hours=Math.floor(time/3600);
    let minutes=Math.floor(time/60);
    let seconds=Math.round(time%60);

    console.log(`${hours<10 ? '0':""}${hours}:${minutes<10 ? '0':""}${minutes}:${seconds<10 ? "0":""}${seconds}`)

}
