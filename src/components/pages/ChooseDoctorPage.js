import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard2 from '../MyCard2'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'
import '../../utils/App.css'

import firebase from './../../firebase'
import { StylesProvider } from '@material-ui/core'

import ScrollArea from 'react-scrollbar'


export default class DoctorsPage extends React.Component {

    constructor() {
        super()
        this.state = {cardInfo: []}
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();


        // dbRef.child("cards").child(0).get().then((card) => {
        //     console.log(card.val())
        // })

        dbRef.child("doctor_types").get().then((doctors) => {
            this.setState({cardInfo: doctors.val()});
            console.log(this.state.cardInfo)
        })
        
        // dbRef.child("cards").get().then((cards) => {
        //     if (cards.exists()) {
        //         this.state.cardInfo = cards.val()
                
        //         console.log(cards.val());
        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    render() {
        console.log(this.state.cardInfo)
        return (
            // <div>{this.cardInfo}</div>

            <div className="page">
                <div className="grid" onLoad={() => console.log("LOADED")}>

                { this.state.cardInfo.map( (card, index) => 
                    <MyCard2 title={card.type} img={card.image_id} desc={card.desc}></MyCard2>)}

                </div>
            </div>
            
            
        ) 
    }
}