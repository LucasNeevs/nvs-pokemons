import React, { useState } from 'react';
import { 
  Grid, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, 
  Typography, Divider,
} from '@material-ui/core';
import { dataPokes } from './ICard';
import useStyles from './Styles';
import Moment from 'moment';
import CheckBirthday from '../../Controllers/Birthday/Birthday';
import PokeCheck from '../../Controllers/PokeCheck/PokeCheck';
import CPCheck from '../../Controllers/CP/CP';
import TypeCheck from '../../Controllers/Type/Type';

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles();
  const [state] = useState(dataPokes);
  const rowPokes: React.ReactNode[] = [];

  for (let i = 1; i < state.names.length; i++) {
    const rotulo = PokeCheck(state.pokemons[i]);

    rowPokes.push(
      <Grid item md={3} xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.image}
            component="img"
            image={`${rotulo}`}
            title="Bulbassaur"
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                <b>Coach: </b>{state.names[i]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Age: </b>
                {
                  Moment(state.ages[i]).format('MMMM Do YYYY')
                }
                {
                  CheckBirthday(Moment(state.ages[i])
                    .format('MMMM Do YYYY')
                  )
                }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Gender: </b>{state.genders[i]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Area: </b>{state.areas[i]}
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Pokemon: </b>{state.pokemons[i]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>CP: </b>{CPCheck(state.pokemons[i])}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Type: </b>{TypeCheck(state.pokemons[i])}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button 
              variant="contained" 
              size="small" 
              color="primary" 
              fullWidth
            >
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {rowPokes}
      </Grid>
    </>
  );
}