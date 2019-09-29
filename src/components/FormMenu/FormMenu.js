import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect({competitions, handleMenuChanges}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    league:'',
    fixture:'',
    competitionId: 0,
    area: ''
  });

  const handleChangeLeague = (event) => {
      setState({...state, 
        league: event.target.value.name,
        competitionId: event.target.value.id,
        area: event.target.value.area
      });
      // console.log(event.target)
     }
  

  const handleChangeFixture = (event) => {
    setState({...state, fixture: event.target.value});
     }

  const handleClickOk = (event) => {
    handleMenuChanges({
      league:state.league,
      fixture: state.fixture,
      competitionId: state.competitionId,
      area: state.area
    })
    // console.log('handleClickOk',
    //   state.fixture,
    //   state.competitionId)
  }

  const handleClickOpen = () => {
    setState({ ...state, open: true });
    // console.log('competitions', competitions)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Choose League</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">League</InputLabel>
              <Select
                value={state.league}
                onChange={handleChangeLeague}
                input={<Input id="name" />}
              >
             {competitions.map((competition, i) => (
                  <option 
                  key={i}
                  value={{
                    name: competition.name,
                    id: competition.id,
                    area: competition.area.name
                  }}
                  >{competition.name} - {competition.area.name}</option>
                  ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Fixture</InputLabel>
              <Select
                value={state.fixture}
                onChange={handleChangeFixture}
                input={<Input id="age-native-simple" />}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
          onClick=
          {(event) => {
            handleClose(event)
            handleClickOk(event)}} 
          color="primary">
          Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} 
