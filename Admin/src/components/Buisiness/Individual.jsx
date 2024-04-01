import React from 'react'
import { CardBody,Table,Card } from 'reactstrap';
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BusinessDetailsDashboard = () => {
    const businessDetails = {
        businessName: 'Example Business',
        contactNumber: '123-456-7890',
        country: 'Country Name',
        state: 'State Name',
        place: 'Place Name',
        gstNumber: 'GST123456789',
        logo: 'logo.jpg', // Assuming you have a path to the logo image
        gstDocument: 'gst_document.pdf', // Assuming you have a path to the GST document
        paymentStatus: 'Paid',
        paymentAmount: '$1000',
        paymentMethod: 'Credit Card',
      };


  return (
    
    
    <div className='page-content'>
      <Breadcrumbs title="Business" breadcrumbItem="Individual Business Details" />
        <Card>
          <CardBody>
          <Table>
        <tbody>
          <tr>
            <th>Business Name</th>
            <td>Example Business</td>
          </tr>
          <tr>
            <th>Contact Number</th>
            <td>123-456-7890</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>Country Name</td>
          </tr>
          <tr>
            <th>State</th>
            <td>State Name</td>
          </tr>
          <tr>
            <th>Place</th>
            <td>Place Name</td>
          </tr>
          <tr>
            <th>GST Number</th>
            <td>ABC123</td>
          </tr>
          <tr>
            <th>GST Document</th>
            <td><a href="#">View Document</a></td>
          </tr>
          <tr>
            <th>Logo</th>
            <td><img src="logo.png" alt="Logo" /></td>
          </tr>
          <tr>
            <th>Payment Status</th>
            <td>Paid</td>
          </tr>
          <tr>
            <th>Payment Amount</th>
            <td>$100</td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td>Credit Card</td>
          </tr>
        </tbody>
      </Table>
        </CardBody></Card>
    </div>
    
  );
};

export default BusinessDetailsDashboard;
