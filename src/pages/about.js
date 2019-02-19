import React from "react";
import Layout from "../components/Layout";
// import { Link } from "gatsby";
import { Spring } from "react-spring";
import styled from "styled-components";

const Wrapper = styled.div`
	color: white;
	height: 100%;
	min-height: 72vh;
	background: #16161d;
		hr {
		background: #00bcd4;
		box-shadow: 0 0 10px #00bcd4, 0 0 20px #00bcd4,
			0 0 30px #00bcd4;
	}
	a {
		color: white;
		font-family: sans-serif;
		font-weight: bold;
		transition: ease-in-out 300ms;

		&:hover {
			padding: 2px 15px;
			transition: ease-in-out 200ms;
			color: white;
			border-radius: 15px;
			/* background-image: linear-gradient(-15deg, #2ac7d6 0%, #9576bb 100%); */
			text-shadow:0 0 10px #ae52d4, 0 0 20px #ae52d4,
				0 0 30px #ae52d4, 5px 5px 40px #ae52d4;
		}


	}
`;

const About = () => (
	<Layout>
		<Spring
			from={{ marginTop: "-20px", opacity: 0 }}
			to={{ marginTop: "0", opacity: 1 }}
		>
			{styles => (
				<Wrapper style={styles}>
					<h2>I have a crippling coffee addiction.</h2>
					<h3>I also write code.</h3>
					<h3>Usually, It's doing both of those things at the same time.</h3>

					<h3>I work the majority of the time with React, Emotion, Styled Components, Nodejs just to name a few.</h3>

				<hr/>

					<h3>
						I have made a VS Code theme which is published on the VS Code Marketplace. My theme, raspberryCandy is a Neon/Pastel theme runs heay on a neon electric aqua and a pastel pink/purple. Click the screenshot to check it out. 
					</h3>

				<hr/>

					<img src="https://res.cloudinary.com/tomwritescode/image/upload/v1550563515/Screenshot2.png" alt="raspberryCandy Screenshot"/>

				</Wrapper>
			)}
		</Spring>
	</Layout>
);
export default About;
