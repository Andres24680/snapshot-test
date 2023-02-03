import logo from './logo.svg';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import GitHubCard from './GitHUbCard/GitHUbCard'

function App(){
  return(
    <div className="App">
      <Row>
        <col style={{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard />
        </col>
      </Row>
    </div>
  )
}
export default App;
