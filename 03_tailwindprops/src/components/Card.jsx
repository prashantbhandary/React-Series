import React from 'react'

function Card({username,btnText="visit me"}) {
  return (
    <div>
        <div className="bg-gray-100 flex items-center justify-center mb-2 ">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-12 w-12 rounded-full" src="https://images.pexels.com/photos/27893233/pexels-photo-27893233/free-photo-of-woman-in-shirt-photographing-with-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User Avatar"/>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-bold text-gray-900">{username}</h2>
                        <p className="text-gray-600">prashant@example.com</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700">This is a brief description about the user. You can add more details here.</p>
                </div>
                <div className="mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        {btnText}
                    </button>
                </div>
            </div>
      </div>  
    </div>
  )
}

export default Card
