import { FormControlLabel } from "@mui/material";
import React from "react";
import Checkbox from '@mui/material/Checkbox';

import './Checkbox.css'

const CheckboxComp = ({ cuisine,changeChecked  }) => {
  const { checked, label, id } = cuisine;
  return (
    
    <div>
      <FormControlLabel
      className="form-control"
        control={
          <Checkbox
            size="small"
            onChange={() => changeChecked(id)}

            checked={checked}
          />
        
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxComp;
