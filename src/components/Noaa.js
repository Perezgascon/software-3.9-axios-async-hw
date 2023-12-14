import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Noaa() {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.ncei.noaa.gov/access/services/data/v1?dataset=daily-summaries&stations=USC00457180,USC00390043&startDate=1990-12-07T09:31:20Z&endDate=1991-07-12&dataTypes=MLY-PRCP-NORMAL,MLY-TMIN-NORMAL&format=json');
            setData(response.data)
        } catch (error) {
            console.error("API error", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);




    return (
        <div>
            <h1>Data</h1>
            {data && (
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    )
}