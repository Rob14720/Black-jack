import faces from "../data/Faces.js";

const faceSuit = [
    "Diamond",
    "Heart",
    "Clubs",
    "Spades"
];


function Suits(arr) {
    for(let i = 0; i < arr.length; i++){
        const face = Math.random(faces[i]);
        const suit = Math.random(faceSuit[i]);
        return `${face} + ${suit}`;
    }
    
};

function HitButton() {
    return <button onClick={Suits}>Hit me!</button>
}

export default HitButton;