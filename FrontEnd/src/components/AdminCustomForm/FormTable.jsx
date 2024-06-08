import React from 'react'

import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table'
import { GlobalFilter, DefaultFilterForColumn } from './Filter';
import Dropdown from "react-bootstrap/Dropdown";
import regeneratorRuntime from "regenerator-runtime"
const FormTable = ({ columns, data }) => {
    const initialState = {
        pageSize: 2,
        pageIndex: 0
    };

    const onRowClick = (e) => {
        console.log(e)
        let link = "http://localhost:5173/customform/" + e
        window.location.href = link
    }
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        preGlobalFilteredRows,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState,
        defaultColumn: { Filter: DefaultFilterForColumn }
    }, useGlobalFilter,
        //  useFilters,
        usePagination)
    // Render the UI for your table
    return (
        <>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th class="min-w-125px" {...column.getHeaderProps()}>{column.render('Header')}
                                    {/* Rendering Default Column Filter */}
                                    {/* <div>
                                        {column.canFilter ? column.render("Filter")
                                            : null}
                                    </div> */}
                                </th>

                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody class="text-gray-600 fw-semibold" {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {

                                    if (cell.column.id == "formid") {
                                        console.log(cell.value)
                                        return <td class="text-end">
                                            <div class="d-flex align-items-center">
                                                <div class="ms-2">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="light">
                                                            <span class="svg-icon svg-icon-5 m-0">
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect
                                                                        x="10"
                                                                        y="10"
                                                                        width="4"
                                                                        height="4"
                                                                        rx="2"
                                                                        fill="currentColor"
                                                                    />
                                                                    <rect
                                                                        x="17"
                                                                        y="10"
                                                                        width="4"
                                                                        height="4"
                                                                        rx="2"
                                                                        fill="currentColor"
                                                                    />
                                                                    <rect
                                                                        x="3"
                                                                        y="10"
                                                                        width="4"
                                                                        height="4"
                                                                        rx="2"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>

                                                            <Dropdown.Item
                                                                onClick={() => onRowClick(cell.value)}
                                                            >
                                                                View
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <!--end::Action=--> */ }
                                    } else if (cell.column.id == "profilePicture") {
                                        {/* <!--begin::User=--> */ }
                                        return <td class="d-flex align-items-center">
                                            {/* <!--begin:: Avatar --> */}
                                            <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                <a href="../../demo1/dist/apps/user-management/users/view.html">
                                                    <div class="symbol-label">
                                                        <img src={"http://localhost:3000/uploads/profile/" + cell.value} alt="Emma Smith" class="w-100" />
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                        </td>
                                        {/* <!--end::User=--> */ }
                                    } else if (cell.column.id == "verified") {
                                        return <td {...cell.getCellProps()} >
                                            {cell.value ? <div class="badge badge-light-success fw-bold">True</div> : <div class="badge badge-light-warning fw-bold">False</div>}
                                        </td>

                                    } else if (cell.column.id == "disabled") {
                                        return <td {...cell.getCellProps()} >
                                            {cell.value ? <div class="badge badge-light-success fw-bold">Disabled</div> : <div class="badge badge-light-warning fw-bold">Enabled</div>}
                                        </td>

                                    } else {

                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div class="dataTables_paginate paging_simple_numbers pagination" id="kt_table_users_paginate">
                <ul class="pagination">
                    <li class="paginate_button page-item previous" id="kt_table_users_previous">
                        <button onClick={() => gotoPage(0)} class="page-link">
                            <i class="previous"></i>
                            <i class="previous"></i>
                        </button>
                    </li>
                    <li class="paginate_button page-item previous" id="kt_table_users_previous">
                        <button onClick={() => previousPage()} data-dt-idx="0" tabindex="0" class="page-link">
                            <i class="previous"></i>
                        </button>
                    </li>
                    {pageOptions.map((index) => {

                        return <li class={pageIndex == index ? "paginate_button page-item active" : "paginate_button page-item "}
                            onClick={(e) => {
                                gotoPage(index);
                            }}>
                            <a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" class="page-link">
                                {index + 1}</a>
                        </li>
                    })}
                    <li class="paginate_button page-item next" id="kt_table_users_next">
                        <button onClick={() => nextPage()} class="page-link">
                            <i class="next">
                            </i>
                        </button>
                    </li>
                    <li class="paginate_button page-item next" id="kt_table_users_next">
                        <button onClick={() => gotoPage(pageCount - 1)} class="page-link">
                            <i class="next">
                            </i>
                            <i class="next">
                            </i>
                        </button>
                    </li>
                </ul>
            </div>


        </>
    )

}

export default FormTable