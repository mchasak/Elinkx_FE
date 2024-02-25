import { Check, Clear, PersonAddAlt } from '@mui/icons-material';
import { Button, Stack, TextField } from '@mui/material';
import {useState} from 'react'

type NewCustomerPropsT = {
  onAddNewCustomer: (name: string) => void;
}

const NewCustomer = ({onAddNewCustomer}: NewCustomerPropsT) => {
  const [name, setName] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleAdd = () => {
    setIsFormVisible(true)
  }

  const handleSave = () => {
    if (name.trim() !== '') {
      onAddNewCustomer(name)
      setName('');
      setIsFormVisible(false)
    }
  }

  const handleCancel = () => {
    setName('')
    setIsFormVisible(false)
  }

  return (
      <Stack>
        {!isFormVisible ? (
          <Button onClick={handleAdd} variant='contained' color='secondary' sx={{ alignItems: 'center'}} >Add new Customer <PersonAddAlt fontSize='small' sx={{ml: .5}}/></Button>
        ): (
          <Stack direction='row' alignItems='center' gap={1}>
            <TextField size='small' value={name} onChange={handleInputChange} placeholder='Customer name'/>
            <Button variant='outlined' size='small' color='success' onClick={handleSave}><Check fontSize='small'/></Button>
            <Button variant='outlined' size='small' color='error' onClick={handleCancel}><Clear fontSize='small'/></Button>
          </Stack>
        )}
        
      </Stack>
  )
}

export default NewCustomer