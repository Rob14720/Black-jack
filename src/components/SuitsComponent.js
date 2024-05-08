import faces from "../data/Faces.mjs";

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
        console.log(suit);
    }
    
};

export default Suits;