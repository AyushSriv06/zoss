import { Color, PieceSymbol, Square } from "chess.js";

export const ChessBoard = ({ board }: { 
    board: ({ square: Square; type: PieceSymbol; color: Color } | null)[][] 
}) => {
    return (
        <div className="border-4 border-gray-700 rounded-lg shadow-lg p-2">
            {board.map((row, i) => (
                <div key={i} className="flex">
                    {row.map((square, j) => {
                        const isDark = (i + j) % 2 === 1; // Checkered pattern
                        return (
                            <div
                                key={j}
                                className={`w-12 h-12 flex justify-center items-center text-xl font-bold
                                ${isDark ? "bg-green-800" : "bg-green-400"} text-white`}
                            >
                                {square ? (
                                    <span className={square.color === "w" ? "text-white" : "text-black"}>
                                        {square.type.toUpperCase()}
                                    </span>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};
