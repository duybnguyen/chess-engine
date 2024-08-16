import { BOARD_SQUARES_NUM, COLOR } from "./defs";

interface GameBoard {
  pieces: Array<number>;
  side: number;
  fiftyMove: number;
  hisply: number;
  ply: number;
  castlePerm: number;
}

// Initialize the GameBoard object with the defined structure
const gameBoard: GameBoard = {
  pieces: new Array(BOARD_SQUARES_NUM),
  side: COLOR.WHITE,
  fiftyMove: 0,
  hisply: 0,
  ply: 0,
  castlePerm: 0,
};

export default gameBoard;
