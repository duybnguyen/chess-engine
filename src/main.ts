import {
  SQUARES,
  BOARD_SQUARES_NUM,
  RANKS,
  FILES,
  FILESBOARD,
  RANKSBOARD,
  getBoardSquare,
  PIECEKEYS,
  RAND_32,
  CASTLEKEYS,
  setSIDEKEY

} from "./defs";

const InitializeFilesRanksBoard = (): void => {
  let square = SQUARES.A1;

  // sets every board square to offboard
  for (let i = 0; i < BOARD_SQUARES_NUM; i++) {
    FILESBOARD[i] = SQUARES.OFFBOARD;
    RANKSBOARD[i] = SQUARES.OFFBOARD;
  }

  // for each rank, loop through each file and sets the correct file and rank for that square
  for (let rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++) {
    for (let file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
      square = getBoardSquare(file, rank);
      FILESBOARD[square] = file;
      RANKSBOARD[square] = rank;
    }
  }
};

const InitializeHashKeys = (): void => {
   for (let i = 0; i < 14 * 120; i++) {
      PIECEKEYS[i] = RAND_32()
   }

   setSIDEKEY(RAND_32())

   for (let i = 0; i < 16; i++) {
      CASTLEKEYS[i] = RAND_32();
   }
}

const main = () => {
  InitializeFilesRanksBoard();
  InitializeHashKeys()
};

main();
