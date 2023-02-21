import { useEffect, useState } from "react";

export const MyComponent = ({ url }: { url: string }) => {

    const [clicks, setClicks] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setData);
    }, [url]);

    return (<>
        <h1>Test React</h1>
        <div>
            <p>Hello react!</p>
            {clicks}
            <button onClick={() => setClicks((prevClicks => ++prevClicks))}>Click me!</button>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </div>
    </>
    );
}