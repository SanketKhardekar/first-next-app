//Static Site Generation
import { Card, CardWrapper } from "@/components/Card";
import LayoutWrapper from "@/Layouts";
import React from "react";

const Users = ({ users }) => {
  return (
    <LayoutWrapper>
      <>
        <h1>List of Users</h1>
        <CardWrapper>
          {users?.map((user) => (
            <Card key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </Card>
          )) ?? "No Data Found"}
        </CardWrapper>
      </>
    </LayoutWrapper>
  );
};

export default Users;

// This function gets called at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("getStaticProps");
  return {
    props: {
      users: data,
    },
  };
}
