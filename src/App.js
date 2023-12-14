import mockAPI from "./api/mockapi";
import { useState, useEffect } from 'react';
import Noaa from "./components/Noaa";


function App() {
    const [products, setProducts] = useState([]);

    function apiGet() {
        mockAPI.get('/product')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error.message));
    }


    const apiPost = async (newProduct) => {
        try {
            const response = await mockAPI.post('/product', newProduct);
            apiGet();
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        apiGet();
    }, []);

    return (
        <div>
            <Noaa />
        </div>
    )

}

export default App;