import React from "react";
import {Card, Button} from 'react-bootstrap'
import PropTypes from "prop-types";

const profile = (props) => {
    const handleName = (mark) => alert(`Hello this is ${props.fullName}`)
    return (
        <div>
            <div>
                {props.children}
                    <Card.Body>
                    <Card.Title>Fullname: {props.fullName}</Card.Title>
                    <Card.Text>Profession: {props.profession}</Card.Text>
                    <Card.Text>About Me: {props.bio}</Card.Text>
                    <Button variant="primary" onClick={handleName}>Click Me</Button>
                </Card.Body>
 
</div>
        </div>
    )
}

profile.defaultProps = {
    fullName: 'FullName', 
    bio: 'Bio', 
    profession: 'Profession', 
    handleName: () => alert('My profile'),
}

profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
}

export default profile