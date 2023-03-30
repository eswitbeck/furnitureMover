// event listener call main
document.addEventListener('DOMContentLoaded', main);


function populateRenderingFrames (measurement, room) {
    for (direction of ["North", "South", "East", "West", "Top"]) {
        const renderingDiv = document.getElementById('rendering');
        new RenderFrame (document, renderingDiv, direction, measurement, room);
    }
}

function main () {
    const state = { selection: null };
    const measurement = ["4", 'm'];
    const room = new Room();
    populateRenderingFrames(measure, room);
}