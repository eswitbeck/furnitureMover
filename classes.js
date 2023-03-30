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

        this.frames = new Map ();
        this.add (direction)
        
    }   

    add (direction) {
        if (!this.frames.get (direction)) {
            this.frames.set (direction, renderFrame);
        }
        for ([frame, lookupTableAddress]) {
            frame[lookupTableAddress].update();
        }

    }
}

class RenderFrame {
    constructor (document, renderingDiv, direction, furnitureItem,
                 [measurement, unit], room) {
        this.direction = direction;
        this.touchingFurnitureItems = {};
        this.openAddressStack = [];
        this.lookupIndex = 0;
        const e = document.createElement ('div');
        e.setAttribute ('class', 'renderFrame');
        renderingDiv.appendChild (e);
        switch (direction){
            case "Top":
                this.x = room.width;
                this.y = room.depth;
                this.xReference = 'width';
                this.yReference = 'depth';
                break;
            case "North":
            case "South":
                this.x = room.width;
                this.y = room.height;
                this.xReference = 'width';
                this.yReference = 'height';
                break;
            case "East":
            case "West":
                this.x = room.depth;
                this.y = room.height;
                this.xReference = 'depth';
                this.yReference = 'height';
                break;
        }
        e.style['grid-area'] = direction;
        const title = document.createElement ('h5');
        title.innerText = direction;
        e.appendChild (title);
        const renderArea = document.createElement ('div');
        e.appendChild (renderArea);
    }

    add (direction) {
        const lookupTableAddress = this.openAddressStack.length === 0 
            ? this.lookupIndex
            : this.openAddressStack.pop ();
        // TODO address semantic overlap renderFrame v renderArea
        const item = new RenderedFurnitureItem (document, this, lookupTableAddress, furnitureItem, state);
        furnitureItem.add (direction);
        renderArea.appendChild (item);
    }
    requestRender (x, y, xReference, yReference) {

    }
    remove () {

    }
    move () {

    }
    rescale () {}
}

class RenderedFurnitureItem {
    constructor (document, renderFrame, lookupTableAddress, FurnitureItem, state) { 
        // do some calc
        this.x = null; // for top left corner
        this.y = null;
        this.height = null;
        this.width = null;
        const item = document.createElement('div');
        item.setAttribute ('class', 'renderedFurnitureItem');
        renderFrame.appendChild (item);
    }

    select () {
        FurnitureItem.select (state);
    }
}