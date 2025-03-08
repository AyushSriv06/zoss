import { ChessBoard } from "../components/ChessBoard";
import { useState, useEffect } from "react";

export const Game = () => {
    const [time, setTime] = useState(600); // 10-minute timer (600 seconds)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isPlaying, time]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start min-h-screen bg-gray-900 text-white px-6 py-12">
            {/* Left Side - Chessboard */}
            <div className="w-full md:w-2/3 flex justify-center">
                <ChessBoard className="w-full max-w-lg" />
            </div>

            {/* Right Side - Controls */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mt-8 md:mt-0">
                <h2 className="text-3xl font-bold">Game Controls</h2>

                {/* Timer Display */}
                <div className="mt-6 text-2xl font-semibold bg-gray-800 px-6 py-3 rounded-lg shadow-md">
                    ⏳ Time Left: {formatTime(time)}
                </div>

                {/* Play Button */}
                <button
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-md transition"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
};
