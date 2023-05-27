import React, {useState, useEffect} from 'react';
import { CheckBox, FormControlLabel } from '@mui/icons-material';

const TarefaEstado = () => {
    const[TarefaEstado, setTarefaEstado] = useState('');
    return(
        <FormGroup>
  
  <FormControlLabel required control={<Checkbox />} label="Tarefa a Fazer" />
  <CheckBox>Tarefa a Fazer</CheckBox>
 
  
  
</FormGroup>


    );
}

export default TarefaEstado;