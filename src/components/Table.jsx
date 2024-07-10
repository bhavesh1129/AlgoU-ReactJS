import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = ({ heading }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setItems(response.data)
            } catch (error) {
                console.error("Error fetching data ", error);
            }
        };
        fetchData();
    }, []);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <h2 className='text-2xl font-bold text-red-600'>{heading}</h2>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.length > 0 ? (
                                items.map((item, index) => (
                                    <tr key={item.id} className={`
                                    ${index === selectedIndex ? "bg-gray-600" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"}
                                    `}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={() => handleClick(index)}>
                                            {item.title}
                                        </th>
                                    </tr>
                                ))) : (
                                    <tr className='text-red-700 text-2xl font-bold'>No item found😞</tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table