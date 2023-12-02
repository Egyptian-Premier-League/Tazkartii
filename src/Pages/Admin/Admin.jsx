import React, { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getUsers from "Services/Admins/GetUsers";
import approveUser from "Services/Admins/ApproveUser";
import { useAuth } from "Contexts/Auth-Context";
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
  // use this snippet to fetch data from the backend
  const [usersData, error, isLoading, dataFetch] = useFetchFunction();
  const [
    responseOfApprove,
    errorOfApprove,
    isLoadingApprovement,
    dataFetchOfApprovement,
  ] = useFetchFunction();

  const auth = useAuth();
  console.log("auth in admin", auth);

  // use states
  const [users, setUsers] = useState([]);
  const [errorMessages, setErrorMessages] = useState();
  const [numberOfPages, setNumberOfPages] = useState(1);

  // effect to fetch data from the backend
  useEffect(() => {
    getUsers(dataFetch, auth, numberOfPages, "All", "Manager");
  }, []);

  useEffect(() => {
    if (error) setErrorMessages(error);
    else if (usersData && usersData.length > 0) {
      setNumberOfPages(Math.ceil(usersData[0].count / 10));
      setUsers(usersData);
      console.log("usersData", usersData);
    }
    console.log("users", usersData);
  }, [usersData, error]);

  // handling fuctions
  const handleApproveUser = (userId) => {
    approveUser(dataFetchOfApprovement, userId);
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, authority: true };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleRemoveUser = (userId) => {
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
                  <Button onClick={() => handleRemoveUser(user.id)}>
                    Remove
                  </Button>
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
                  <Button
                    flag={true}
                    onClick={() => handleApproveUser(user.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    flag={false}
                    onClick={() => handleRemoveUser(user.id)}
                  >
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
