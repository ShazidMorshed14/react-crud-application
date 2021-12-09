import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
} from "reactstrap";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();

  const { users, editUser } = useContext(GlobalContext);

  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = Number(currentUserId);
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <div>
      <Navbar color="warning" light>
        <NavbarBrand>Edit Name</NavbarBrand>
      </Navbar>
      <Form className="mt-2" onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={selectedUser.name}
            placeholder="Enter Name"
            onChange={onChange}
            name="name"
          ></Input>
        </FormGroup>
        <Button type="submit" color="warning">
          Edit User
        </Button>{" "}
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
