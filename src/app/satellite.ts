export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.launchDate = launchDate;
        this.operational = operational;
    }

    shouldShowWarning() {
        let satelliteType = 'Space Debris';
        if (this.type.toUpperCase() === satelliteType.toUpperCase()) {
            return true
        } else {
            // let typeElement = document.getElementById("#warning");
            // typeElement.style.backgroundColor = 'red';
            return false
        }


        
    }

}
