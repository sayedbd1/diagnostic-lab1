 import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

 
 const Blog = ({blog}) => {
    const {name, description, img}= blog;
     return (
         <div>
             <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} height="300px"/>
                    <Card.Body>
                    <Card.Title> <h4>{name}</h4></Card.Title>
                    <Card.Text>
                    <p>{description.slice(0,100)}</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-primary">
                    <small className="text-light">Read More</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
         </div>
     );
 };
 
 export default Blog;