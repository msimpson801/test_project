import {useEffect, useRef, useState} from "react";

function useFetchOnClick() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllerRef = useRef(null);


    const fetchData = async (newUrl) => {
        setLoading(true);
        setError(null);

        try {
            // Abort the previous request
            if (controllerRef.current) {
                controllerRef.current.abort();
            }

            // Create a new AbortController
            controllerRef.current = new AbortController();


            const response = await fetch(newUrl, { signal: controllerRef.current.signal });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch
            (error) {
            if (error.name !== 'AbortError') {
                setError(error);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleFetch = (newUrl) => {
        fetchData(newUrl);
    };

    useEffect(() => {
        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    }, []);

    return {data, loading, error, handleFetch};
}


export default function FetchingData() {
    const {handleFetch, loading, data} = useFetchOnClick()

    if (loading) {
        return <h6>Loading</h6>
    }

    console.log(data);

    return <div onClick={() => handleFetch("https://jsonplaceholder.typicode.com/todos/1")}>Handle click</div>

}


// const useFetch = (url, options = {}, fetchOnLoad = true, dependencies = []) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     // Use refs to store mutable values without causing re-renders
//     const abortControllerRef = useRef(null);
//     const optionsRef = useRef(options);
//
//     // Update optionsRef when options change
//     useEffect(() => {
//         optionsRef.current = options;
//     }, [options]);
//
//     const fetchData = useCallback(async () => {
//         // Cancel any ongoing requests
//         if (abortControllerRef.current) {
//             abortControllerRef.current.abort();
//         }
//
//         // Create a new AbortController
//         abortControllerRef.current = new AbortController();
//         const { signal } = abortControllerRef.current;
//
//         setLoading(true);
//         setError(null);
//
//         try {
//             const response = await fetch(url, {
//                 ...optionsRef.current,
//                 signal
//             });
//
//             console.log(response);
//
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//
//             const result = await response.json();
//             if (!signal.aborted) {
//                 setData(result);
//             }
//         } catch (err) {
//             if (err.name !== 'AbortError') {
//                 setError(err.message);
//             }
//         } finally {
//             if (!signal.aborted) {
//                 setLoading(false);
//             }
//         }
//     }, [url]); // Only depend on url
//
//     useEffect(() => {
//         if (fetchOnLoad) {
//             fetchData();
//         }
//
//         // Cleanup function
//         return () => {
//             if (abortControllerRef.current) {
//                 abortControllerRef.current.abort();
//             }
//         };
//     }, [fetchData, fetchOnLoad, ...dependencies]);
//
//     // const manualFetch = useCallback(() => {
//     //     fetchData();
//     // }, [fetchData]);
//
//     return { data, loading, error, fetch: fetchData };
// };




