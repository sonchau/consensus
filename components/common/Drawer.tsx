import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const drawerContainer = {
    'text-align': 'right',
    marginBottom: '1rem'
}
interface Props {
  buttonText: string
  component: JSX.Element[] | JSX.Element
}
//const BackNext:  React.FC<Props> = ({backHref, nextHref, asBackHref, asNextHref}) => (

const DrawerComponent:React.FC<Props> = ({buttonText, component}) => {
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div style={drawerContainer}>
      <button className="button" onClick={toggleDrawer('right', true)}>{buttonText}</button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {component}
      </Drawer>
    </div>
  );
}
export default DrawerComponent;
