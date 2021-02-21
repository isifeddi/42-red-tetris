import React, { useState } from "react"
import Stage from "./Stage"
import StartBtn from "./StartBtn"
import Display from "./Display"
import Help from "./Help"
import {Createstage} from '../gameHelper'
import { StyletetrisWrapper, StyleTetris } from "./styling/StyledTetris"
import { useStage } from '../hooks/useStage'
import { usePlayer } from '../hooks/usePlayer'


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);
    
    console.log('re-render');

    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 1, collided:false })
    }

    const startGame = () => {
        setStage(Createstage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided:false })
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keycode }) => {
        if(!gameOver){
            if(keycode === 37)
                movePlayer(-1);
            else if(keycode === 39)
                movePlayer(1);
            else if(keycode === 40)
                dropPlayer();
        }      
    }

    console.log(stage[0])

    return (
        <StyletetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyleTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? <Display gameOver={gameOver} text="Game Over"/> : (
                        <div>
                            <Display text="Score" />
                            <Display text="Level" />
                            <Help />
                            <StartBtn callback={startGame}/>
                        </div>
                    )}
                </aside>
            </StyleTetris>
        </StyletetrisWrapper>

    )
}
export default Tetris;