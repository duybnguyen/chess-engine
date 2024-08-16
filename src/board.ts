import { BOARD_SQUARES_NUM, COLORS, PIECES, SQUARES, PIECEKEYS, SIDEKEY, CASTLEKEYS } from "./defs";

export const getPieceIndex = (piece: number, pieceNum: number) => piece * 10 + pieceNum

interface GameBoard {
  pieces: Array<number>;
  side: number;
  fiftyMove: number; // draw condition
  hisply: number; // accounts for every move made in the game
  ply: number; // number of half moves made in the search tree
  enPassant: number;
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
  enPassant: 0,
  castlePerm: 0,
  material: new Array(2),
  pieceNum: new Array(13),
  posKey: 0
};

const generatePositionKey = () => {

   let finalKey = 0;
   let piece = PIECES.EMPTY

   for (let sq = 0; sq < BOARD_SQUARES_NUM; sq++) {
      piece = gameBoard.pieces[sq];
      if (piece != PIECES.EMPTY && piece != SQUARES.OFFBOARD) {
         finalKey ^= PIECEKEYS[(piece * 120) + sq]
      }
   }

   if (gameBoard.side == COLORS.WHITE) {
      finalKey ^= SIDEKEY
   }

   if (gameBoard.enPassant != SQUARES.NO_SQ) {
      finalKey ^= PIECEKEYS[gameBoard.enPassant]
   }

   finalKey ^= CASTLEKEYS[gameBoard.castlePerm]

   return finalKey
}
export default gameBoard;
