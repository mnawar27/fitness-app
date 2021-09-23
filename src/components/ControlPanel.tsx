import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User} from 'editable-dnd-list';


export function ControlPanel({setCard, reveal, answerRevealed}: {setCard: (c: Card)=>void, reveal:(r: boolean)=>void, answerRevealed: boolean}): JSX.Element{
    const[users, setUsers] = useState<User[]>([
        {id: '1', text: "Avocado"},
        {id: '2', text: "Banana"},
        {id: '3', text: "Blueberry"},
        {id: '4', text: "Watermelon"},
        {id: '5', text: "Passionfruit"}
    ]);
    
    function setRandomCard() {
        reveal(false);
        setCard(getRandomElement(CARDS as Card[]))

    }

    function shuffleUsers(){
        //let originalUsers = JSON.stringify(users);
       // console.log(JSON.stringify(users));
        let shuffledUsers: User[] = shuffle(users);
        //console.log(JSON.stringify(shuffledUsers));
        //console.log(originalUsers === JSON.stringify(shuffledUsers));
        setUsers([...shuffledUsers]);
    }
    
    return <Col>
    <h1> Control Panel </h1>
    <UserList users = {users} setUsers={setUsers}></UserList>
    <Button onClick = {setRandomCard} className="m-4"> Swap Curent Card </Button>
    <Button onClick= {()=> reveal(!answerRevealed)} className="m-4" > Reveal Answer </Button>
    <Button onClick= {shuffleUsers} className="m-4" > Shuffle Users </Button>
    
    </Col>
}