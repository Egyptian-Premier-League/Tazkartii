import React, { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import getUsers from "Services/Admins/GetUsers";
import approveUser from "Services/Admins/ApproveUser";
import { useAuth } from "Contexts/Auth-Context";
import { AdminContainer, Heading, Table, Th, Td, UserRow, Button, Section, PaginationButton, PaginationContainer } from "./Admin.styled";

const Admin = () => {
  // use this snippet to fetch data from the backend
  const [approvedUsersData, errorApprovedUsers, isLoadingApprovedUsers, dataFetchApprovedUsersData] = useFetchFunction();
  const [pendingUsersData, errorPendingUsers, isLoadingPendingUsers, dataFetchPendingUsersData] = useFetchFunction();
  const [responseOfApprove, errorOfApprove, isLoadingApprovement, dataFetchOfApprovement] = useFetchFunction();

  const auth = useAuth();

  // use states
  const [users, setUsers] = useState([]);
  const [errorMessages, setErrorMessages] = useState();
  const [currentPageApproving, setCurrentPageApproving] = useState(1);
  const [currentPagePending, setCurrentPagePending] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // effect to fetch data from the backend
  useEffect(() => {
    getUsers(dataFetchPendingUsersData, auth, currentPagePending, false, "Manager");
    getUsers(dataFetchApprovedUsersData, auth, currentPageApproving, true, "Manager");
  }, []);

  useEffect(() => {
    if (errorApprovedUsers && errorPendingUsers) {
      setErrorMessages(errorApprovedUsers);
      return;
    } else if (approvedUsersData && approvedUsersData.length > 0 && pendingUsersData && pendingUsersData.length > 0) {
      setTotalPages(Math.ceil((approvedUsersData.length + approvedUsersData.length) / 10));

      const combinedUsers = [...approvedUsersData, ...pendingUsersData];
      setUsers(combinedUsers);
    }
  }, [approvedUsersData, errorPendingUsers, errorApprovedUsers, pendingUsersData]);

  useEffect(() => {
    if (errorOfApprove) setErrorMessages(errorOfApprove);
    else if (responseOfApprove && responseOfApprove.message) alert(responseOfApprove.message, "success");
  }, [responseOfApprove, errorOfApprove]);

  // handling fuctions
  const handleApproveUser = (event, userId) => {
    event.preventDefault();
    approveUser(dataFetchOfApprovement, auth, userId);

    setUsers([...approvedUsersData, ...pendingUsersData]);
  };

  const handleRemoveUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  // filterations of users
  const approvedUsers = users.filter((user) => approvedUsersData && user.approved);
  const pendingUsers = users.filter((user) => pendingUsersData && !user.approved);

  const goToNextPageApproved = () => setCurrentPageApproving((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPreviousPageApproved = () => setCurrentPageApproving((prev) => (prev > 1 ? prev - 1 : prev));

  const goToNextPagePending = () => setCurrentPagePending((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPreviousPagePending = () => setCurrentPagePending((prev) => (prev > 1 ? prev - 1 : prev));

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
            {approvedUsersData !== undefined &&
              approvedUsers &&
              approvedUsers.map((user) => (
                <UserRow key={user.id}>
                  <Td>{user.username}</Td>
                  <Td>{`${user.firstName} ${user.lastName}`}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button onClick={() => handleRemoveUser(user.id)}>Remove</Button>
                  </Td>
                </UserRow>
              ))}
          </tbody>
        </Table>
      </Section>
      {approvedUsersData && (
        <PaginationContainer>
          <PaginationButton onClick={goToPreviousPageApproved} disabled={currentPageApproving === 1}>
            Previous
          </PaginationButton>
          <PaginationButton onClick={goToNextPageApproved} disabled={currentPageApproving === totalPages}>
            Next
          </PaginationButton>
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
                  <Td>
                    <Button flag={true} onClick={(e) => handleApproveUser(e, user.id)}>
                      Approve
                    </Button>
                    <Button flag={false} onClick={() => handleRemoveUser(user.id)}>
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
          <PaginationButton onClick={goToNextPagePending} disabled={currentPagePending === totalPages}>
            Next
          </PaginationButton>
        </PaginationContainer>
      )}
    </AdminContainer>
  );
};

export default Admin;
