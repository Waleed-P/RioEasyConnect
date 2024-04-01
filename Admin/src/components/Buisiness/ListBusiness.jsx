import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Breadcrumbs from '../Common/Breadcrumb'
import TableContainer from "../Common/TableContainer";
import { UncontrolledTooltip,Button } from 'reactstrap'


const DatatableTables = () => {
    const columns = useMemo(
        () => [
            {
                header: 'Business Name',
                accessorKey: 'position',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Contact Number',
                accessorKey: 'name',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Country',
                accessorKey: 'office',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'status',
                accessorKey: 'age',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Date',
                accessorKey: 'startDate',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'View Details',
                accessorKey: 'startDate',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "View Details",
                enableColumnFilter: false,
                enableSorting: true,
                accessorKey: "view",
                cell: (cellProps) => {
                  return (
                    <Button type="button" color="primary" className="btn-sm btn-rounded">
                      View Details
                    </Button>
                  );
                },
              },
            
            {
                header: 'Action',
                accessorKey: 'action',
                enableColumnFilter: false,
                enableSorting: false,
                cell: (cellProps) => {
                    return (
                        <div className="d-flex gap-3">
                            <Link
                                to="#"
                                className="text-success"
                                onClick={() => {
                                    const orderData = cellProps.row.original;
                                    handleOrderClick(orderData);
                                }}
                            >
                                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                                <UncontrolledTooltip placement="top" target="edittooltip">
                                    Edit
                                </UncontrolledTooltip>
                            </Link>
                            <Link
                                to="#"
                                className="text-danger"
                                onClick={() => {
                                    const orderData = cellProps.row.original; onClickDelete(orderData);
                                }}>
                                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                                <UncontrolledTooltip placement="top" target="deletetooltip">
                                    Delete
                                </UncontrolledTooltip>
                            </Link>
                        </div>
                    );
                }
            },
        ],
        []
    );

    const data = [
        {
            name: "Airi Satou",
            position: "Accountant",
            age: 33,
            office: "Tokyo",
            startDate: "2008/11/28",

        },
        {
            name: "Cedric Kelly",
            position: "Senior Javascript Developer",
            age: 22,
            office: "Edinburgh",
            startDate: "2012/03/29",

        },
        {
            name: "Ashton Cox",
            position: "Junior Technical Author",
            age: 66,
            office: "San Francisco",
            startDate: "2009/01/12",

        },
        {
            name: "Garrett Winters",
            position: "Accountant",
            age: 63,
            office: "Tokyo",
            startDate: "2011/07/25",

        },
        {
            name: "Tiger Nixon",
            position: "System Architect",
            age: 61,
            office: "Edinburgh",
            startDate: "2011/04/25",

        },
    ];

    //meta title
    document.title = "Data Tables | Skote - Vite React Admin & Dashboard Template";

    return (
        <div className="page-content">
            <div className="container-fluid">
                <Breadcrumbs title="Business" breadcrumbItem="List Business" />
                <TableContainer
                    columns={columns}
                    data={data || []}
                    isGlobalFilter={true}
                    isPagination={true}
                    SearchPlaceholder="Search Business"
                    pagination="pagination"
                    paginationWrapper='dataTables_paginate paging_simple_numbers'
                    tableClass="table-bordered table-nowrap dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                />
            </div>
        </div>
    );
}
DatatableTables.propTypes = {
    preGlobalFilteredRows: PropTypes.any,

};


export default DatatableTables


