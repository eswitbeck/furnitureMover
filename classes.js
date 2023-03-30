class FurnitureItem {
    constructor (height, width, depth, [measurement, unit], room) {
        this.ratio = 1 / measurement;
        
        this.width = width * ratio;
        this.depth = depth * ratio;
        this.height = height * ratio;

        // TODO: return to these variable names once reorientation added
        this.West = ( room.width + this.width ) / 2;  // Width = West 
        this.North = ( room.depth + this.depth ) / 2; // North = depth
        this.Up = 0; // Up = height
    }   
}

class Room {
    constructor() {

        this.width = 4;
        this.depth = 4;
        this.height = 4;

        //TODO: return to integrate ratio 
        //this.ratio = 1 / measurement;
    }
    
    rescale() {

    }
}

class RenderFrame {
    constructor (direction, [measurement, unit], room,  ) {
        this.direction = direction;
        
        switch (direction){
            case "Top":
                break;
            case "North":
                break;
            case "East":
                break;
            case "South":
                break;
            case "West":
                break;
        }

        
    }
}