var grid;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	grid = new Grid(new Vector(windowWidth, windowHeight), new Vector(30, 20));
	console.log(grid)
}

function draw() {
	grid.show()
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= HELPERS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= \\

function mouseClicked(event) {
	let t = grid.inside(new Vector(mouseX, mouseY));
	console.log(t);
	t.color = "white"
}
