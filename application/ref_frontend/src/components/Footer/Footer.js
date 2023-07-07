import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<p style={{color: "white"}}>
            A.I.R is commited to offering quality products to improve your lifestyle. 
			We work hard as a team to ensure you are able to keep your items organized and offer the simplest ways to keep your life organized.
			 <a href="/about">Click here to learn more.</a>
            </p>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
