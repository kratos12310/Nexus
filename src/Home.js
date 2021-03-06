import React, { useState } from 'react'
import './Home.css'
// ES7 snippets to do 'rfce' to get the base structure 
import Banner from './Banner'
import Card from './Card'
import { Grid } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    
    return (
        <div>
            <Header/>
        <div className='home'>
            
            <Banner />
            <div className='home__section'>
            <Grid container spacing ={3}>
                
                
                <Grid item xs ={12} sm={6} md={4}> 
                <Link to="/allngos" className='lk' state={{catg :"Animal Welfare",type:"1"}} >
                <Card
                src="https://c1.wallpaperflare.com/preview/382/605/294/animal-welfare-dog-imprisoned-animal-shelter.jpg"
                title="Animal Welfare"
                />
                </Link>
                </Grid>
                
                <Grid item xs ={12} sm={6} md={4}>
                <Link Link to="/allngos" className='lk' state={{catg :"Forest Conservation",type:"1"}}>
                <Card
                src="https://us.123rf.com/450wm/sarayutsy/sarayutsy1904/sarayutsy190400050/126796981-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on-nature-fi.jpg?ver=6"
                title="Forest Conservation"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link Link to="/allngos" className='lk' state={{catg :"Aiding The Old",type:"1"}}>
                <Card
                src="https://cdn.pixabay.com/photo/2017/10/31/20/57/hands-2906458__480.jpg"
                title="Aiding the Old"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link to="/allngos" className='lk' state={{catg :"Women Empowerment",type:"1"}}>
                <Card
                src="https://www.chris-cancercommunity.com/wp-content/uploads/women-empowerment-quotes-hd-wallpaper-17.jpg"
                title="Women Empowerment"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link to="/allngos" className='lk' state={{catg :"Child Education",type:"1"}}>
                <Card
                src="https://digitallearning.eletsonline.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg"
                title="Child Education"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link to="/allngos" className='lk' state={{catg :"Healthcare",type:"1"}}>
                <Card
                src="https://wallpaperaccess.com/full/624111.jpg"
                title="Healthcare"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link Link to="/allngos" className='lk' state={{catg :"Empowering the Disabled",type:"1"}}>
                <Card
                src="https://t3.ftcdn.net/jpg/02/63/50/44/360_F_263504477_qpBnLEqKjlXDmIn9s4Tpio9YMJWxOct4.jpg"
                title="Empowering the Disabled"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link to="/allngos" className='lk' state={{catg :"Water Conservation",type:"1"}}>
                <Card
                src="https://www.kindpng.com/picc/m/121-1212281_drop-water-conservation-hd-png-download.png"
                title="Water Conservation"
                />
                </Link>
                </Grid>

                <Grid item xs ={12} sm={6} md={4}>
                <Link Link to="/allngos" className='lk' state={{catg :"Food Managment",type:"1"}}>
                <Card
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
                title="Food Management"
                />
                </Link>
                </Grid>
               
            </Grid>
         
            </div>
            
            </div>
       
        </div>
    )
}


export default Home