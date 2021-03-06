import { DryOutlined } from '@mui/icons-material';
import React, { useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { Button,Form ,Label,FormGroup,Input} from 'reactstrap'
import {useLocation,Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Donate.css'
import Footer from './Footer';
import base_url from "./bootapi";
function Donate() {

    
    const location=useLocation()
    const ngo=location.state
  
    //console.log(ngo)
    const [donorDetails,setDonorDetails] = useState({ngo:{"id":ngo.id}});
    const [donor,setDonor]=useState();
    let history=useNavigate();
    const Route=()=>{

        history("/")
    }
    const Droute=()=>{
      axios.get(`${base_url}/donor/`+donor.id).then(
        (response) => {
          localStorage.setItem('donor', JSON.stringify(response.data));
          history("/profiledonor")
            },
        (error) => {
            console.log("Lets Donate");
        }
    )
      
    }
   
    useEffect(() => {
        if(localStorage.getItem('token')){
          toast.error("Bringing NGO to NGO donate Functionalilty soon")
              Route();
            }
            else if(!localStorage.getItem('dtoken')&&!localStorage.getItem('token')){
                toast.error("Sign In To Donate")
                Route();
            }
            else{
                console.log(ngo)
                var donor = JSON.parse(localStorage.getItem('donor'));
                console.log(donor)
                var x=donor.id;
                setDonor(donor);
               setDonorDetails({...donorDetails,donor:{"id":x}});
               //setDonorDetails({...donorDetails,volunteerto:ngo.name});
                console.log(donorDetails)
                var y=ngo.id
               // setDonorDetails({...donorDetails,y});
                console.log("yay")
               console.log(donorDetails)
               
              //console.log(params)
                console.log("fffyay")                

            }
    },[]);
    const formHandler = (e) =>{
        e.preventDefault();
        axios.post(`${base_url}/savedonatedetails`,donorDetails).then(
        (response)=>{
          console.log(response);
          toast.success("Successfully Donated.")
          Droute()
      },(error)=>{
          toast.error("Unable to Donate")
          console.log(error);
          
        })
      }

  return (
    <div>
         <div>
        <Link to='/'>
      <img
            className="header_icon"
            src="images/logo.png"
            alt=""
        />
        </Link>
      </div>
      <div>
          <Form className='m'>
  <FormGroup className='m-inputs'> 
          <Label for="Donor Name" className='m-label'>
              Donation Name
            </Label>
     <Input className='m-input'
      id="donorname"
      name="donorname"
      placeholder="Donate Under The Name"
      
      onChange={(e)=>{setDonorDetails({...donorDetails,"donorname":e.target.value})}}
    />
  </FormGroup>
  <FormGroup className='m-inputs'> 
          <Label for="Ngo Name" className='m-label'>
              Donating To NGO
            </Label>
     <Input className='m-input'
      id="donatedamt"
      name="donatedamt"
      placeholder="Enter Correct Ngo Name in CAPS"
      
      onChange={(e)=>{setDonorDetails({...donorDetails,"volunteerto":e.target.value})}}
    />
  </FormGroup>
        <FormGroup className='m-inputs'> 
          <Label for="Donated Amount" className='m-label'>
              Amount 
            </Label>
     <Input className='m-input'
      id="donatedamt"
      name="donatedamt"
      placeholder="Enter the Amount"
      type="number" 
      onChange={(e)=>{setDonorDetails({...donorDetails,"donatedamt":e.target.value})}}
    />
  </FormGroup>
            <Button className ='m-input-btn' onClick={(e)=>{console.log(donorDetails);formHandler(e)}}>
              DONATE NOW
            </Button>
            <div className='bn'>
            <Link to='/viewProfile' state={{id :ngo.id}}><Button color ='warning' outline >Go Back</Button></Link>
            </div>
          </Form>
      </div>
      <Footer />
    </div>
  )
}

export default Donate