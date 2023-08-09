function roadRadar(speed, area) {

    let speedLimit = 0;
    switch (area) {
        case "motorway": speedLimit = 130;
            break;
        case "interstate": speedLimit = 90;
            break;
        case "city": speedLimit = 50;
            break;
        case "residential": speedLimit = 20;
            break;
    }
    if (speed > speedLimit) {
        let diference=speed-speedLimit;
        let status="";
        if(diference<=20){
            status="speeding"
        }else if(diference<=40){
            status="excessive speeding"
        }else{
            status="reckless driving"
        }
        console.log(`The speed is ${diference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }


}
