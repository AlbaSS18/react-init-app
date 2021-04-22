import {useState, useEffect} from "react";

export default url => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(url)
    }, [url])

    const fetchData = async () => {
        const response = await fetch (url);
        const data = await  response.json();
        setData(data)
    }

    return data;
}
