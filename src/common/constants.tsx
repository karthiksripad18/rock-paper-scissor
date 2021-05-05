const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const playerWon = 1
const compWon = 0;
const matchDrawn = 2;

const RPSMAP: any = {
    "1": ROCK,
    "2": PAPER,
    "3": SCISSOR
};

const ICONS = {
    ROCK: <svg className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    PAPER: <svg className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>,
    SCISSOR: <svg className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
};

const OUTCOMEMAP: any = {
    0: "Computer Won :(",
    1: "You Won :D",
    2: "Match Drawn!!!"
};

export type RPS = "ROCK" | "PAPER" | "SCISSOR" | null;
export type OUTCOME = 0 | 1 | 2;

export { ROCK, PAPER, SCISSOR, playerWon, compWon, matchDrawn, RPSMAP, OUTCOMEMAP, ICONS };