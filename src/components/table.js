
import 'fontsource-roboto'
import React from 'react';
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
//import Grid from '@material-ui/core/Grid';
import { FormControlLabel, TextField } from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
export default function Table(){
const [selectedDate, setSelectedDate] = React.useState(new Date());
const handleDateChange = (date) => {
    setSelectedDate(date);
  };
return(
    <div>
        <Container>
        <TextField style={{margin: 20}} variant="outlined" label="Primer Apellido"></TextField>
        <TextField style={{margin: 20}} variant="outlined" label="Segundo Apellido"></TextField>
        <TextField style={{margin: 20}} variant="outlined" label="Nombre(S)"></TextField>
        <ContainerField style={{margin: 20}}>
          <Text>Sexo:</Text>
          <FormControlLabel label="Hombre" control={<Checkbox color="primary"/>} />
          <FormControlLabel label="Mujer" control={<Checkbox color="secondary"/>} />         
        </ContainerField>
        <TextField style={{margin: 20}} variant="outlined" label="Lugar de Nacimiento:"></TextField>
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
        <KeyboardDatePicker style={{margin:20}}
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Container>
        
        
        
    </div>

);
}
const Container = styled.div`
display: flex;
flex-direction: column;
margin: 3vh;
flex: 1;
`;
const ContainerField = styled.div`
display: flex;
flex: auto;
flex-direction: row;
margin: 10px;
`;
const Text = styled.a`
margin: 10px;
`;


