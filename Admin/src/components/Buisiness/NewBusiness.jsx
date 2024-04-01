import React from 'react'
import withRouter from "../../components/Common/withRouter";
import { Card, Col, Container, Row, CardBody, CardTitle, Label, Form, Input, InputGroup, FormFeedback } from "reactstrap";
import "nouislider/distribute/nouislider.css";
import Breadcrumbs from "/src/components/Common/Breadcrumb";
import * as Yup from 'yup';
import { useFormik } from "formik";
import './NewBusiness.css'
import { number } from 'prop-types';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const NewBusiness = () => {

    //Floating labels forms
    const floatingformik = useFormik({
        initialValues: {
            name: "",
            email: "",
            select: "",
            check: "",
            number: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("This field is required"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            select: Yup.string().required("This field is required"),
            check: Yup.string().required("This field is required"),
            number: Yup.string().required("This field is required"),
        }),


    });


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Buisness" breadcrumbItem="New Business" />
                    <Row > 
                        <Col xl={12}>
                            <Card>
                                <CardBody>
                                    {/* <CardTitle className="h5">Business Details</CardTitle>
                                    <p className="card-title-desc">Please provide the below informations.</p> */}

                                    <Form onSubmit={floatingformik.handleSubmit} >
                                       <div className='main-div d-flex gap-3'> 
                                       <Col xl={8}>
                                        <div>
                                            <h5>Business Details</h5>
                                            <p>Please Provide The below informations</p>
                                        <Row>
                                            <div className="form-floating mb-3">
                                                <input type="text" name="name" className="form-control" id="floatingnameInput" placeholder="Enter Name"
                                                    value={floatingformik.values.name}
                                                    onChange={floatingformik.handleChange}
                                                    onBlur={floatingformik.handleBlur}
                                                />
                                                <label className='ms-3' htmlFor="floatingnameInput">Business Name</label>
                                                {
                                                    floatingformik.errors.name && floatingformik.touched.name ? (
                                                        <span className="text-danger">{floatingformik.errors.name}</span>
                                                    ) : null
                                                }
                                            </div>

                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-floating mb-3">
                                                    <input type="email" name="email" className="form-control" id="floatingemailInput" placeholder="Enter Email address"
                                                        value={floatingformik.values.email}
                                                        onChange={floatingformik.handleChange}
                                                        onBlur={floatingformik.handleBlur}
                                                    />
                                                    <label htmlFor="floatingemailInput">Email address</label>
                                                    
                                                    {
                                                        floatingformik.errors.email && floatingformik.touched.email ? (
                                                            <span className="text-danger">{floatingformik.errors.email}</span>
                                                        ) : null
                                                    }
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-floating mb-3">
                                                    <input type="text" name="number" className="form-control" id="floatingnameInput" placeholder="Enter number"
                                                        value={floatingformik.values.name}
                                                        onChange={floatingformik.handleChange}
                                                        onBlur={floatingformik.handleBlur}
                                                    />
                                                    <label className='ms-3' htmlFor="floatingnameInput">Contact Number</label>
                                                    {
                                                        floatingformik.errors.name && floatingformik.touched.number ? (
                                                            <span className="text-danger">{floatingformik.errors.number}</span>
                                                        ) : null
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div className="form-floating mb-3">
                                                    <select className="form-select" name="select"
                                                        value={floatingformik.values.select}
                                                        onChange={floatingformik.handleChange}
                                                        onBlur={floatingformik.handleBlur}>
                                                        <option defaultValue="0">Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Choose your...</label>
                                                    <div>
                                                        {
                                                            floatingformik.errors.select && floatingformik.touched.select ? (
                                                                <span className="text-danger">{floatingformik.errors.select}</span>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col md={4}>
                                                <div className="form-floating mb-3">
                                                    <select className="form-select" name="select"
                                                        value={floatingformik.values.select}
                                                        onChange={floatingformik.handleChange}
                                                        onBlur={floatingformik.handleBlur}>
                                                        <option defaultValue="0">State</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Choose your...</label>
                                                    <div>
                                                        {
                                                            floatingformik.errors.select && floatingformik.touched.select ? (
                                                                <span className="text-danger">{floatingformik.errors.select}</span>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col md={4}>
                                                <div className="form-floating mb-3">
                                                    <select className="form-select" name="select"
                                                        value={floatingformik.values.select}
                                                        onChange={floatingformik.handleChange}
                                                        onBlur={floatingformik.handleBlur}>
                                                        <option value="">District</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label htmlFor="floatingSelectGrid">Choose your...</label>
                                                    <div>
                                                        {
                                                            floatingformik.errors.select && floatingformik.touched.select ? (
                                                                <span className="text-danger">{floatingformik.errors.select}</span>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                    <Col> 
                                    <div>
                                        <h5>GST Details</h5>
                                        <p>Provide the valid informations only</p>
                                        <div className="form-floating mb-3">
                                            <input type="text" name="GstNumber" className="form-control" id="floatingnameInput" placeholder="Gst No."
                                                value={floatingformik.values.GstNumber}
                                                onChange={floatingformik.handleChange}
                                                onBlur={floatingformik.handleBlur}
                                            />
                                            <label htmlFor="floatingnameInput">Name</label>
                                            
                                            {
                                                floatingformik.errors.name && floatingformik.touched.name ? (
                                                    <span className="text-danger">{floatingformik.errors.name}</span>
                                                ) : null
                                            }
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                        <Button
                                            className='upload-btn'
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                            >
                                            Upload file
                                            <VisuallyHiddenInput type="file" />
                                            </Button>
                                        </div>
                                    </div>
                                    </Col>  
                                </div>
                                <Row>
                                     <div className='d-flex' style={{flexDirection: 'row-reverse'}}>
                                            <button type="submit" className="btn btn-primary w-md" style={{ backgroundColor: "green", color: "white", border:"none" }}>Submit</button>
                                        </div>
                                     </Row> 
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default withRouter(NewBusiness)