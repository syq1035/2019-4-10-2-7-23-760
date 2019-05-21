module.exports = function main(inputs) {
    let distancePrice = 0 ;
    let distance = inputs.distance;
    let parkTimePrice = inputs.parkTime * 0.25;

    if(distance <= 2){
        distancePrice = 6;
    }else if(inputs.distance > 8){
        distancePrice = 10.8 + 1.2*(distance-8);
    }else{
        distancePrice = 6 + 0.8*(distance-2);
    }
    let summary = Math.round(distancePrice + parkTimePrice);
    
    return summary;
};
