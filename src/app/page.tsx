'use client'

import {useEffect, useState} from 'react'
import CustomerList, { Customer } from '@/components/customerList/CustomerList'
import NewCustomer from '@/components/newCustomer/NewCustomer';
import { Container, Stack, Typography } from '@mui/material';
import { ThemeProviderWrapper } from '@/theme/ThemProvider';

export default function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

  useEffect(() => {
      fetch(`${SERVER_URL}/customers`)
          .then(response => response.json())
          .then((data: Customer[]) => setCustomers(data))
          .catch(error => console.error('Error fetching customers:', error));
  }, []);

  const handleAddNewCustomer = (name: string) => {
    fetch(`${SERVER_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name})
    })
    .then(response => response.json())
    .then((newCustomer: Customer) => {
      setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
    })
    .catch(error => console.error('Error adding new customer:', error));
  }

  const handleDelete = (id: number) => {
      fetch(`${SERVER_URL}/customers/${id}`, {
          method: 'DELETE'
      })
      .then(() => {
          setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== id));
      })
      .catch(error => console.error('Error deleting customer:', error));
  };

  const handleEdit = (id: number, newName: string) => {
      fetch(`${SERVER_URL}/customers/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: newName })
      })
      .then(() => {
          setCustomers(prevCustomers => prevCustomers.map(customer => {
              if (customer.id === id) {
                  return { ...customer, name: newName };
              }
              return customer;
          }));
      })
      .catch(error => console.error('Error updating customer:', error));
  };

  return (
    <main>
      <ThemeProviderWrapper>
          <Stack alignItems='center' maxWidth={900} margin='80px auto'>
            <Stack direction='row' gap={2} alignItems='center' mb={3}>
              <Typography variant='h2'>Customer list</Typography>
              <NewCustomer onAddNewCustomer={handleAddNewCustomer} />
            </Stack>
            <CustomerList
              customers={customers}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </Stack>
      </ThemeProviderWrapper>
    </main>
  )
}