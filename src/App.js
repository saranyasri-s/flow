import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import classes from "./App.module.css"
function App() {
  const handleSaveFlow=()=>{

  }
  return (
    <div className={classes.App}>
      <header className={classes.header}> 
        <button onClick={handleSaveFlow} style={{color:"blue", background:"white", border:"1px solid blue", borderRadius:"10px",padding:"10px 30px"}}className={classes.button}>Save changes</button>
      </header>

 <main className={classes.reactflow} style={{ height: '80vh', width:"80%" }}>
   <ReactFlow>
    <Background/>
    <Controls/>
   </ReactFlow>
       </main>
    </div>
   
  );
}

export default App;