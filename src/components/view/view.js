import React from 'react';
import debounce from 'debounce';

import Card from '../card/card';
import Spinner from '../spinner/spinner';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };

    this.exampleData = ['Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card',
                         'Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card', 'Card'];
  }

  // Get initial data set of cards
  // Then set up a listener to listen on scroll then debounce the method call
  // to save the client from triggering too many data calls at once.
  componentDidMount() {
    this.getCards();
    document.querySelector('.view').addEventListener('scroll', debounce(this.onInfiniteScroll.bind(this), 200));
  }

  // Gets triggered when we scroll the window
  // This method measures various data points to determine if browser
  // has scrolled near the bottom of the document
  onInfiniteScroll() {
    const fromTop = document.querySelector('.view').scrollTop + window.innerHeight;
    const toBottom = document.querySelector('.cards__list').clientHeight - window.innerHeight;
    if (fromTop >= toBottom) {
      this.getCards();
    }
  }

  getCards() {
    // Stop app from requesting too many data calls at once
    this.setState({ isFetchingData: true });

    // Add more cards to our view
    this.setState({ cards: this.state.cards.concat(this.exampleData) });

    // Example of how to fetch from an API
    // fetch(url)
    // .then((res) => res.status >= 300 ? res.error() : res.json())
    // .then(({ cards }) => {
    //   this.setState({
    //     cards: this.state.cards.concat(cards),
    //     isFetchingData: false,
    //   });
    // });
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="view">
        <section className="cards__list">
          {
            cards.map((card) => {
              const content = card;
              return (
                <Card content={content} />
              );
            })
          }
          <Spinner />
        </section>
      </div>
    );
  }
}

export default Cards;
