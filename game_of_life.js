const CELL_SIZE = 10;
const COLUMNS = Math.floor(window.innerWidth / CELL_SIZE);
const ROWS = Math.floor(window.innerHeight / CELL_SIZE);

let grid;

function setup() {
    const canvas = createCanvas(window.innerWidth, window.innerHeight * 1.5);
    canvas.addClass('background-canvas');
    frameRate(10);
    grid = createEmptyGrid();
    randomizeGrid(grid);
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

function createEmptyGrid() {
  return new Array(COLUMNS).fill(null).map(() => new Array(ROWS).fill(false));
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