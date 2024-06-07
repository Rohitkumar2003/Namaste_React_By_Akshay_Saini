/**
 * <div id='parents'>
 *  <div id='child'>
 *      <h1>i', H1 Tag  </h1> 
 *      <h2>i', H1 Tag  </h2> 
 * 
 * </div>
 * <div id='child2'>
 *      <h1>i', H1 Tag  </h1> 
 *      <h2>i', H1 Tag  </h2> 
 * 
 * </div>
 * </div>
 * 
 * React Element(Object)=> HTML(Browser Understand)
 */
const parent = React.createElement("div",{id:"child"},
        React.createElement("div",{id:"parent"},

       [ [React.createElement("h1",{},"I'm h1 tag"), 
       React.createElement("h2",{},"I'm h2 tag"),
       React.createElement("p",{},"hello i'm Paragrpah ")],

       [React.createElement("h1",{id:"child2"},"I'm h1 tag"), 
       React.createElement("h2",{},"I'm h2 tag"),
       React.createElement("p",{},"hello i'm Paragrpah ")]]
        
    )
);
console.log("parent here:-", parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
