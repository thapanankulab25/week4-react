import logo from './logo.svg';
import './App.css';

function App() {

//     let r='<b>React</b>'
//     let rn='<b>React</b> Native'
//     const el=(
//       <div>
//         Create Web <br/>
//         with <span dangerouslySetInnerHTML={{__html:r}}/> & <span dangerouslySetInnerHTML={{__html:rn}}/>
//       </div>
//     )
// return el

// return(
//   <table border="1">
//   <tr>
//     <th>Product</th><th>Price</th>
//     </tr>
//   <tr>
//     <td>Book</td><td>320</td>
//   </tr>
//   <tr>
//     <td>Cake</td><td>70</td>
//   </tr>
//   </table>
// )

const divStyle ={
  color:'red',
  backgroundcolor:'powderblue',
  fontSize:'larger',
}
return <div style={divStyle}>Hello React</div>
}

export default App;
