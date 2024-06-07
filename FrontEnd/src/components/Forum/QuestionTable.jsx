import React from 'react'

import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table'
import { GlobalFilter, DefaultFilterForColumn } from './Filter';

const QuestionTable = ({ columns, data }) => {
    const initialState = {
        pageSize: 10,
        pageIndex: 0
    };
    const handleDelete = (id) => {
        console.log(id)
    }
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
            <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className="min-w-125px" {...column.getHeaderProps()}>{column.render('Header')}
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
                <tbody className="text-gray-600 fw-semibold" {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {

                                    if (cell.column.id == "_id") {
                                        return <td className="text-end">
                                            <div className="d-flex align-items-center btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(cell.value)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                        {/* <!--end::Action=--> */ }
                                    } else if (cell.column.id == "reported") {
                                        return <td {...cell.getCellProps()} >
                                            {!cell.value ? <div className="badge badge-light-success fw-bold">Yes</div> : <div className="badge badge-light-danger fw-bold">No</div>}
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
            <div className="dataTables_paginate paging_simple_numbers pagination" id="kt_table_users_paginate">
                <ul className="pagination">
                    <li className="paginate_button page-item previous" id="kt_table_users_previous">
                        <button onClick={() => gotoPage(0)} className="page-link">
                            <i className="previous"></i>
                            <i className="previous"></i>
                        </button>
                    </li>
                    <li className="paginate_button page-item previous" id="kt_table_users_previous">
                        <button onClick={() => previousPage()} data-dt-idx="0" tabindex="0" className="page-link">
                            <i className="previous"></i>
                        </button>
                    </li>
                    {pageOptions.map((index) => {

                        return <li className={pageIndex == index ? "paginate_button page-item active" : "paginate_button page-item "}
                            onClick={(e) => {
                                gotoPage(index);
                            }}>
                            <a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" className="page-link">
                                {index + 1}</a>
                        </li>
                    })}
                    <li className="paginate_button page-item next" id="kt_table_users_next">
                        <button onClick={() => nextPage()} className="page-link">
                            <i className="next">
                            </i>
                        </button>
                    </li>
                    <li className="paginate_button page-item next" id="kt_table_users_next">
                        <button onClick={() => gotoPage(pageCount - 1)} className="page-link">
                            <i className="next">
                            </i>
                            <i className="next">
                            </i>
                        </button>
                    </li>
                </ul>
            </div>


        </>
    )

}

export default QuestionTable