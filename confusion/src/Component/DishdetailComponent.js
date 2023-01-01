import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(dishComments) {
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

    render() {
        let comments = null;
        if (this.props.dish != null) {
            comments = this.props.dish.comments;
        }
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(comments)}
            </div>
        );
    }

}

export default DishDetail;