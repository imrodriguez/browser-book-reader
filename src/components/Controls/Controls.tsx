import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { generateConfig } from './config';
import { useReader } from '../../context/readerContext';

interface Props {
  barColor?: string;
}

const Controls = ({ barColor }:Props): JSX.Element => {
  const context = useReader();
  const controlsConfig = generateConfig(context.state);
  const middlePosition = Math.round((controlsConfig.length - 1) / 2);

  return (
    <AppBar position="sticky" sx={{ top: 'auto', bottom: 0, backgroundColor: barColor }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {controlsConfig.map((element, index) => {
          const Icon = element.icon;

          if (element.visible === false) {
            return null
          }

          return (
            <div key={index}>
              {middlePosition === index && <span>{context.state.actualPage}/{context.state.numPages}</span>}
              <IconButton role={element.role} onClick={() => element.action && context.dispatch({ type: element.action.type })} color="inherit">
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