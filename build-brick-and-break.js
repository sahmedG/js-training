function build(arr) {
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    let interval = setInterval(() => {
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
        body.appendChild(brick);
        bricks++;
        if (bricks > arr) {
            clearInterval(interval);
        }
    }, 100);
}

function repair(...ids) {
    ids.forEach((ids) => {
        let brick = getElementsById(id);
        brick.getAttribute("foundation") ? (brick.dataset.repaired = "in progress") : (brick.dataset.repaired = true);
    });
}

function destroy(){
    let bricks = document.getElementsByTagName("div");
    bricks[bricks.length - 1].remove();
}

export {build,repair,destroy};