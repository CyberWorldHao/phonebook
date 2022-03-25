import React, { useState } from "react";
import { phonebookData, updateData } from "./phoneBookData.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import RenderForm from "./addContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function OutputPhoneNumTab() {
  return phonebookData.map((data) => {
    return (
      <tr>
        <td>
          <b>{data.name}</b>
        </td>
        <td>
          <b>{data.phoneNum}</b>
        </td>
      </tr>
    );
  });
}

function AddContact(name, num) {
  var newContact = {};
  newContact.name = name;
  newContact.phoneNum = num;
  phonebookData.push(newContact);
  updateData(phonebookData);
}

function OutputPhoneNumList() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container">
      <h1 className="pb-5">Phone Book</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>{OutputPhoneNumTab()}</tbody>
      </Table>
      <Jumbotron>
        <h1 className="setleft pl-5">Add New Contact</h1>
        {RenderForm()}
      </Jumbotron>
    </div>
  );
}

export default OutputPhoneNumList;
