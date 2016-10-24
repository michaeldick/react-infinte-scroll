import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card card--tile">
        {this.props.content}
      </div>
    );
  }
}

Card.propTypes = {
  content: React.PropTypes.string,
};

export default Card;
