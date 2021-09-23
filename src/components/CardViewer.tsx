import {Col, Card as BootstrapCard} from 'react-bootstrap';
import { Card } from '../interfaces/card';

export function CardViewer({card}: {card:Card}): JSX.Element{
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
            <BootstrapCard.Text>
             <strong>Quiz</strong>: {card.Prompt}
            </BootstrapCard.Text>
            <BootstrapCard.Text>
             <strong>Correct Answer</strong>: {card.Answer}
            </BootstrapCard.Text>
        </BootstrapCard.Body>
        </BootstrapCard>
     </Col>
}