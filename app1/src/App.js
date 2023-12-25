import logo from './logo.svg';
import './App.css';

function App() {

    let r='<b>React</b>'
    let rn='<b>React</b> Native'
    const el=(
      <div>
        Create Web <br/>
        with <span dangerouslySetInnerHTML={{__html:r}}/> & <span dangerouslySetInnerHTML={{__html:rn}}/>
      </div>
    )
return el
}

export default App;
