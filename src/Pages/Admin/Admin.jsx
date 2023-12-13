import React, { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getUsers from "Services/Admins/GetUsers";
import approveUser from "Services/Admins/ApproveUser";
import deleteUsers from "Services/Admins/DeleteUser";
import { useAuth } from "Contexts/Auth-Context";
import { AdminContainer, Heading, Table, Th, Td, UserRow, Button, Section, PaginationButton, PaginationContainer } from "./Admin.styled";

const Admin = () => {
  // use this snippet to fetch data from the backend
  const [approvedUsersData, errorApprovedUsers, isLoadingApprovedUsers, dataFetchApprovedUsersData] = useFetchFunction();
  const [pendingUsersData, errorPendingUsers, isLoadingPendingUsers, dataFetchPendingUsersData] = useFetchFunction();
  const [responseOfApprove, errorOfApprove, isLoadingApprovement, dataFetchOfApprovement] = useFetchFunction();
  const [responseOfDelete, errorOfDelete, isLoadingDelete, dataFetchOfDelete] = useFetchFunction();

  // use this snippet to get the user from the context
  const auth = useAuth();

  // use states
  const [users, setUsers] = useState([]);
  const [errorMessages, setErrorMessages] = useState();

  // States for pagination
  const [currentPageApproved, setCurrentPageApproved] = useState(1);
  const [currentPagePending, setCurrentPagePending] = useState(1);

  // effect to fetch data from the backend
  useEffect(() => {
    getUsers(dataFetchPendingUsersData, auth, currentPagePending, false, "All");
    getUsers(dataFetchApprovedUsersData, auth, currentPageApproved, true, "All");
  }, [currentPagePending, currentPageApproved]);

  // effect to set the users
  useEffect(() => {
    if (errorApprovedUsers && errorPendingUsers) {
      setErrorMessages(errorApprovedUsers);
      return;
    } else if (approvedUsersData && approvedUsersData.length > 0 && pendingUsersData && pendingUsersData.length > 0) {
      const combinedUsers = [...approvedUsersData, ...pendingUsersData];
      setUsers(combinedUsers);
    }
  }, [approvedUsersData, errorPendingUsers, errorApprovedUsers, pendingUsersData]);

  // effect to handle the response of the approvement
  useEffect(() => {
    if (errorOfApprove) setErrorMessages(errorOfApprove);
    else if (responseOfApprove && responseOfApprove.message) {
      getUsers(dataFetchPendingUsersData, auth, currentPagePending, false, "All");
      getUsers(dataFetchApprovedUsersData, auth, currentPageApproved, true, "All");
      alert(responseOfApprove.message, "success");
    }
  }, [responseOfApprove, errorOfApprove]);

  // handler to approve the user
  const handleApproveUser = (event, userId) => {
    event.preventDefault();
    approveUser(dataFetchOfApprovement, auth, userId);

    setUsers([...approvedUsersData, ...pendingUsersData]);
  };

useEffect(() => {
 if (errorOfDelete) setErrorMessages(errorOfDelete);
 else if (responseOfDelete && responseOfDelete.message) {
 console.log("responseOfDelete", responseOfDelete);
   getUsers(dataFetchPendingUsersData, auth, currentPagePending, false, "All");
   getUsers(dataFetchApprovedUsersData, auth, currentPageApproved, true, "All");
   alert(responseOfDelete.message, "success");
 }
}, [errorOfDelete, responseOfDelete]);

  // handler to remove the user
  const handleRemoveUser = (event, userId) => {
    deleteUsers(dataFetchOfDelete, auth, userId);

    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  // filterations of users
  const approvedUsers = users.filter((user) => approvedUsersData && user.approved);
  const pendingUsers = users.filter((user) => pendingUsersData && !user.approved);

  // Pagination handlers
  const goToNextPageApproved = () => setCurrentPageApproved((prev) => prev + 1);
  const goToPreviousPageApproved = () => setCurrentPageApproved((prev) => prev - 1);
  const goToNextPagePending = () => setCurrentPagePending((prev) => prev + 1);
  const goToPreviousPagePending = () => setCurrentPagePending((prev) => prev - 1);

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
              <Th>Role</Th>
              <Th>Actions</Th>
            </UserRow>
          </thead>
          <tbody>
            {approvedUsersData !== undefined &&
              approvedUsers &&
              approvedUsers.map((user) => (
                <UserRow key={user.id}>
                  <Td>{user.username}</Td>
                  <Td>{`${user.firstName} ${user.lastName}`}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <Button onClick={(e) => handleRemoveUser(e,user.id)}>Remove</Button>
                  </Td>
                </UserRow>
              ))}
          </tbody>
        </Table>
      </Section>
      {approvedUsersData && (
        <PaginationContainer>
          <PaginationButton onClick={goToPreviousPageApproved} disabled={currentPageApproved === 1}>
            Previous
          </PaginationButton>
          <PaginationButton onClick={goToNextPageApproved}>Next</PaginationButton>
        </PaginationContainer>
      )}
      <Section>
        <h2>Pending Users</h2>
        <Table>
          <thead>
            <UserRow>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </UserRow>
          </thead>
          <tbody>
            {pendingUsersData !== undefined &&
              pendingUsers &&
              pendingUsers.map((user) => (
                <UserRow key={user.id}>
                  <Td>{user.username}</Td>
                  <Td>{`${user.firstName} ${user.lastName}`}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <Button $flag={"true"} onClick={(e) => handleApproveUser(e, user.id)}>
                      Approve
                    </Button>
                    <Button $flag={"false"} onClick={(e) => handleRemoveUser(e,user.id)}>
                      Remove
                    </Button>
                  </Td>
                </UserRow>
              ))}
          </tbody>
        </Table>
      </Section>
      {pendingUsersData && (
        <PaginationContainer>
          <PaginationButton onClick={goToPreviousPagePending} disabled={currentPagePending === 1}>
            Previous
          </PaginationButton>
          <PaginationButton onClick={goToNextPagePending}>Next</PaginationButton>
        </PaginationContainer>
      )}
    </AdminContainer>
  );
};

export default Admin;
