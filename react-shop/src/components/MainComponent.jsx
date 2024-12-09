import { Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import AdminPage from "./Pages/AdminPage"
import BagPage from "./Pages/BagPage"

function MainComponent() {
    
    return(
        <main>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/bag" element={<BagPage/>}/>
            </Routes>
        </main>
    )
}

export default MainComponent