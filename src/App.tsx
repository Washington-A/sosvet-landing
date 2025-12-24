import Router from "./routes/Router.tsx";
import { HashRouter} from "react-router-dom";
import {DeviceProvider} from "./contexts/DeviceContext.tsx";

function App() {

    return (
        <>
            <HashRouter>
                <DeviceProvider>
                    <Router/>
                </DeviceProvider>
            </HashRouter>
        </>
    )
}

export default App
