class Satelite {
    constructor(id, satname, intDesignator = "", launchDate = "", satlat = "", satlng = "", satalt = "") {
        this.satid = id;
        this.satname = satname;
        this.intDesignator = intDesignator;
        this.launchDate = launchDate;
        this.satlat = satlat;
        this.satlng = satlng;
        this.satalt = satalt;
        this.changeName = function (name) {
            this.satname = name;
        };
        this.SatDesignation = function () {
            return this.satname + " (" + this.id + ")";
        };
    }
}

/*Constructor function for current location
 *
 * Defaults to Philly, cause Philly rules!
 */
class setLocation {
    constructor(lat = '40.079', lng = '-75.160', alt = '0') {
        this.setLat = lat;
        this.setLng = lng;
        this.setAlt = alt;
    }
}
