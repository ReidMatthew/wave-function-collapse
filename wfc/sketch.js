var grid, imgs = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	grid = new Grid(new Vector(windowWidth, windowHeight), new Vector(30, 20));
	console.log(grid)
}

function draw() {
	grid.show()
	image(imgs[0], grid.tileDim.x * 2, grid.tileDim.y * 2, grid.tileDim.x, grid.tileDim.y)
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= HELPERS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= \\

function mouseClicked(event) {
	let t = grid.inside(new Vector(mouseX, mouseY));
	console.log(t);
	t.color = "white"
}

function preload() {
	imgs.push(loadImage('tiles/bbbb.png'));
}