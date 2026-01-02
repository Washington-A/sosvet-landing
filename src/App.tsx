import Router from "./routes/Router.tsx";
import { HashRouter} from "react-router-dom";
import {DeviceProvider} from "./contexts/DeviceContext.tsx";
import {ScrollToTop} from "./routes/ScrollToTop.tsx";

function App() {

    return (
        <>
            <HashRouter>
                <DeviceProvider>
                    <ScrollToTop />
                    <Router/>
                </DeviceProvider>
            </HashRouter>
        </>
    )
}

export default App
