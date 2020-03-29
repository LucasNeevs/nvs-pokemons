import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    maxWidth: '20px',
    maxHeight: '20px',
  },
}));