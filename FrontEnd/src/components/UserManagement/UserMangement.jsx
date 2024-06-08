import React, { useEffect, useState } from 'react'

import UserTable from './UserTable';
import Navigation from '../Navigation';


function UserMangement() {

    const [tabledata, settabledata] = useState([])
    const columns = [
        {

            Header: 'Profile Picture',
            accessor: 'profilePicture',


        },
        {

            Header: 'First Name',
            accessor: 'firstName',


        },
        {

            Header: 'Last Name',
            accessor: 'lastName',


        },
        {

            Header: 'Email',
            accessor: 'email',


        },
        {

            Header: 'User Type',
            accessor: 'userType',


        },
        {

            Header: 'Verified',
            accessor: 'verified',


        },
        {

            Header: 'Disabled',
            accessor: 'disabled',


        },
        {

            Header: 'User Name',
            accessor: 'username',


        },
        {

            Header: 'Actions',
            accessor: '_id',


        },
    ]
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/getUser");
            console.log(response.data)
            settabledata(response.data)
            // const data = response.data.data;

            // if (!Array.isArray(data)) {
            //   console.error("Expected an array of documents but received:", data);
            //   return;
            // }

            // const filteredDocuments = data.filter(
            //   (doc) =>
            //     doc.category && doc.category.toLowerCase() === category.toLowerCase()
            // );

            // setDocuments(filteredDocuments);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        fetchData()

    }, [])

    return (
        <>

            <Navigation />
            <div id="kt_app_content" className="app-content flex-column-fluid">
                <div id="kt_app_content" class="app-content flex-column-fluid">
                    {/* <!--begin::Content container--> */}
                    <div id="kt_app_content_container" class="app-container container-xxl">
                        {/* <!--begin::Card--> */}
                        <div class="card">
                            {/* <!--begin::Card header--> */}
                            <div class="card-header border-0 ">

                                {/* <!--begin::Toolbar--> */}
                                <div class="d-flex flex-wrap flex-stack mb-6">
                                    {/* <!--begin::Heading--> */}
                                    <h3 class="fw-bold my-2 mx-10">Manage Users</h3>
                                    {/* <!--end::Heading--> */}
                                    {/* <!--begin::Actions--> */}
                                    <div class="d-flex flex-wrap my-2">

                                        <a href="http://localhost:5173/createadmin" class="btn btn-primary btn-sm">Create New Admin</a>
                                    </div>
                                    {/* <!--end::Actions--> */}
                                </div>
                                {/* <!--end::Toolbar--> */}
                            </div>
                            {/* <!--end::Card header--> */}
                            {/* <!--begin::Card body--> */}
                            <div class="card-body py-4">
                                {/* <!--begin::Table--> */}
                                <UserTable columns={columns} data={tabledata} />

                                {/* <!--end::Table--> */}
                            </div>
                            {/* <!--end::Card body--> */}
                        </div>
                        {/* <!--end::Card--> */}
                    </div>
                    {/* <!--end::Content container--> */}
                </div>
            </div>
        </>
    )
}

export default UserMangement