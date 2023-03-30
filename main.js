// event listener call main
document.addEventListener('DOMContentLoaded', main);


function populateRenderingFrames () {
    for (direction of ["North", "South", "East", "West", "Top"]) {
        const renderingDiv = document.getElementById('rendering');
        new RenderFrame (document, renderingDiv, direction, measurement, room);
    }
}

function main () {

}