import React from 'react';

const Loading = () => {
    return (
        // <div className='h-screen flex justify-center items-center'>
        //     <button className="btn btn-square loading "></button>
        // </div>
        <div class="h-[80vh] flex justify-center items-center ">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;