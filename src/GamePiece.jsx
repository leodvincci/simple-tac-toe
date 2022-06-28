import React, {useState} from "react";
import "./gamePiece.css";
import "./App.css"
import gamePieceData from "./gamePieceData.json"

function GamePiece(props) {

    const [gamePieceState, setGamePieceState] = useState({"id":props.theKey,"xo":props.theXOstate})




    function userMakeMove(){

        setGamePieceState( oldVal => { return {"id":oldVal.id,"xo":!oldVal.xo} })
    }
    console.log(gamePieceState)

    let xoro = ""

    function colorChange(){
        if(gamePieceState.xo){
            xoro = "O"
            return {backgroundColor:"#ae3239"}
        }else if(gamePieceState.xo === false){
            xoro = "X"
            return {backgroundColor:"darkslateblue"}
        }else if(gamePieceState.xo === null) {

        }
    }

    return (

        <div style={colorChange()} onClick={userMakeMove}  className={"game-piece"}>
            <div className={"xoro"}> {xoro} </div>
        </div>

    )
}



export default GamePiece;