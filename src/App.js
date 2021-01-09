import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuView: false
    }
  }

  toggleMenu = () => {
    this.setState({ mobileMenuView: !this.state.mobileMenuView })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">

          {/* <div className='laptop-nav'> */}
          <nav className='laptop-menu'>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </nav>
          {/* </div> */}

          <div className='mobile-nav' onClick={this.toggleMenu}>Menu</div>
          {this.state.mobileMenuView
            ? (
              <nav className='mobile-menu'>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
              </nav>
            )
            : null}


          <section className="landing-text">

            <h1>GRAYSCALE</h1>
            <p>A free, responsive, one page Bootstrap theme</p>
            <p>created by Start Bootstrap.</p>

          </section>

          <button onClick={console.log('learn more')}>GET STARTED</button>

        </header >
      </div >

    );
  }
}

export default App;
