import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReduxPlayground from "./ReduxExample/ReduxPlayground";
import SimpleExample from "./SimpleExample/SimpleExample";
import PropDrillPlayground from "./PropDrillExample/PropDrillPlayground";
import ContextPlayground from "./ContextExample/ContextPlayground";
import {store} from "./Common/configureStore";
import Home from "./Home";
import Myth1 from "./SimpleExampleNoProps/Myth1";
import SimpleExampleTree from "./SimpleExampleTree/SimpleExampleTree";
import ComponentsAsProps from "./ComponentsAsProps/ComponentsAsProps";
import SlowForm from "./ComponentsAsProps/SlowForm";
import SlowFormMemoized from "./ComponentsAsProps/SlowFormMemoized";
import ContextComplexPlayground from "./ContextComplexExample/ContextComplexPlayground";
import StarHeart from "./ContextComplexExample/StarHeart";
import BackgroundColourChangeOnScroll from "./SuperDuperNewComponent/BackgroundColourChangeOnScroll";
import Myth2 from "./SimpleExampleParentNoStateChange/Myth2";
import FastForm from "./ComponentsAsProps/FastForm";
import UserInputOrFetch from "./UserInputOrFetch/UserInputOrFetch";
import MemoDiagram from "./MemoDiagram/MemoDiagram";
import ContextMessAround from "./ContextComplexChildren/ContextMessAround";
import ColourChangeButton from "./Chamaleon/ColourChangeButton";


function App() {
    return (<Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home/>}>
                        <Route path="redux" element={<ReduxPlayground/>}/>
                        <Route path="simplexample" element={<SimpleExample/>}/>
                        <Route path="myth1" element={<Myth1/>}/>
                        <Route path="myth2" element={<Myth2/>}/>
                        <Route path="simplexampletree" element={<SimpleExampleTree/>}/>
                        <Route path="propdrill" element={<PropDrillPlayground/>}/>
                        <Route path="context" element={<ContextPlayground/>}/>
                        <Route path="contextcomplex" element={<ContextComplexPlayground/>}/>
                        <Route path="star" element={<StarHeart/>}/>
                        <Route path="componentsasprops" element={<ComponentsAsProps/>}/>
                        <Route path="slowform" element={<SlowForm/>}/>
                        <Route path="slowformmemo" element={<SlowFormMemoized/>}/>
                        <Route path="fastform" element={<FastForm/>}/>
                        <Route path="backgroundcolourchangeonscroll" element={<BackgroundColourChangeOnScroll/>}/>
                        <Route path="chameleon" element={<BackgroundColourChangeOnScroll/>}/>
                        <Route path="userinputorfetch" element={<UserInputOrFetch/>}/>
                        <Route path="memodiagram" element={<MemoDiagram/>}/>
                        <Route path="contextmessaround" element={<ContextMessAround/>}/>
                        <Route path="colourchange" element={<ColourChangeButton/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
