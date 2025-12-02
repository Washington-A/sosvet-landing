import Router from "./routes/Router.tsx";
import {BrowserRouter} from "react-router-dom";
import {DeviceProvider} from "./contexts/DeviceContext.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <DeviceProvider>
                    <Router/>
                </DeviceProvider>
            </BrowserRouter>
        </>
    )
}

export default App
