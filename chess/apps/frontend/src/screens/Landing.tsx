import { useNavigate } from "react-router";

export const Landing = () => {

    const navigate = useNavigate();
    return (
        <div className="flex justify-center min-h-screen px-6">
            <div className="max-w-screen-lg w-full flex flex-col md:flex-row items-center justify-between py-16">
                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                    <img src={"/image.png"} alt="chessboard" className="max-w-sm rounded-lg shadow-lg" />
                </div>
                <div className="text-center md:text-left w-full md:w-1/2 mt-8 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Let's Play Chess Online
                    </h1>
                    <p className="text-lg text-gray-300 mt-4">
                        Join now and enjoy an immersive chess experience with players around the world.
                    </p>
                    <div className="mt-6">
                        <button onClick = {() => {
                            navigate("/game")
                        }} className="px-6 py-3 bg-green-800 hover:bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md transition">
                            Play Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
