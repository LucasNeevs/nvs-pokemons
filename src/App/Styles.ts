import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(2),
    marginTop: '0.5rem',
    marginBottom: '0.5rem',    
  },
}));