document.addEventListener('DOMContentLoaded', main);

function populateRenderingFrames () {
    const measurement = ["4", 'm'];
    const room = new Room ();
    const state = { selection: null };
    for (direction of ["North", "South", "East", "West", "Top"]) {
        const renderingDiv = document.getElementById ('rendering');
        new RenderFrame (document, renderingDiv, direction, measurement, room);
    }
}

function main () {
    populateRenderingFrames();
}
