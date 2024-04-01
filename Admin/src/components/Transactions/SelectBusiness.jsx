import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Breadcrumbs from '../Common/Breadcrumb'
import TableContainer from "../Common/TableContainer";
import { UncontrolledTooltip,Button } from 'reactstrap'


const SelectBusiness = () => {
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
                header: "Transactions",
                enableColumnFilter: false,
                enableSorting: true,
                accessorKey: "view",
                cell: (cellProps) => {
                  return (
                    <Link to="/list-transactions">
                        <Button type="button" color="primary" className="btn-sm btn-rounded">
                        View Transactions
                        </Button>
                    </Link>
                  );
                },
              },
           
            
        ],
        []
    );

        const data = [
        {
            name: "Airi Satou",
            position: "Clinic",
            age: 33,
            office: "Tokyo",
            startDate: "2008/11/28",

        },
        {
            name: "Cedric Kelly",
            position: "Restraunt",
            age: 22,
            office: "Edinburgh",
            startDate: "2012/03/29",

        },
        {
            name: "Ashton Cox",
            position: "Taxi service",
            age: 66,
            office: "San Francisco",
            startDate: "2009/01/12",

        },
        {
            name: "Garrett Winters",
            position: "Saloon Booking",
            age: 63,
            office: "Tokyo",
            startDate: "2011/07/25",

        },
        {
            name: "Tiger Nixon",
            position: "Grocery Booking",
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
                <Breadcrumbs title="Transactions" breadcrumbItem="List Business" />
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
SelectBusiness.propTypes = {
    preGlobalFilteredRows: PropTypes.any,

};


export default SelectBusiness