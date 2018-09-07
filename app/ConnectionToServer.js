import IPAdress from '../Constants/Constants';
import PropTypes from 'prop-types';



UserInput.PropTypes={
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

async function ConnectionToServer() {
  // username={this.props.username}
  // password={this.props.password}

  try {
    let response = await fetch(
      'http://${IPAdress}/api/auth/?username='+ID+'&password='+password+'&imei=1234'
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}
