import React, { useState, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search term
  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <Card title="API Data" className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="API Data" className="max-w-4xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </Card>
    );
  }

  return (
    <Card title="API Data" className="max-w-4xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1); // Reset to first page on search
          }}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {paginatedData.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No results found
        </div>
      ) : (
        <div className="space-y-4">
          {paginatedData.map((item) => (
            <div key={item.id} className="border p-4 rounded-md dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <Button 
            variant="secondary" 
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={page === 1 ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Previous
          </Button>
          
          <span className="text-gray-600 dark:text-gray-300">
            Page {page} of {totalPages}
          </span>
          
          <Button 
            variant="secondary" 
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Next
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ApiData;