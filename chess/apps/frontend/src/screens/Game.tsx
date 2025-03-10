import { ChessBoard } from "../components/ChessBoard";
import { useState, useEffect } from "react";
import { useSocket } from "../hooks/useScocket";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game = () => {

    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());


    useEffect(() => {
        if(!socket) {
            return;
        }

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
                case INIT_GAME: 
                setChess(new Chess());
                setBoard(chess.board());
                    console.log("Hame Initialzed");
                    break;
                
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log("Move Made");
                    break;
                
                case GAME_OVER:
                    console.log("Game Over");  
                    break;
            }
        }
    }, [socket]);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start min-h-screen bg-gray-900 text-white px-6 py-12">
            {/* Left Side - Chessboard */}
            <div className="w-full md:w-2/3 flex justify-center">
                    <ChessBoard board = {board} className="w-full max-w-lg" />
            </div>

            {/* Right Side - Controls */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mt-8 md:mt-0">
                <h2 className="text-3xl font-bold">Game Controls</h2>

                {/* Start Game Button */}
                <button
                    className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-lg shadow-md transition"
                    onClick={() => {
                        socket.send(JSON.stringify({
                            type: INIT_GAME
                        }))
                    }}
                >
                    Start Game
                </button>
            </div>
        </div>
    );
};
