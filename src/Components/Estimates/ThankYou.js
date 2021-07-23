import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../API/Api.js";
import { UserId } from "../API/Api.js";
import { MobileNavBar } from "../NavBar/MobileNavBar";
import { BrowserNavBar } from "../NavBar/BrowserNavBar";
import { BrowserView, MobileView } from "react-device-detect";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import HeaderLogo from "../Images/topLogoBar.png";
import { DeskFooter } from "../DeskFooter/DeskFooter";
import './Estimates.css';

export function ThankYou() {
    const [users, setUsers] = useState([]);

    // This fetch is for the FirstName
    useEffect(() => {
        fetchUser();
    }, []);
    useEffect(() => {
        console.log(users);
    }, [users]);

    const fetchUser = async () => {
        const response = await axios(`${API_BASE_URL}user/${UserId}`);
        setUsers(response.data);
    };

    return (
        <>
            <BrowserView>
                <BrowserNavBar active ="estimates"/>
                <Card className="border-0 w-100 mx-auto">
                    <Card.Header
                        className="d-flex justify-content-center align-items-center mt-3 mb-4 border-0"
                        id="bchead"
                    >

                        Thank You {users.firstName}!

                    </Card.Header>

                    <Card.Body id="tybbody">
                        <Card.Title className="mb-3 text-center" id="bctitle">

                            Your estimate will be reviewed by one of our technicians
                            and you will receive a quote via email to <strong>{users.email}</strong>

                        </Card.Title>
                    </Card.Body>
                    <DeskFooter />
                </Card>
            </BrowserView>

            <MobileView>
                <Image
                    src={HeaderLogo}
                    className="d-flex w-100 mx-auto justify-content-center"
                />

                <Card className="border-0" id="mcrd">
                    <Card.Header
                        className="d-flex justify-content-center align-items-center text-white"
                        id="mchead"
                    >
                        
                        Thank You {users.firstName}!
                    
                    </Card.Header>

                    <Card.Body id="mcbody">
                        <Card.Title className="mb-3 text-center" id="mctitle">

                            Your estimate will be reviewed by one of our technicians
                            and you will receive a quote via email to <strong>{users.email}</strong>

                        </Card.Title>

                    </Card.Body>
                </Card>

                <MobileNavBar active ="estimates" />
            </MobileView>
        </>
    );
}
