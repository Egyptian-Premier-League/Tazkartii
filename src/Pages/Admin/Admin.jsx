import React, { useState } from "react";
import {
  AdminContainer,
  Heading,
  Table,
  Th,
  Td,
  UserRow,
  Button,
  Section,
} from "./Admin.styled";

const Admin = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "user1",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      authority: false,
    },
    {
      id: 2,
      username: "user2",
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      authority: true,
    },
    {
      id: 3,
      username: "user3",
      firstName: "Bob",
      lastName: "Doe",
      email: "BobDoe12@gmail.com",
      authority: false,
    },
    {
      id: 4,
      username: "user4",
      firstName: "Ziad",
      lastName: "Sherif",
      email: "ziadsherif@gmail.com",
      authority: false,
    },
    {
      id: 5,
      username: "user5",
      firstName: "Abdelrhman",
      lastName: "Fathy",
      email: "to7a@gmail.com",
      authority: false,
    },
  ]);

  const approveUser = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, authority: true };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const removeUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const approvedUsers = users.filter((user) => user.authority);
  const pendingUsers = users.filter((user) => !user.authority);

  return (
    <AdminContainer>
      <Heading>Admin Page</Heading>
      <Section>
        <h2>Approved Users</h2>
        <Table>
          <thead>
            <UserRow>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </UserRow>
          </thead>
          <tbody>
            {approvedUsers.map((user) => (
              <UserRow key={user.id}>
                <Td>{user.username}</Td>
                <Td>{`${user.firstName} ${user.lastName}`}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Button onClick={() => removeUser(user.id)}>Remove</Button>
                </Td>
              </UserRow>
            ))}
          </tbody>
        </Table>
      </Section>
      <Section>
        <h2>Pending Users</h2>
        <Table>
          <thead>
            <UserRow>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </UserRow>
          </thead>
          <tbody>
            {pendingUsers.map((user) => (
              <UserRow key={user.id}>
                <Td>{user.username}</Td>
                <Td>{`${user.firstName} ${user.lastName}`}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Button flag={true} onClick={() => approveUser(user.id)}>
                    Approve
                  </Button>
                  <Button flag={false} onClick={() => removeUser(user.id)}>
                    Remove
                  </Button>
                </Td>
              </UserRow>
            ))}
          </tbody>
        </Table>
      </Section>
    </AdminContainer>
  );
};

export default Admin;
