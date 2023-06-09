const wWidth = 1648;
const wHeight = 961;

let tick = 0;

let virusSprite;
let trojanSprite;
let wormSprite;
let spywareSprite;
let ransomwareSprite;
let ddosSprite;

let antivirusSpriteRight;
let antivirusSpriteLeft;

let antivirusSprites = [];
let idsSprites = [];
let firewallSprites = [];
let netSegSprites = [];
let encryptionSprites = [];
let backupSprites = [];

let map;
let network;

let interface;
let interfaceLargeFont;
let interfaceSmallFont;

let menu;

let gameMusic;
let buttonClick;

let enemies = [];
let enemiesKilled = 0;
let defenses = [];
// let enemiesEscaped = 0;

let money = 5000;
let gameState = "mainMenu";

function preload() {
  gameMusic = loadSound("./assets/sounds/music/gameMusic.mp3");
  buttonClick = loadSound("./assets/sounds/effects/click.wav");
}

function setup() {
  createCanvas(windowWidth, wHeight);
  loadAssets();
  createMap();
  interface = new Interface();
  menu = new Menu();
}

function draw() {
  if (gameState == "play") {
    //* Update the ticker
    updateTicker();
    background("white");

    //* Draw the map
    map.draw_grid();

    //* Create the enemy
    if (tick % 150 == 0) {
      createVirus();
    }

    //* Draw the enemies
    for (e in enemies) {
      enemy = enemies[e];
      enemy.draw();
    }

    for (d in defenses) {
      defenses[d].draw();
    }

    interface.draw();

    for (towerIndex in interface.towers) {
      const tower = interface.towers[towerIndex];
      if (tower !== null) {
        tower.draw();
      }
    }

    collisions();

    network.draw_grid();

    //* Control the framework

    //* Render text
    // text(enemies.length, 100, 20);

    frameRate(60);
  } else if (gameState == "mainMenu") {
    background("white");
    interface.draw();

    menu.draw();
  }
}

/* Game Engine */
function updateTicker() {
  tick++;

  if (tick == 1000) {
    tick = 0;
  }
}
function loadAssets() {
  virusSprite = loadImage("./assets/sprites/enemy/virusSprite.png");
  trojanSprite = loadImage("./assets/sprites/enemy/trojanSprite.png");
  wormSprite = loadImage("./assets/sprites/enemy/wormSprite.png");
  spywareSprite = loadImage("./assets/sprites/enemy/spywareSprite.png");
  ransomwareSprite = loadImage("./assets/sprites/enemy/ransomwareSprite.png");
  ddosSprite = loadImage("./assets/sprites/enemy/ddosSprite.png");

  interfaceLargeFont = loadFont("assets/fonts/JLSSpaceGothicR_NC.otf");
  interfaceSmallFont = loadFont("assets/fonts/JLSDataGothicC_NC.otf");

  for (let i = 1; i < 7; i++) {
    antivirusSprites.push(
      loadImage(`./assets/sprites/tools/antivirus/antivirusSprite${i}.png`)
    );
    idsSprites.push(loadImage(`./assets/sprites/tools/ids/idsSprite${i}.png`));
    firewallSprites.push(
      loadImage(`./assets/sprites/tools/firewall/firewallSprite${i}.png`)
    );
    netSegSprites.push(
      loadImage(`./assets/sprites/tools/netSeg/netSegSprite${i}.png`)
    );
    encryptionSprites.push(
      loadImage(`./assets/sprites/tools/encryption/encryptionSprite${i}.png`)
    );
    backupSprites.push(
      loadImage(`./assets/sprites/tools/backup/backupSprite${i}.png`)
    );
  }
}
function createMap() {
  map = new Map();
  map.setup();
  network = new Network();
  network.center_setup();
}

