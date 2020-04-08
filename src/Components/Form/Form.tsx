import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { withFormik, FormikProps } from 'formik';
import { 
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Avatar, ListItemIcon,
} from '@material-ui/core';
import { 
  KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { IForm, initialValues } from './IForm';
import { IBase } from '../../Utils/Main';
import { Genders } from '../../Utils/Gender';
import { Areas } from '../../Utils/Area';
import { IPokemons, Pokemons } from '../../Utils/Pokemon';
import useStyles from './Styles';
import Cards from '../Cards/Cards';
import { dataPokes } from '../Cards/ICard';

const MyForm = 
(props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = props;
  const classes = useStyles();

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <TextField 
                id="name"
                name="name"
                label="Name"
                title="Name"
                margin="dense"
                variant="outlined"
                value={values.name}
                error={touched.name as any && errors.name as any}
                helperText={(touched.name && errors.name) && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <KeyboardDatePicker
                id="age"
                name="age"
                format="MM/dd/yyyy"
                variant="inline"
                margin="dense"
                value={values.age}
                onChange={(value: any): void => {
                  setFieldValue('age', value.toISOString());
                }}
                KeyboardButtonProps={{
                  'aria-label': 'Age'
                }}
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                margin="dense"
                variant="outlined"
                fullWidth
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  value={values.gender}
                  onChange={handleChange}
                  label="Gender"
                  inputProps={{
                    id: 'gender',
                    name: 'gender',
                  }}
                >
                  {
                    Genders.map((g: IBase): React.ReactElement<HTMLElement> => (
                      <MenuItem key={g.id} value={g.name}>
                        {g.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                margin="dense"
                variant="outlined"
                fullWidth
              >
                <InputLabel>Area</InputLabel>
                <Select
                  value={values.area}
                  onChange={handleChange}
                  label="Area"
                  inputProps={{
                    id: 'area',
                    name: 'area',
                  }}
                >
                  {
                    Areas.map((a: IBase): React.ReactElement<HTMLElement> => (
                      <MenuItem key={a.id} value={a.name}>
                        {a.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                margin="dense"
                variant="outlined"
                fullWidth
              >
                <InputLabel>Pokemon</InputLabel>
                <Select
                  value={values.pokemon}
                  onChange={handleChange}
                  label="Pokemon"
                  inputProps={{
                    id: 'pokemon',
                    name: 'pokemon',
                  }}
                >
                  {
                    Pokemons.map((p: IPokemons): React.ReactElement<HTMLElement> => (
                      <MenuItem key={p.id} value={p.name}>
                        <ListItemIcon>
                          <Avatar alt={p.icon} src={p.icon} className={classes.root} />
                        </ListItemIcon>
                        {p.name}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                Create card
              </Button>
            </Grid>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>

      <Cards />
    </div>
  );
}

export default withFormik({
  displayName: 'Poke-Form',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    alert(JSON.stringify(values));
    dataPokes.ids.push(dataPokes.names.length);
    dataPokes.names.push(values.name);
    dataPokes.ages.push(values.age);
    dataPokes.genders.push(values.gender);
    dataPokes.areas.push(values.area);
    dataPokes.pokemons.push(values.pokemon);
    setSubmitting(false);
    resetForm();
  }
})(MyForm);