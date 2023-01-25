import { useState } from "react";
import "../CSS/Votes.css";

export function Votes() {
    const [ChocolateVotes, setChocolatevotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    
    function getTotal() {
        return ChocolateVotes + strawberryVotes + vanillaVotes;
    }
    
    function displayPercentage(n:number, total:number) {
        if(total === 0) {
            return '0.0%'
        }
        else {
            return (n/total * 100).toFixed(1) + "%";
        }
    }
    
    return(
        <div className="Votes">
            <h2>Vote</h2>
            <div className="button-bar">
               <button onClick={() => setChocolatevotes(ChocolateVotes + 1)}>Chocolate</button>
               <button onClick={() => setStrawberryVotes(ChocolateVotes + 1)} >Strawberry</button>
               <button onClick={() => setVanillaVotes(ChocolateVotes + 1)}>Vanilla</button> 
            </div>
            {getTotal() === 0 ?
            <>
            <p>No one has voted yet!</p>
            </>
            :
            <>
            <p>
            <label> Chocolate </label> {ChocolateVotes} ({displayPercentage(ChocolateVotes, getTotal())})
            </p>
            <progress className="progressChocolate" value={ChocolateVotes / getTotal()}></progress>
            <p>
            <label> Strawberry </label> {strawberryVotes} ({displayPercentage(strawberryVotes, getTotal())})
            </p>
            <progress className="progressStrawberry" value={strawberryVotes / getTotal()}></progress>
            <p>
            <label> Vanilla </label> {vanillaVotes} ({displayPercentage(vanillaVotes, getTotal())})
            </p>
            <progress className="progressVanilla" value={vanillaVotes / getTotal()}></progress>
            </>
        }
        </div>
    )
}