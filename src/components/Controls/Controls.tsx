import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { generateConfig } from './config';
import { useReader } from '../../context/readerContext';

const Controls = (): JSX.Element => {
  const context = useReader();
  const controlsConfig = generateConfig(context.state);
  const middlePosition = Math.round((controlsConfig.length - 1) / 2);

  return (
    <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {controlsConfig.map((element, index) => {
          const Icon = element.icon;

          if (element.visible === false) {
            return <></>
          }

          return (
            <div key={index}>
              {middlePosition === index && <span>{context.state.actualPage}/{context.state.numPages}</span>}
              <IconButton onClick={() => element.action && context.dispatch({ type: element.action.type })} color="inherit">
                <Icon />
              </IconButton>
            </div>
          )
        })}
      </Toolbar>
    </AppBar>
  )
};

export { Controls };