import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Table Component
 * Displays a list of posts fetched from an API in a table format
 * Features clickable rows with selection highlighting
 * 
 * @param {string} heading - The title to display above the table
 */
const Table = ({ heading }) => {
    // State to track which table row is currently selected (-1 means no selection)
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    // State to store the list of items/posts fetched from the API
    const [items, setItems] = useState([]);

    // useEffect hook runs when component mounts to fetch data from API
    useEffect(() => {
        // Async function to fetch posts from JSONPlaceholder API
        const fetchData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setItems(response.data) // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data ", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array means this runs only once when component mounts

    // Handler function for when a table row is clicked
    const handleClick = (index) => {
        setSelectedIndex(index); // Update selected row index
    };

    return (
        <>
            {/* Table heading */}
            <h2 className='text-2xl font-bold text-red-600'>{heading}</h2>
            
            {/* Table container with responsive overflow handling */}
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/* Table header */}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                        </tr>
                    </thead>
                    
                    {/* Table body */}
                    <tbody>
                        {
                            // Conditional rendering: show posts if available, otherwise show "no items" message
                            items.length > 0 ? (
                                // Map through items to create table rows
                                items.map((item, index) => (
                                    <tr 
                                        key={item.id} 
                                        className={`
                                            ${index === selectedIndex ? "bg-gray-600" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"}
                                        `}
                                    >
                                        <th 
                                            scope="row" 
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer" 
                                            onClick={() => handleClick(index)}
                                        >
                                            {item.title}
                                        </th>
                                    </tr>
                                ))
                            ) : (
                                // Fallback message when no items are available
                                <tr>
                                    <td className='text-red-700 text-2xl font-bold px-6 py-4'>
                                        No item found😞
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table