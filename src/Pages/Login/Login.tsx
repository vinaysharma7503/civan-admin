import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='relative flex flex-col justify-center min-h-screen overflow-hidden bg-blue'>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className='text-3xl font-semibold text-center text-blue uppercase'>Sign In</h1>
                <form action="" className='p-2'>
                    <div className="mb-2">
                        <label htmlFor="email" className='block text-sm font-semibold text-black'>Email</label>
                        <input type="email" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='block text-sm font-semibold text-black'>Password</label>
                        <input type="password" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue focus:ring-blue focus:outline-none focus:ring focus:ring-opacity-40" id="password" placeholder="Password" />
                    </div>
                    <div className="mt-6">
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-bluelight hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bluelight" type="submit">Login</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login