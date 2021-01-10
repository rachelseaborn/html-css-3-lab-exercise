import React, { Component } from 'react';
import './App.css';
import bg_image from './images/bg-masthead.jpg'



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mobileMenuView: false
//     }
//   }

//   toggleMenu = () => {
//     this.setState({ mobileMenuView: !this.state.mobileMenuView })
//   }

//   render() {
//     return (
//       <div className="App" >
//         <header className="app-header">

//           {/* <div className='laptop-nav'> */}
//           <nav className='laptop-menu'>
//             <span>About</span>
//             <span>Projects</span>
//             <span>Contact</span>
//           </nav>
//           {/* </div> */}

//           <div className='mobile-nav' onClick={this.toggleMenu}>Menu</div>
//           {this.state.mobileMenuView
//             ? (
//               <nav className='mobile-menu'>
//                 <span>About</span>
//                 <span>Projects</span>
//                 <span>Contact</span>
//               </nav>
//             )
//             : null}
//         </header>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({ dropdownView: !this.state.dropdownView })
  }

  render() {
    return (
      <div className="App">
        <header className='main-header'>
          {/* <img src={bg_image} alt='Mountains in fog' /> */}
          <nav className='desktop-menu'>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
          <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
            ? (
              <nav className='mobile-menu'>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
              </nav>
            )
            : null}


        </header>


        <section className="landing-text">

          <h1>GRAYSCALE</h1>
          <p>A free, responsive, one page Bootstrap theme</p>
          <p>created by Start Bootstrap.</p>

          <button onClick={console.log('learn more')}>GET STARTED</button>

        </section>
      </div >

    );
  }
}

export default App;
