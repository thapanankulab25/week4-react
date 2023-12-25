import logo from './logo.svg';
import './App.css';

function App() {

    let r='<b>React</b>'
    let rn='React Native'
    const el=(
      <div>
        Create Web <br/>
        with  <span dangerouslySetInnerHTML={{__html:r}}/> & {rn}
      </div>
    )
return el
}

export default App;
