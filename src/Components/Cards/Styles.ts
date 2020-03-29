import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
  image: {};
  divider: {};
  card: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  image: {
    padding: theme.spacing(1),
    maxWidth: '100px',
    maxHeight: '100px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  divider: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  card: {
    border: '1px solid #d4d4d4',
    boxShadow: '5px 5px 5px #d4d4d4',
  },
}));