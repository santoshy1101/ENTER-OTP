import Parent from "./Components/FordRef/Parent";
import PinInput from "./Components/PinInput";
import ReactCreateElement from "./Components/ReactCreateElement"

function App() {
  return (
    < >

<div style={{ textAlign:"center"}}>
<h1>Hello Santosh.....</h1>
<PinInput length={5} charLength={1}/>
<ReactCreateElement data={"santosh"}/>
<Parent/>
</div>
    </>
  );
}

export default App;