/* Enemy Functions */
function createVirus() {
  let whichSprite = "";
  let type = "";
  let spriteRand = floor(random(0, 6));
  if (spriteRand == 0) {
    whichSprite = virusSprite;
    type = "virus";
  } else if (spriteRand == 1) {
    whichSprite = trojanSprite;
    type = "trojan";
  } else if (spriteRand == 2) {
    whichSprite = wormSprite;
    type = "worm";
  } else if (spriteRand == 3) {
    whichSprite = spywareSprite;
    type = "spyware";
  } else if (spriteRand == 4) {
    whichSprite = ransomwareSprite;
    type = "ransomware";
  } else if (spriteRand == 5) {
    whichSprite = ddosSprite;
    type = "ddos";
  }

  rand = floor(random(0, 12));
  //left
  if (rand == 0) {
    enemies.push(new Enemy(15, 7, 324, 550, "left", 1, whichSprite, type));
  }
  if (rand == 1) {
    enemies.push(new Enemy(16, 7, 324, 575, "left", 2, whichSprite, type));
  }
  if (rand == 2) {
    enemies.push(new Enemy(17, 7, 324, 600, "left", 3, whichSprite, type));
  }
  //top
  if (rand == 3) {
    enemies.push(new Enemy(9, -1, 500, 200, "top", 1, whichSprite, type));
  }
  if (rand == 4) {
    enemies.push(new Enemy(9, 0, 450, 225, "top", 2, whichSprite, type));
  }
  if (rand == 5) {
    enemies.push(new Enemy(9, 1, 400, 250, "top", 3, whichSprite, type));
  }
  //bottom
  if (rand == 6) {
    enemies.push(new Enemy(23, 1, 1100, 600, "bottom", 1, whichSprite, type));
  }
  if (rand == 7) {
    enemies.push(new Enemy(23, 0, 1150, 575, "bottom", 2, whichSprite, type));
  }
  if (rand == 8) {
    enemies.push(new Enemy(23, -1, 1200, 550, "bottom", 3, whichSprite, type));
  }
  //right
  if (rand == 9) {
    enemies.push(new Enemy(17, -7, 1200, 250, "right", 1, whichSprite, type));
  }
  if (rand == 10) {
    enemies.push(new Enemy(16, -7, 1150, 225, "right", 2, whichSprite, type));
  }
  if (rand == 11) {
    enemies.push(new Enemy(15, -7, 1100, 200, "right", 3, whichSprite, type));
  }
}

// function collisions() {
//   for (let i = 0; i < interface.towers.length; i++) {
//     let tower = interface.towers[i];
//     let towerBoundingBox = {};

//     towerBoundingBox = {
//       x: tower.x,
//       y: tower.y,
//       width: tower.width,
//       height: tower.height,
//     };

//     for (let j = 0; j < enemies.length; j++) {
//       let enemy = enemies[j];
//       let enemyBoundingBox = {
//         x: enemy.isometric_x,
//         y: enemy.isometric_y,
//         width: enemy.width,
//         height: enemy.height,
//       };

//       if (
//         enemyBoundingBox.x < towerBoundingBox.x + towerBoundingBox.width &&
//         enemyBoundingBox.x + enemyBoundingBox.width > towerBoundingBox.x &&
//         enemyBoundingBox.y < towerBoundingBox.y + towerBoundingBox.height &&
//         enemyBoundingBox.y + enemyBoundingBox.height > towerBoundingBox.y
//       ) {
//         console.log("collision");
//         enemies[j].hp -= 1;
//         if (enemies[j].hp <= 0) {
//           enemies.splice(j, 1);
//         }
//       }
//     }
//   }
// }

function collisions() {
  const towerWidth = 20; // Adjust the tower width
  const towerHeight = 20; // Adjust the tower height
  const enemyWidth = 20; // Adjust the enemy width
  const enemyHeight = 20; // Adjust the enemy height

  let towerTypeDamageMap = {
    antivirus: "virus",
    ids: "trojan",
    firewall: "worm",
    netSeg: "ddos",
    encryption: "spyware",
    backup: "ransomware",
  };

  for (let i = 0; i < interface.towers.length; i++) {
    let tower = interface.towers[i];

    let towerCenterX = tower.x + tower.width / 2;
    let towerCenterY = tower.y + tower.height / 2;

    for (let j = 0; j < enemies.length; j++) {
      let enemy = enemies[j];

      let enemyCenterX = enemy.isometric_x + enemy.width / 2;
      let enemyCenterY = enemy.isometric_y + enemy.height / 2;

      if (
        Math.abs(enemyCenterX - towerCenterX) < (enemyWidth + towerWidth) / 2 &&
        Math.abs(enemyCenterY - towerCenterY) < (enemyHeight + towerHeight) / 2
      ) {
        let damageApplied = false;

        for (let type in towerTypeDamageMap) {
          if (tower.type == type && enemy.type == towerTypeDamageMap[type]) {
            enemies[j].hp -= tower.damage * 2;
            damageApplied = true;
            console.log("damage applied super effective");
            console.log("enemy health: " + enemies[j].hp);
            break;
          }
        }

        if (!damageApplied) {
          enemies[j].hp -= tower.damage / 2;
          console.log("damage applied weak");
          console.log("enemy health: " + enemies[j].hp);
        }

        tower.hp -= 1;
        if (tower.hp <= 0) {
          tower.tile.isOccupied = false;
          interface.towers.splice(i, 1);
        }
        if (enemies[j].hp <= 0) {
          money += enemies[j].moneyGain;
          enemies.splice(j, 1);
          enemiesKilled++;
        }
      }
    }
  }
}
