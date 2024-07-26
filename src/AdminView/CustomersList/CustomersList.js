import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, Button, IconButton, Snackbar, MenuItem, Select, FormControl, InputLabel,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [usertypeFilter, setUsertypeFilter] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('https://aversaherbals.com/api/users/');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUsertypeChange = (event) => {
    setUsertypeFilter(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://aversaherbals.com/api/users/${id}/`);
      setCustomers(customers.filter((customer) => customer.id !== id));
      setSnackbarMessage('Customer deleted successfully');
      setSnackbarOpen(true);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error deleting customer:', error);
      setSnackbarMessage('Error deleting customer');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleOpenDialog = (customer) => {
    setSelectedCustomer(customer);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCustomer(null);
  };

  const uniqueUsertypes = [...new Set(customers.map(customer => customer.usertype))];

  const filteredCustomers = customers.filter(
    (customer) =>
      (customer.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.mobile.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (usertypeFilter === '' || customer.usertype === usertypeFilter)
  );

  return (
    <div>
      <FormControl fullWidth margin="normal">
        <InputLabel>Usertype</InputLabel>
        <Select
          value={usertypeFilter}
          onChange={handleUsertypeChange}
          label="Usertype"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {uniqueUsertypes.map((usertype, index) => (
            <MenuItem key={index} value={usertype}>
              {usertype}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell>Usertype</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.username}</TableCell>
                <TableCell>{customer.first_name}</TableCell>
                <TableCell>{customer.last_name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.mobile}</TableCell>
                <TableCell>{customer.street}</TableCell>
                <TableCell>{customer.city}</TableCell>
                <TableCell>{customer.state}</TableCell>
                <TableCell>{customer.zip}</TableCell>
                <TableCell>{customer.usertype}</TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleOpenDialog(customer)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Customer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the following customer?
          </DialogContentText>
          {selectedCustomer && (
            <div>
              <p><strong>Username:</strong> {selectedCustomer.username}</p>
              <p><strong>First Name:</strong> {selectedCustomer.first_name}</p>
              <p><strong>Last Name:</strong> {selectedCustomer.last_name}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Mobile:</strong> {selectedCustomer.mobile}</p>
              <p><strong>Street:</strong> {selectedCustomer.street}</p>
              <p><strong>City:</strong> {selectedCustomer.city}</p>
              <p><strong>State:</strong> {selectedCustomer.state}</p>
              <p><strong>Zip:</strong> {selectedCustomer.zip}</p>
              <p><strong>Usertype:</strong> {selectedCustomer.usertype}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            No
          </Button>
          <Button onClick={() => handleDelete(selectedCustomer.id)} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default CustomersList;
