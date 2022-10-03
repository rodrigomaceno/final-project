import React from 'react';
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

export default class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            id: props.id,
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
        };
    } 
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>
                        {this.state.synopsis}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        );
    }

}