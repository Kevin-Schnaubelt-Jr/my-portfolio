const CELL_SIZE = 10;
const initialColumns = Math.floor(window.innerWidth / CELL_SIZE);
const initialRows = Math.floor(window.innerHeight / CELL_SIZE);

let COLUMNS = initialColumns;
let ROWS = initialRows;
let mouseGenerating = true;
let grid;

function setup() {
  const canvas = createCanvas(window.innerWidth, window.innerHeight * 1.15);
  canvas.addClass('background-canvas');
  frameRate(10);
  grid = createEmptyGrid();
  randomizeGrid(grid);

  // Add the event listener for the 'resize' event
  window.addEventListener('resize', handleResize);
}

function draw() {
  background(0);

  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      if (grid[x][y]) {
        fill(255);
        rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }

  grid = nextGeneration(grid);
}

function createEmptyGrid(columns, rows) {
  return new Array(columns || COLUMNS).fill(null).map(() => new Array(rows || ROWS).fill(false));
}

function handleResize() {
  resizeCanvas(window.innerWidth, window.innerHeight * 1.15);
  const newColumns = Math.floor(window.innerWidth / CELL_SIZE);
  const newRows = Math.floor(window.innerHeight / CELL_SIZE);

  const newGrid = createEmptyGrid(newColumns, newRows);

  for (let x = 0; x < Math.min(COLUMNS, newColumns); x++) {
    for (let y = 0; y < Math.min(ROWS, newRows); y++) {
      newGrid[x][y] = grid[x][y];
    }
  }

  grid = newGrid;
  COLUMNS = newColumns;
  ROWS = newRows;
}

function mouseClicked() {
  mouseGenerating = !mouseGenerating;
}

function mouseMoved() {
  if (mouseGenerating) {
    const x = Math.floor(mouseX / CELL_SIZE);
    const y = Math.floor(mouseY / CELL_SIZE);
    if (x >= 0 && x < COLUMNS && y >= 0 && y < ROWS) {
      grid[x][y] = true;
    }
  }
}

function randomizeGrid(grid) {
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      grid[x][y] = Math.random() < 0.5;
    }
  }
}

function nextGeneration(grid) {
  const newGrid = createEmptyGrid();

  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      const aliveNeighbors = countAliveNeighbors(grid, x, y);

      if (grid[x][y]) {
        newGrid[x][y] = aliveNeighbors === 2 || aliveNeighbors === 3;
      } else {
        newGrid[x][y] = aliveNeighbors === 3;
      }
    }
  }

  return newGrid;
}

function countAliveNeighbors(grid, x, y) {
  let count = 0;

  for (let offsetX = -1; offsetX <= 1; offsetX++) {
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      const newX = (x + offsetX + COLUMNS) % COLUMNS;
      const newY = (y + offsetY + ROWS) % ROWS;

      if ((offsetX !== 0 || offsetY !== 0) && grid[newX][newY]) {
        count++;
      }
    }
  }

  return count;
}
