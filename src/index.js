import React from 'react';

export default class BtnGreet extends React.Component {  

  render() {
    return(
      <div>
        <button 
          type="button" 
          onClick={this._greet.bind(this)}>
          {this.props.buttonText}
        <button/>
      </div>
    );
  }

  _greet() {
    alert(this.props.alertMessage);
  }
}

BtnGreet.propTypes = {
	buttonText: React.PropTypes.string.isRequired,
	alertMessage: React.PropTypes.string.isRequired
}

