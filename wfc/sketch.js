var grid, states = [], stack = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	State.init();
	imageMode(CENTER);
	grid = new Grid(new Vector(windowWidth, windowHeight), new Vector(16, 10));

	console.log(grid);
	console.log(states);
}

function draw() {
	grid.show();
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= HELPERS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= \\

function mouseClicked(event) {
	let t = grid.inside(new Vector(mouseX, mouseY));
	console.log(t);
	if (!t.collapsed)
		t.reduceEntropy();

	t.assessEdges();
	grid.collapseLowest();
}

function preload() {
	// states.push({ img: loadImage('tiles/bbbb.png'), pattern: ["b", "b", "b", "b"] });
	// states.push({ img: loadImage('tiles/bbbr.png'), pattern: ["b", "b", "b", "r"] });
	// states.push({ img: loadImage('tiles/bbrr.png'), pattern: ["b", "b", "r", "r"] });
	// states.push({ img: loadImage('tiles/brbr.png'), pattern: ["b", "r", "b", "r"] });
	// states.push({ img: loadImage('tiles/brrr.png'), pattern: ["b", "r", "r", "r"] });
	// states.push({ img: loadImage('tiles/gbgb.png'), pattern: ["g", "b", "g", "b"] });
	// states.push({ img: loadImage('tiles/gbgr.png'), pattern: ["g", "b", "g", "r"] });
	// states.push({ img: loadImage('tiles/gbrb.png'), pattern: ["g", "b", "r", "b"] });
	states.push({ img: loadImage('tiles/gbrr.png'), pattern: ["g", "b", "r", "r"] }); // f
	// states.push({ img: loadImage('tiles/gggg.png'), pattern: ["g", "g", "g", "g"] });
	// states.push({ img: loadImage('tiles/grgg.png'), pattern: ["g", "r", "g", "g"] });
	// states.push({ img: loadImage('tiles/grgr.png'), pattern: ["g", "r", "g", "r"] });
	// states.push({ img: loadImage('tiles/grrg.png'), pattern: ["g", "r", "r", "g"] });
	// states.push({ img: loadImage('tiles/grrr.png'), pattern: ["g", "r", "r", "r"] });
	// states.push({ img: loadImage('tiles/rrrr.png'), pattern: ["r", "r", "r", "r"] });
}