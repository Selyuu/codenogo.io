import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Octacat from 'react-icons/lib/io/social-octocat';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

const naviBar = (
  <Navbar inverse={false}>
    <div className="navigation-bar">
      <div>
      <Navbar.Header>
        <Navbar.Brand>
            <a href="https://codenogo.io"><Octacat className="nav-icon"/>
            <span className="icon-title">Code no go</span></a>
        </Navbar.Brand>
      </Navbar.Header>
      </div>
      <div className="nav-links hidden-s">
      <Nav pullRight>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contribute</NavItem>
      </Nav>
      </div>
    </div>
  </Navbar>
)

const mainSearch = (
  <div className="container search-div">
  <h1>JavaScript code no go</h1>
  <h4>Discover the quirky side of the JavaScript language</h4>
  <div className="input-group input-group-lg search-bar-div">
    <input type="text" className="form-control search-bar-1" placeholder="&#xf002;" disabled />
    <input type="text" className="form-control search-bar-2" placeholder="JavaScript, wat?" />
  </div>
  </div>
)

const cards = (
  <div className="container code-snips">

    <div className="cards">
      <h3>Minimal value is greater than zero, wat?</h3>
      <p>Last updated Dec 19, 2017</p>
      <div>
      <pre className="language-javascript"><code className="language-javascript">Number.MIN_VALUE > 0 // -> true</code></pre>
      </div>
    </div>

    <div className="cards">
      <h3>null is falsy, but not false, wat?</h3>
      <p>Last updated Dec 19, 2017</p>
      <div>
      <pre className="language-javascript">
      <code className="language-javascript">!!null // -> false</code><br/>
      <code className="language-javascript">null == false // -> false</code>
      </pre>
      </div>
    </div>

    <div className="cards">
      <h3>Adding arrays, wat?</h3>
      <p>Last updated Dec 19, 2017</p>
      <div>
      <pre className="language-javascript"><code className="language-javascript">[1, 2, 3] + [4, 5, 6]  // -> '1,2,34,5,6'
</code></pre>
      </div>
    </div>

    <div className="cards">
      <h3>Trailing commas in array, wat?</h3>
      <p>Last updated Dec 19, 2017</p>
      <div>
      <pre>
      {`
      let arr = [,,,]
      arr.length // -> 3
      a.toString() // => ',,'
      `}
      </pre>
      </div>
    </div>

  </div>
)

const footer = (
  <div className="container footer">
    <hr className="footer-line" />
    <p>2017 / Rainier Louis / <a href="https://github.com/selyuu">Github</a></p>
  </div>
)

const url = `http://localhost:3000/`;

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchCards();
  }


  fetchCards = () => {
    fetch(url)
    .then(response => response.json())
    .then(cards => {
      this.props.addCards(cards);
    });
  }

  // ==================== RENDER

  renderCards() {
    return this.props.cards.map((el, i) => {
      let code = el.code.join('\n');
      return (
      <div className="cards">
        <h3>{el.title}, wat?</h3>
        <p>Last updated {el.date}</p>
        <div>
        <SyntaxHighlighter language="javascript" style={ocean}>
        {code}
        </SyntaxHighlighter>
        </div>
      </div>
      )
    });

  }

  render() {
    return (
      <div>
        {naviBar}
        <div className="main-body">
          {mainSearch}
          <div className="container code-snips">
          {this.renderCards()}
          </div>
          {footer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  addCards: (cards) => dispatch({
    type: 'ADD_CARDS',
    cards
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
