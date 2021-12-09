import React, { useContext, useState } from "react";
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
import { GlobalContext } from "../context/GlobalState";
const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    if (name) {
      e.preventDefault();
      const newUser = {
        id: Math.random(),
        name,
      };
      addUser(newUser);
      history.push("/");
    } else {
      alert("fill the form");
    }
  };

  return (
    <div>
      <Navbar color="success" dark>
        <NavbarBrand>Add Name</NavbarBrand>
      </Navbar>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          ></Input>
        </FormGroup>
        <Button type="submit" color="success">
          Submit
        </Button>{" "}
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
