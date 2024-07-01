import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReduxPlayground from "./ReduxExample/ReduxPlayground";
import SimpleExample from "./SimpleExample/SimpleExample";
import PropDrillPlayground from "./PropDrillExample/PropDrillPlayground";
import ContextPlayground from "./ContextExample/ContextPlayground";
import {store} from "./Common/configureStore";
import Home from "./Home";
import SimpleExampleNoProps from "./SimpleExampleNoProps/SimpleExampleNoProps";
import SimpleExampleTree from "./SimpleExampleTree/SimpleExampleTree";


function App() {
    return (<Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}>
                        <Route path="redux" element={<ReduxPlayground/>}/>
                        <Route path="simplexample" element={<SimpleExample/>}/>
                        <Route path="simplexamplenoprops" element={<SimpleExampleNoProps/>}/>
                        <Route path="simplexampletree" element={<SimpleExampleTree/>}/>
                        <Route path="propdrill" element={<PropDrillPlayground/>}/>
                        <Route path="context" element={<ContextPlayground/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
