import {Col, Card as BootstrapCard} from 'react-bootstrap';
import { Card } from '../interfaces/card';

export function CardViewer({card, answerRevealed}:
     {card:Card, answerRevealed: boolean}): JSX.Element{
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
            <BootstrapCard.Text>
             <strong>Quiz</strong>: {card.Prompt}
            </BootstrapCard.Text>
            {answerRevealed && <BootstrapCard.Text>
             <strong>Correct Answer</strong>: {card.Answer}
            </BootstrapCard.Text>}
        </BootstrapCard.Body>
        </BootstrapCard>
     </Col>
}