let nearestTileX, nearestTileY;

class Interface {
  constructor() {
    this.selected = "none";
  }

  drawTitle() {
    textFont(interfaceLargeFont);
    textSize(48);
    fill(147, 186, 86, 255);
    text("Cyber Tower Defence", 25, 79);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(24);
    text("Defend the network against the cyber attacks", 25, 120);
  }

  drawStats() {
    textFont(interfaceSmallFont);
    textSize(18);
    fill("red ");
    text("Enemies Killed: " + enemiesKilled, 25, 160);
    fill("black");
  }

  drawVirusInfo() {
    image(virusSprite, 25, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Virus", 30, 710);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Viruses are harmful software programs that can infect and\ndamage computer systems. To protect your computer, use\nantivirus software, keep your system and software updated," +
          " be\ncautious online, enable firewalls, use secure web browsers,\n" +
          "practice safe email habits, and regularly back up your files.\n\nPrevention is crucial in stopping viruses and safeguarding\nyour computer and data.",
        30,
        425
      );
    }
  }

  drawTrojanInfo() {
    image(trojanSprite, 25, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Trojan", 28, 810);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Trojans are malicious software programs that disguise themselves\nas legitimate files or applications, tricking users into executing\nthem." +
          " To protect your computer from Trojans, it is important to\nmaintain strong firewall protection and practicing safe browsing\n" +
          "habits.\n\nVigilance and proactive measures are essential in defending your\ncomputer and data against Trojans.",
        30,
        525
      );
    }
  }

  drawWormInfo() {
    image(wormSprite, 25, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Worm", 28, 910);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Worms are self-replicating malware that spread rapidly across\ncomputer networks. They exploit vulnerabilities to infect other\n" +
          "systems and can cause extensive damage by consuming network\nresources. To safeguard your computer, deploy an Intrusion\nDetection System (IDS)" +
          "to detect and block suspicious network\nactivity. \nIt is crucial to keep your software up to date and follow\nstrong network security practices to " +
          "prevent worm infections.",
        30,
        625
      );
    }
  }

  drawRansomewareInfo() {
    image(ransomwareSprite, 125, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Ransomware", 108, 710);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Ransomware is malicious software that encrypts your files and\ndemands a ransom for their release. To protect against\nransomware," +
          "regularly back up your files and store them in a\nsecure location. Keep your systems and software up to date, use\nreliable antivirus software," +
          "and exercise caution when opening\nemail attachments or clicking on unknown links.\nBy staying vigilant and prepared, you can defend against\n" +
          "ransomware attacks and safeguard your valuable data.",
        130,
        425
      );
    }
  }

  drawDDoSInfo() {
    image(ddosSprite, 125, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("DDoS", 133, 810);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "DDoS attacks overload a target system or network, causing\nservice disruptions. To defend against DDoS attacks, use network\nsegmentation" +
          "to isolate critical components. This prevents the\nentire network from being affected. Additionally, deploy\nspecialized tools like" +
          "Intrusion Detection Systems (IDS) to detect\nand mitigate DDoS attacks in real-time.\nBy promptly identifying and isolating malicious traffic," +
          "you can\nmaintain service availability and protect from DDoS disruptions.",
        130,
        525
      );
    }
  }

  drawSpywareInfo() {
    image(spywareSprite, 125, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Spyware", 118, 910);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Spyware is a type of malicious software that secretly collects\ninformation about a user's activities and sends it to unauthorized\nparties." +
          "Protect your computer from spyware by using reliable\nantivirus software and enabling encryption. Being cautious while\ndownloading files and" +
          " avoiding suspicious websites can also help\nprevent spyware infections.\nStay vigilant and regularly scan your system to detect and remove\nany" +
          "potential spyware threats.",
        130,
        625
      );
    }
  }

  drawAntiVirus() {
    image(antivirusSprite, width - 200, 100, 28, 57);

    if (
      mouseX >= width - 200 &&
      mouseX <= width - 172 &&
      mouseY >= 100 &&
      mouseY <= 157
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 214, 57 + 28, 60, 80);
      noStroke();
      fill("black");
      cursor("grab");

      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawAntivirusOnMouse() {
    if (this.selected == "antivirus") {
      cursor("grabbing");
      image(antivirusSprite, mouseX - 14, mouseY - 28, 28, 57);
    }
  }

  update() {
    if (mouseIsPressed != true) {
      this.selected = "none";
    }
    if (this.selected == "antivirus") {
      cursor("grabbing");
      this.drawAntivirusOnMouse();
    }
  }

  //! This is not working
  //   snap_to_nearest_road() {
  //     let minDistance = Infinity;
  //     for (let i = 0; i < GRID_SIZE; i++) {
  //       for (let j = 0; j < GRID_SIZE; j++) {
  //         if (map.grid[i][j] === 33 || map.grid[i][j] === 34) {
  //           let x_screen = map.x_start + ((i - j) * TILE_WIDTH) / 2;
  //           let y_screen = map.y_start + ((i + j) * TILE_HEIGHT) / 2;
  //           let distance = dist(mouseX, mouseY + 20, x_screen, y_screen);
  //           if (distance < minDistance) {
  //             minDistance = distance;
  //             nearestTileX = i;
  //             nearestTileY = j;
  //           }
  //         }
  //       }
  //     }
  //     let x_screen =
  //       map.x_start + ((nearestTileX - nearestTileY) * TILE_WIDTH) / 2;
  //     let y_screen = ``;
  //     map.y_start + ((nearestTileX + nearestTileY) * TILE_HEIGHT) / 2;
  //     // cursor("grab");
  //     if (minDistance < TILE_WIDTH / 2) {
  //       //   cursor("grabbing");
  //       fill(255, 0, 0);
  //       rect(x_screen, mouseY, 10, 10);
  //       //   ellipse(nearestTileX, nearestTileY, 10, 10);
  //     }
  //   }

  draw() {
    this.drawTitle();
    this.drawStats();
    this.drawRansomewareInfo();
    this.drawDDoSInfo();
    this.drawSpywareInfo();
    this.drawVirusInfo();
    this.drawTrojanInfo();
    this.drawWormInfo();
    noStroke();
    fill(30, 30, 30);
    rect(windowWidth - 270, 0, 390, height, 20);
    fill("black");
    noStroke();
    this.drawAntiVirus();
    text(this.selected, 200, 200);

    this.update();

    //! This is not working
    // this.snap_to_nearest_road();
  }
}
