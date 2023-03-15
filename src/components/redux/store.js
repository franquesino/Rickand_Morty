import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import  ThunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
compose; //esta línea es para conectar con la extension del navegador => REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))//esta linea es para poder hacer peticiones al server
);


export default store;
