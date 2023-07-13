import React from 'react';
import Faq from "react-faq-component";
import './supportbox.css';
import bg from './assets/support.mp4';
import NavBar from './navbar';
const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title: "What is Travel On?",
            content: `RapidGo was started by Tharakeshwari. RapidGo is a travel app, 
            with a user base of over 170 million travellers. RapidGo is used for deal discovery, personalized recommendations, dynamic marketing, airfare predictions, train delay information, PNR confirmation status, infrastructure cost optimization, 
            business intelligence and for providing fully-automated customer service over chat and voice.`,
        },
        {
            title: "Why is RapidGo different from other travel booking platforms?",
            content:
                'RapidGo is an intelligent, AI-based travel platform that helps you organise, book and track your trips. With unique features such as the Online/Offline Train Running Status, PNR Prediction, Refund Calculator, TDR tracking, Station Alarm and so on, the RapidGo Trains app offers a seamless booking experience. The app can currently be used in 8 Indian languages. On the other hand, the RapidGo trains app also offers the users some unique features such as fare prediction, auto web check-in and so on!',
        },
        {
            title: "How do I get a refund on a ticket booking through RapidGo?",
            content: `For refund of a confirmed booking, you need to place a cancellation request from the My Trips section of the RapidGo app.
            For refund related to a failed booking, the amount deducted from your account will be reversed in the source account within 7 days.`,
        },
        {
            title: "How can I track refunds on RapidGo?",
            content: <ul >
                <li style={{color:'grey'}}>Please follow the steps mentioned below to track your refund status:</li>
                <li style={{color:'grey'}}> Log in to your RapidGo account</li>
                <li style={{color:'grey'}}> Click on the customer service tab</li>
                <li style={{color:'grey'}}> Select your trip from the 'MyTrips' section</li>
                <li style={{color:'grey'}}>Click on the booking ID and check the refund status</li>
            </ul>,
        },
        {
            title:"How do I cancel my ticket on RapidGo?",
            content:<ul><li style={{color:'grey'}}>Please follow these simple steps to cancel your ticket on RapidGo</li>
                <li style={{color:'grey'}}>Log in to RapidGo</li>
            <li style={{color:'grey'}}> Visit the 'My Trips' section on the app</li>
            <li style={{color:'grey'}}> Select the desired booking, scroll down and click on the 'cancel ticket' tab to initiate cancellation.</li>
            <li style={{color:'grey'}}> In case of partial cancellation, please select the desired passenger(s) and click on the cancel tab.</li>
            </ul>,
        },
        {
            title: "What is the package version",
            content: 'current version is 1.2.1',
        },
    ],
};
const styles = {
    bgColor: '#D3D3D3',
    opacity:0.2,
    titleTextColor: "red",
    titleTextSize: '20px',
    rowTitleColor: '#494848',
    rowContentColor: 'black',
     transitionDuration: "1s",
};

const config = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

function Support() {
    return ( 
        <>
        <div id="entire">
            <NavBar/>
        <div id="supportvideo">
        <video className='videoTag' autoPlay loop muted style={{height:"80vh"}}>
    <source src={bg} type='video/mp4' />
</video>
</div>
        <div id="supportsearch">
        <h3>Book your train ticket with RapidGo for a memorable experience.</h3>
        <br></br>
        <p>
        RapidGo.com is a reliable travel agent in India, which offers great deals on  tickets. Book train for all destinations across India  at the lowest trainfares with us. As one of the leading travel portals of India, we constantly endeavour to make your vacation memorable. So, why go anywhere else? Call us to save big on all kinds of travel products and services and have a memorable travel experience on small budget. 
        We believe in creating awesome vacations for our clients through customized holiday packages & tours. Enjoy great savings on holiday trips with RapidGo.com.

Cheap Tickets are available at RapidGo.com, one of the leading travel portals in India. The company offers great discounts on train tickets. 
Being a reliable name in the traveling industry of India, we focus on providing a smooth providing booking experience to our customers. So, book air tickets at the lowest airfare by planning your trip with us.
If you want to book your train tickets at no convenience fee and looking for transparency in air ticket pricing, 
we are here to serve you with the best possible offers. To reduce your train booking cost, we have tied up with several banking partners. 
You can avail the best train ticket booking deals for all major low-cost carriers of India and abroad with us. 
Last minute discounts on air ticket booking are also available with us. 
So, go for a journey to your preferred destinations with the best trainfare discounts.
        </p>
        </div>
        </div>
        <div id="supportbox">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3 id="fcompany">RapidGo</h3>

				<p class="footer-links">
				Here • There • Everywhere
				</p>

				<p class="footer-company-name">RapidGo © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>123, ABC Street</span>Kuniamuthur,Coimbatore</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9994977285</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">abc@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
                    Book your train tickets only on RapidGo and enjoy hassle-free super fast booking experience.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fab fa-facebook"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
					<a href="#"><i class="fab fa-github"></i></a>

				</div>

			</div>

		</footer>
        </>
     );
}

export default Support;