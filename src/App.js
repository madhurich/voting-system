import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.initialState = {
      languages: [
        {lan: 'java', votes: 0},
        {lan: 'c#', votes: 0},
        {lan: 'javascript', votes: 0}
      ]
    };
  }

  componentWillMount() {
    // this.disableDown = true;
    this.setState({
      languages: [...this.initialState.languages]
    })
  }

  onVote(index, voteType) {
    const clickedLan = this.state.languages[index];
    let {votes} = this.state.languages[index];
    switch(voteType) {
      case 'up':
        votes = votes + 1;
        // this.disableDown = false;
        break;
      case 'down':
        votes = votes - 1;
        break;
      case 'reset':
        votes = this.initialState.languages[index].votes;
        break;
      default:
        // this.disableDown = true;
        votes = this.initialState.languages[index].votes;
    }
    const updatedLan = {
      ...clickedLan,
      votes: votes
    };
    let updatedLanguages = [...this.state.languages];
    updatedLanguages[index] = updatedLan; 

    this.setState({
      languages: updatedLanguages
    });
  }

  render() {
    return (
      <div className="main-container">
        <h3>Voting System</h3>
        <div className="languages">
          {this.state.languages.map((language, index) => {
            return (
              <div className="language-container" key={index}>
                <div className="language">{language.votes} {language.lan}</div>
                <div className="buttons">
                  <button className="btn btn-success btn-sm" onClick={()=> this.onVote(index, 'up')}>+</button>
                  <button className="btn btn-primary btn-sm" onClick={() => this.onVote(index, 'reset')}>Reset</button>
                  <button className="btn btn-danger btn-sm" disabled={language.votes === 0} onClick={()=> this.onVote(index, 'down')}>-</button>
                </div>
              </div>
              )
          })}
        </div>
      </div>
      
    );
  }
  
}

export default App;
