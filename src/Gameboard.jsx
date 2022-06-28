import React, {useState} from "react";
import GamePiece from "./GamePiece";
import "./gameBoard.css"
import gamePieceData from "./gamePieceData.json"

function Gameboard(props){

    const [moveData, setMoveData] = useState(gamePieceData)


    return(

        <div className={"game-board"}>


            <div className={"piece-container"}>

                {
                    moveData.map( move => (
                        <GamePiece
                            key = {move.id}
                            theKey = {move.id}
                            theXOstate = {move.xo}
                        />
                    ))
                }



            </div>

        </div>

    )
}

export default Gameboard;