var grid;

function setup() {
	createCanvas(windowWidth, windowHeight);
	grid = new Grid(new Vector(windowWidth, windowHeight), new Vector(10, 5));
	// put setup code here
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
