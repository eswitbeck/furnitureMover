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
        this.contactPoints = {};

        switch (direction){
            case "Top":
                this.x = room.width;
                this.y = room.depth;
                break;
            case "North":
                this.x = room.width;
                this.y = room.height;
                break;
            case "East":
                this.x = room.depth;
                this.y = room.height;
                break;
            case "South":
                this.x = room.width;
                this.y = room.height;
                break;
            case "West":
                this.x = room.depth;
                this.y = room.height;
                break;
        }
    }

    move () {}
    rescale () {}
}