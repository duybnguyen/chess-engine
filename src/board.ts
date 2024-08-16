import { BOARD_SQUARES_NUM, COLORS } from "./defs";

export const getPieceIndex = (piece: number, pieceNum: number) => piece * 10 + pieceNum

interface GameBoard {
  pieces: Array<number>;
  side: number;
  fiftyMove: number; // draw condition
  hisply: number; // accounts for every move made in the game
  ply: number; // number of half moves made in the search tree
  enPassent: number;
  castlePerm: number;
  material: Array<number>;
  pieceNum: Array<number>;
  posKey: number // a unique key for a specific position in a game to detect move repetitions 
}

// Initialize the GameBoard object with the defined structure
const gameBoard: GameBoard = {
  pieces: new Array(BOARD_SQUARES_NUM),
  side: COLORS.WHITE,
  fiftyMove: 0,
  hisply: 0,
  ply: 0,
  enPassent: 0,
  castlePerm: 0,
  material: new Array(2),
  pieceNum: new Array(13),
  posKey: 0
};

export default gameBoard;
