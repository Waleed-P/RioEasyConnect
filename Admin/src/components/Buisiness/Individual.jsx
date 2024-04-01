import React from 'react'
import { CardBody,Table,Card,Row,Col,Label } from 'reactstrap';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Avatar } from '@mui/material';
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
        <Row>
          <Col xs={12} md={4} className='d-flex align-items-center justify-content-space-around gap-4 border-end border-1 border-dark' >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 86, height: 86 }}
              className='img-fluid'
            />
            <div>
              <h3>Business Name</h3>
              <p>Country | Place</p>
            </div>
          </Col>
          <Col xs={12} md={4} className='border-end border-1 border-dark'>
            <div className='mt-3'>
            <Label> Name : </Label> User <br />
            <Label> Mob :</Label> +91 2367932392 
            </div>
          </Col>
          <Col xs={12} md={4} >
            <div className='mt-3'>
            <Label> Wallet Balance :</Label> 300$ <br />
            <Label> Last Active : </Label> 23/03/2024
            </div>
          </Col>
          
        </Row>
      </CardBody>
    </Card>

    <Row>
    <Col xs={12} md={6}>
      <Card>
        <CardBody>
          <div className='d-flex align-items-center justify-content-evenly '>
            <div>< svg xmlns="http://www.w3.org/2000/svg" className='pe-0' width="46" height="46" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg></div>
  
            <div><h4>WhatsApp Details</h4></div>

            <div style={{fontSize:'10px', height:'20px', width:'60px', color:'white'}} className='bg-success rounded d-flex align-items-center justify-content-center' >Added</div>
            
            <div style={{fontSize:'10px', height:'20px' , width:'60px' , color:'white'}} className='bg-danger rounded d-flex align-items-center justify-content-center ms-2' >Pending</div>

          </div>
        <Table style={{border:'0'}} className='mt-3'>
          <tr>
            <th >Pointing User : </th>
            <td>User Name</td>
          </tr>
          <tr>
            <th>Contact Number : </th>
            <td>+91 2343424323</td>
          </tr>
        </Table>
        </CardBody>
      </Card>
    </Col>
    <Col xs={12} md={6}>
    <Card>
        <CardBody>
        <div className='d-flex align-items-center justify-content-evenly'>
            <div><svg className='pe-0'  xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
            </svg></div>
  
            <div><h4>GST Details</h4></div>

            <div style={{fontSize:'10px', height:'20px', width:'60px' , color:'white'}} className='bg-success rounded d-flex align-items-center justify-content-center' >Added</div>
            
            <div style={{fontSize:'10px', height:'20px' , width:'60px' , color:'white'}} className='bg-danger rounded d-flex align-items-center justify-content-center ms-2' >Pending</div>

          </div>
        <Table style={{border:'0'}} className='mt-3'>
          <tr>
            <th>Gst Number : </th>
            <td>876342934876</td>
          </tr>
          <tr>
            <th>View Document : </th>
            <td> <a href="">View</a> </td>
          </tr>
        </Table>

        </CardBody>
      </Card>
    </Col>
    </Row>


        <Card>
          <CardBody>
          <Table>
        <tbody>
          <tr>
            <th>
              <h3>Additional Information</h3>
            </th>
          </tr>
          <tr>
            <th>State</th>
            <td>State Name</td>
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
