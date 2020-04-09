import Phaser from "phaser";
import Troop from "./Troop.js";

export default class EvilTroop extends Troop {
  constructor(scene, owner, x, y, velocityDirection) {
    super(scene, owner, x, y, "troop--evil", velocityDirection);

    this.animKeyPrefix = "troop--evil";

    this.generateAnimations();

    this.setTint(0xffffff);
  }

  // TODO: Adding wrong key name
  generateAnimations() {
    // Create the animations we need from the player spritesheet
    const anims = this.scene.anims;
    anims.create({
      key: "troop--evil--front",
      frames: anims.generateFrameNumbers("troop--evil", { start: 0, end: 0 }),
      frameRate: 3,
      repeat: -1
    });
    anims.create({
      key: "troop--evil--back",
      frames: anims.generateFrameNumbers("troop--evil", { start: 1, end: 1 }),
      frameRate: 12,
      repeat: -1
    });
    anims.create({
      key: "troop--evil--side",
      frames: anims.generateFrameNumbers("troop--evil", { start: 2, end: 2 }),
      frameRate: 12,
      repeat: -1
    });
    this.anims.play("troop--evil--front", true); // default starting anim
  }

  destroy() {
    super.destroy();
  }
}
