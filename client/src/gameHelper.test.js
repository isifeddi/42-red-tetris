import { Createstage, checkcollision, S_WIDTH } from "./gameHelper";
let stage = [
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
  [
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
    [0, "clear"],
  ],
];

test("Test CreateStage", () => expect(Createstage()).toStrictEqual(stage));
test.only("Test Collision", () => {
  let player = {
    pos: { x: S_WIDTH / 2 - 1, y: 0 },
    tetromino: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    collided: false,
  };
  expect(checkcollision(player, stage, 0, 0)).toBeTruthy();
});
