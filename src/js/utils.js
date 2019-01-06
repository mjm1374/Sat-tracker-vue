function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isLatitude(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
}

function isLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
}

function getmarkercnt() {
    console.log("getmarkercnt: " + markers.length);
}


