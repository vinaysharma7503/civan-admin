import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { qrListData } from './Services/qrService';
import ReactPaginate from 'react-paginate';
import { saveAs } from 'file-saver'

type Props = {}

const QrList = (props: Props) => {
    const [show, setShow] = useState(false);
    const [qrList, setQrList] = useState<any>();
    const [page, setPage] = useState(1)
    useEffect(() => {
        qrListData(page, qrListDataCB)
    }, [!qrList])

    const qrListDataCB = async (result: any) => {
        if (result) {
            console.log('qrList', result?.data?.data?.qrs);
            setQrList(result?.data?.data?.qrs)
        }
    }
    const getPage = (event: any) => {
        console.log(event?.selected + 1);
        setPage(event?.selected + 1)
        let page = event?.selected + 1
        qrListData(page, qrListDataCB)
    }
    const downloadImage = (image:any) => {
        saveAs(image?.qr, `${image?.tag_id}.png`) // Put your image url here.
      }
    const tableRowView = (data: any) => (
        <tr key={data._id}>
            <td className="px-2 py-2 border-b border-gray bg-white text-sm">
                <div className="md:flex justify-center items-center">
                    <div className="ml-3">
                        {/* <p className="text-blue whitespace-no-wrap">
                            <Link to={`/groups/group-details/${data.id}`}>
                                {data?.qr}
                            </Link>
                        </p> */}
                        <Link to='' onClick={()=>{downloadImage(data)}}> <img src={data?.qr} alt="qrtag" className='h-6'/></Link>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2 border-b border-gray bg-white text-sm">
                <div className="md:flex justify-center items-center">
                    <div className="ml-3">
                        <p className="text-blue whitespace-no-wrap">{data?.tag_id}</p>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2 border-b border-gray bg-white text-sm">
                <div className="md:flex justify-center items-center">
                    <div className="ml-3">
                        <p className="text-blue whitespace-no-wrap">
                            {data?.tag_type}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2 border-b border-gray bg-white text-sm">
                <div className="md:flex justify-center items-center">
                    <div className="ml-3">
                        <p className="text-blue whitespace-no-wrap">
                            {data?.user_id?'Yes':'No'}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2 border-b border-gray bg-white text-sm">
                <Link to="" className="text-blue mr-4">
                    Edit
                </Link>
                <Link to="" className="text-blue" onClick={() => setShow(true)}>
                    Delete
                </Link>
            </td>
        </tr>
    );
    return (
        <>
            <div className="md:container mt-1 p-2">
                <div className="py-2">
                    <div className="md:flex md:flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight text-graylight">Qr Codes</h2>
                    </div>
                    <div className="md:flex md:flex-row mb-1 mt-2 sm:mb-0 justify-between w-full">
                        <div className="text-end w-full">
                            <form className="md:flex justify-between">
                                <div className="relative">
                                    <div className="md:flex justify-start items-center border-b">
                                        <input
                                            type="search"
                                            name="search"
                                            id="search"
                                            className="w-full h-10 ml-2 p-1 outline-none"
                                            placeholder="Search"
                                        />
                                        <svg
                                            className=" ml-2 h-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 50 50"
                                            fill="#5B5B5B"
                                        >
                                            <path
                                                d="M21 3C11.601563 3 4 10.601563 4 20C4 29.398438 11.601563 37 21 37C24.355469 37 27.460938 36.015625 30.09375 34.34375L42.375 46.625L46.625 42.375L34.5 30.28125C36.679688 27.421875 38 23.878906 38 20C38 10.601563 30.398438 3 21 3 Z M 21 7C28.199219 7 34 12.800781 34 20C34 27.199219 28.199219 33 21 33C13.800781 33 8 27.199219 8 20C8 12.800781 13.800781 7 21 7Z"
                                                fill="#5B5B5B"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <Link
                                    to="/groups/add-group"
                                    className="md:flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-bluelight hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bluelight"
                                >
                                    Generate Qr
                                </Link>
                            </form>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal mb-1">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm font-normal"
                                        >
                                            Qr
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm font-normal"
                                        >
                                            Tag Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm font-normal"
                                        >
                                            Tag Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm font-normal"
                                        >
                                            Registered
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm font-normal"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {qrList?.docs && qrList?.docs.map((qr: any) => tableRowView(qr))}
                                </tbody>
                            </table>
                            {qrList?.totalPages>1?<div className='md:flex justify-center mb-1'>
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Next"
                                    onPageChange={getPage}
                                    pageRangeDisplayed={5}
                                    pageCount={qrList?.totalPages}
                                    previousLabel="Previous"
                                    // renderOnZeroPageCount={null}
                                    containerClassName='isolate inline-flex -space-x-px rounded-md shadow-sm'
                                    pageClassName='flex flex-1 justify-between'
                                    pageLinkClassName='relative z-10 inline-flex items-center border border-blue px-4 py-2 text-sm font-medium text-blue focus:z-20 focus:bg-bluelight'
                                    previousClassName='flex flex-1 justify-between'
                                    previousLinkClassName='relative inline-flex items-center rounded-l-md border border-gray bg-white px-2 py-2 text-sm font-medium text-blue hover:bg-bluelight focus:z-20'
                                    nextClassName='flex flex-1 justify-between'
                                    nextLinkClassName='relative inline-flex items-center rounded-r-md border border-gray bg-white px-2 py-2 text-sm font-medium text-blue hover:bg-bluelight focus:z-20'
                                    activeLinkClassName='bg-bluelight'
                                    disabledLinkClassName='text-gray bg-graylight hover:text-gray hover:bg-graylight'
                                />
                            </div>:null}
                        </div>
                    </div>
                </div>
            </div>
            {!show ? null : (
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm md:flex justify-center items-center">
                    <div className="w-[400px] md:flex md:flex-col">
                        <div className="bg-gray rounded p-2">
                            <p className="text-center">
                                Are you sure you want to delete this group?
                            </p>
                            <div className="md:flex justify-end">
                                <Link
                                    to=""
                                    className="md:flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-bluelight hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bluelight mt-2 mr-2"
                                    onClick={() => setShow(false)}
                                >
                                    Cancel
                                </Link>
                                <Link
                                    to=""
                                    className="md:flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue rounded-lg shadow-md hover:bg-bluelight hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bluelight mt-2 mr-2"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default QrList