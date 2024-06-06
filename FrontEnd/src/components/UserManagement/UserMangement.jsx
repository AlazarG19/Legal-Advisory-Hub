import React, { useEffect, useState } from 'react'

import UserTable from './UserTable';


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


    const data = [
        {
            "_id": "6657a042dd50c9afc228c6b3",
            "email": "alazargetachew70@gmail.com",
            "password": "password",
            "firstName": "Alazar",
            "lastName": "Getachew",
            "verified": "true",
            "username": "alazarg",
            "userType": "client",
            "__v": { "$numberInt": "0" },
            "profilePicture": "1717019053636.jpg"
        },
        {
            "_id": "6657a042dd50c9afc228c6b3",
            "email": "alazargetachew70@gmail.com",
            "password": "password",
            "firstName": "Alazar2",
            "lastName": "Getachew",
            "verified": "true",
            "username": "alazarg",
            "userType": "client",
            "__v": { "$numberInt": "0" },
            "profilePicture": "1717019053636.jpg"
        },
        {
            "_id": "6657a042dd50c9afc228c6b3",
            "email": "alazargetachew70@gmail.com",
            "password": "password",
            "firstName": "Alazar3",
            "lastName": "Getachew",
            "verified": "true",
            "username": "alazarg",
            "userType": "client",
            "__v": { "$numberInt": "0" },
            "profilePicture": "1717019053636.jpg"
        },
    ]
    console.log(data)
    return (
        <div id="kt_app_content" className="app-content flex-column-fluid">
            {/* <Navigation /> */}
            <div id="kt_app_content" class="app-content flex-column-fluid">
                {/* <!--begin::Content container--> */}
                <div id="kt_app_content_container" class="app-container container-xxl">
                    {/* <!--begin::Card--> */}
                    <div class="card">
                        {/* <!--begin::Card header--> */}
                        <div class="card-header border-0 pt-6">
                            {/* <!--begin::Card title--> */}
                            <div class="card-title">

                            </div>
                            {/* <!--begin::Card title--> */}
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
    )
}

export default UserMangement