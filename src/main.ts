import {
  SQUARES,
  BOARD_SQUARES_NUM,
  RANKS,
  FILES,
  FILESBOARD,
  RANKSBOARD,
  getBoardSquare,
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

const main = () => {
  InitializeFilesRanksBoard();
};

main();
