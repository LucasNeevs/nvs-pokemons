import React from 'react';
import Typography from '@material-ui/core/Typography';
import MyForm from '../Components/Form/Form';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h2"
        component="p"
        color="primary"
        align="center"
        className={classes.root}
      >
        Pokedex 📲
      </Typography>
      <MyForm />
    </>
  );
};