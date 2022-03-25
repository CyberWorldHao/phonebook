let phonebookData = [
  {
    name: "Jason",
    phoneNum: "010-1234567",
  },
  {
    name: "James",
    phoneNum: "011-1234567",
  },
  {
    name: "Dick",
    phoneNum: "012-2234567",
  },
  {
    name: "John",
    phoneNum: "013-3334567",
  },
  {
    name: "Jocye",
    phoneNum: "014-4444567",
  },
  {
    name: "Ben",
    phoneNum: "015-1234555",
  },
  {
    name: "Nick",
    phoneNum: "016-1234566",
  },
  {
    name: "Joe",
    phoneNum: "017-1234567",
  },
  {
    name: "Ryan",
    phoneNum: "018-1244587",
  },
  {
    name: "Ali",
    phoneNum: "019-1234569",
  },
];

if (localStorage.getItem("phonebookData")) {
  phonebookData = JSON.parse(localStorage.getItem("phonebookData"));
}

//Update the current changes(CREATE, DELETE, EDIT) to the localStorage
function updateData(newData) {
  localStorage.setItem("phonebookData", JSON.stringify(newData));
}

export { phonebookData, updateData };
