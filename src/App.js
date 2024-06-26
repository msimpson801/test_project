import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReduxPlayground from "./Example4/ReduxPlayground";
import SimpleState from "./Example1/SimpleState";
import PropDrillPlayground from "./Example2/PropDrillPlayground";
import ContextPlayground from "./Example3/ContextPlayground";
import {store} from "./Common/configureStore";
import DarkModeButton from "./MorphPlayground";
import Home from "./Home";


function App() {
    return (<Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}>
                        <Route path="redux" element={<ReduxPlayground/>}/>
                        <Route path="simplestate" element={<SimpleState/>}/>
                        <Route path="propdrill" element={<PropDrillPlayground/>}/>
                        <Route path="context" element={<ContextPlayground/>}/>
                        <Route path="morphplayground" element={<DarkModeButton/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
