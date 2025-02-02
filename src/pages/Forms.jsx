import databaseService from "../appwrite/database";


import React from 'react'

function Forms() {
    
const data = {
    name: "tanish",
    email: "atanish6@gmial.com",
    age: 50,
    num: 123
};
let added = false;
try {
    databaseService.addDocument(data);
    added = true;
} catch (error) {
    console.error("Error adding document:", error);
}
  return (
    <div>
        hello
      {added ? ("added") : ("not added")}
    </div>
  )
}

export default Forms
