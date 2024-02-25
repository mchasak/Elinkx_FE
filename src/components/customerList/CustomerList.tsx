import { Check, Clear, Delete, Edit } from '@mui/icons-material';
import { Button, List, ListItem, ListItemButton, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export type Customer = {
  id: number
  name: string
}

type CustomersPropsT = {
  customers: Customer[]
  onEdit: (id: number, newName: string) => void
  onDelete: (id: number) => void
}

const CustomerList = ({customers, onEdit, onDelete}: CustomersPropsT) => {
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [newName, setNewName] = useState('');

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer(customer);
    setNewName(customer.name);
  }
  
  const handleSaveClick = () => {
    if (editingCustomer) {
      onEdit(editingCustomer.id, newName);
      setEditingCustomer(null);
      setNewName('');
    }
  }

  const handleCancelClick = () => {
    setEditingCustomer(null)
    setNewName('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setNewName(value);
  }

  return (
    <List sx={{width: '100%'}}>
      {customers.map(customer => (
        <ListItem key={customer.id}>
          
          {editingCustomer?.id === customer.id ? (
            <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
              <TextField size='small' value={newName} onChange={handleInputChange} />
             <Stack direction='row' gap={1}>
              <Button variant='outlined' size='small' color='success' onClick={handleSaveClick}><Check fontSize='small'/></Button>
              <Button variant='outlined' size='small' color='error' onClick={handleCancelClick}><Clear fontSize='small'/></Button>
             </Stack>
            </Stack>
          ) : (
          <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
            {customer.name} 
            <Stack direction='row' >
              <Button color='warning' size='small' onClick={() => handleEditClick(customer)}><Edit fontSize='small'/></Button>
              <Button color='error' size='small' onClick={() => onDelete(customer.id)}><Delete fontSize='small'/></Button>
            </Stack>
          </Stack>
          )}
        
        </ListItem>
      ))}
    </List>
  )
}

export default CustomerList