import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import 'fontsource-roboto'
import styled from 'styled-components'
import Table from './components/table'

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <Title>Recuperar Datos personales con una CURP</Title>
      
      </header>
      <body> 
      <CurpContainer>
        <TextField label="CURP" autoCapitalize  ></TextField>
        <Button variant="contained" color="primary" style={{margin:10}}>Buscar</Button>
        </CurpContainer>
      <Table></Table>
        
      </body>
    </div>
  );
}
//styled components

const CurpContainer = styled.div`
flex: 1;
margin: 3vh;
align-self: stretch;
`;
const Title = styled.h1`
font-size: 2em;
margin: 1rem;
`;



export default App;
