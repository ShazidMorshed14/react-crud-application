import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import "./AppStyle.css";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div>
      {users.map((user) => (
        <ListGroup className="mt-2">
          <ListGroupItem className="d-flex justify-content-spacebetween">
            <strong>{user.name}</strong>
            <div className="button-item">
              <Link
                to={`/edit/${user.id}`}
                className="btn btn-warning"
                id="edit-btn"
              >
                Edit
              </Link>
              <Button onClick={() => removeUser(user.id)} color="danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
};

export default UserList;
