import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';



 

   function RenderDish({dish}) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    function RenderComments({dishComments}) {
        if (dishComments != null) {
            let comments = dishComments.map((comment) => {
             
                return (
                    <ListGroupItem className="border-0">
                        {comment.comment} <br />
                        -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </ListGroupItem>
                );
            });
            return (

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ListGroup className="list-unstyled">{comments}</ListGroup>
                </div>
            );
        }
        else
            return (
                <div></div>
            );

    }

    const  DishDetail = (props) =>  {
       let comments= null;
        if (props.dish != null) {
          comments=props.dish.comments
           
        }
         return (
                <div className="row">
                   
                    <RenderDish dish= {props.dish} />
                    <RenderComments dishComments= {comments}  />
                </div>
            );
       
    }



export default DishDetail;