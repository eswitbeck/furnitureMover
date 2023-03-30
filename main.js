// event listener call main
document.addEventListener('DOMContentLoaded', main);


function populateRenderingFrames () {
    for (direction of ["North", "South", "East", "West", "Top"]) {
        const renderingDiv = document.getElementById('rendering');
        const measurement = ["4", 'm'];
        const room = new Room ();
        new RenderFrame (document, renderingDiv, direction, measurement, room);
    }
}

function main () {
    populateRenderingFrames ();
}