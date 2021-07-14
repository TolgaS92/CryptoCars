import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'inline',
    justifyContent: 'flex-start',
    paddingRight: '1024px',
    margin: '20px',
    width: '500',
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '600px',
    marginTop: '10px',
  },
  userName: {
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '150px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  loggedIn: {
    flexDirection: 'row',
    display: 'flex',
    marginInline: '250px'
  },
  button: {
    marginRight: '5px',
    color: 'white'
  },
  signIn: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'row',
    marginInline: '250px'
  },
}));