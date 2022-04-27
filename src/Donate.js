import { DryOutlined } from '@mui/icons-material';
import React, { useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { Button,Form ,Label,FormGroup,Input} from 'reactstrap'
import {useLocation,Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
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
      axios.get("http://localhost:8096/api/donor/"+donor.id).then(
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
        axios.post("http://localhost:8096/api/savedonatedetails",donorDetails).then(
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
            className="c"
            src="images/logo.png"
            alt=""
        />
        </Link>
      </div>
      <div>
          <Form className='fm'>
  <FormGroup className='fm-inputs'> 
          <Label for="Donor Name" className='fm-label'>
              Donation Name
            </Label>
     <Input className='fm-input'
      id="donorname"
      name="donorname"
      placeholder="Donate Under The Name"
      
      onChange={(e)=>{setDonorDetails({...donorDetails,"donorname":e.target.value})}}
    />
  </FormGroup>
  <FormGroup className='fm-inputs'> 
          <Label for="Ngo Name" className='fm-label'>
              Donating To
            </Label>
     <Input className='fm-input'
      id="donatedamt"
      name="donatedamt"
      placeholder="Enter Ngo Name"
      
      onChange={(e)=>{setDonorDetails({...donorDetails,"volunteerto":e.target.value})}}
    />
  </FormGroup>
        <FormGroup className='fm-inputs'> 
          <Label for="Donated Amount" className='fm-label'>
              Amount To be Donated
            </Label>
     <Input className='fm-input'
      id="donatedamt"
      name="donatedamt"
      placeholder="Enter Amount"
      type="number" 
      onChange={(e)=>{setDonorDetails({...donorDetails,"donatedamt":e.target.value})}}
    />
  </FormGroup>
            <Button className ='frm-input-btn' onClick={(e)=>{console.log(donorDetails);formHandler(e)}}>
              CONFIRM UPDATE
            </Button>
            <div className='button'>
            <Link to='/viewProfile' state={{id :ngo.id}}><Button color ='warning' outline >Go Back</Button></Link>
            </div>
          </Form>
      </div>
    </div>
  )
}

export default Donate