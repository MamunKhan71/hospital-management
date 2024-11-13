import React from 'react'
const LoadingSpinner = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-700 via-gray-950 to-blue-950 flex items-center justify-center relative overflow-hidden'>
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-blue-600"></div>
            </div>
        </div>
    )
}

export default LoadingSpinner