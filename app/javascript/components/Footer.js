import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Input, Form, Button, Modal, Label, Grid, List, Header } from 'semantic-ui-react'

class Footer extends React.Component {
	render() {
		return (
			<React.Fragment>
				
\				<footer className="main-footer">
					<div className="container">
						<Grid stackable columns={5}>
							<Grid.Row>
								<Grid.Column className="linkedin">
									<Header as='h3' textAlign='center'>Get to Know Us</Header>
									
									<List animated verticalAlign='middle'>
										<List.Item>
											<List.Content href='https://www.linkedin.com/in/nataliereinicke/'><List.Icon name='linkedin' /> Natalie Reinicke</List.Content>
										</List.Item>
										<List.Item>
											<List.Content href='https://www.linkedin.com/in/tuckermullen/'><List.Icon name='linkedin' /> Tucker Mullen</List.Content>
										</List.Item>
										<List.Item>
											<List.Content href='https://www.linkedin.com/in/johnson-carrie2000/'><List.Icon name='linkedin' /> Carrie Johnson</List.Content>
										</List.Item>
										<List.Item>
											<List.Content href='https://www.linkedin.com/in/luke-schoenberger-a34ba496/'><List.Icon name='linkedin' /> Luke Shoenberger</List.Content>
										</List.Item>
									</List>
								</Grid.Column>
								<Grid.Column className="github_link">
									<Header as='h3' textAlign='center'>Explore Our Code</Header>
									<a href='https://github.com/alpha-rhom/syntax-solutions'><i aria-hidden="true" className="github square icon"></i>Syntax Solutions</a>
									<p>Don't be shy; take a look at our code and see how this all came together!</p>
								</Grid.Column>
								<Grid.Column className="contact">
									<Header as='h3' textAlign='center'>Contact Us</Header>
									<p>Feel free to contact us by following the email below:</p>
									<a href="mailto:rhom7570@gmail.com">rhom7570@gmail.com</a>
								</Grid.Column>
								<Grid.Column className="about">
									<Header as='h3' textAlign='center'>About Us</Header>
									<p> We all attended LEARN Academy, a full stack developer bootcamp, located in San Diego, CA. This is our capstone project which we planned and executed on our own. </p>
								</Grid.Column>
								<Grid.Column className="logo middle aligned">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.84 100.99" className="rhomb">
										<path d="M66.46 85.94a15.85 15.85 0 0 0-4.1 2.2c-1.77 1.3-2.32 2.44-2.14 3.55a1.44 1.44 0 0 0 1.24 1.22 2.42 2.42 0 0 0 0 2.19 2.1 2.1 0 0 0 1.94 1c0 .91-.21 1.12.36 1.83a2.49 2.49 0 0 0 1.86.84 2.63 2.63 0 0 0 1.24 1.57c2.21 1.12 9.53-3.92 12.57-6 3.64-2.55 23.65-16.36 28.19-18.17l-6.8-9.85c.88.55-24.86 14.51-27.61 15.52-2.53.94-3.73.37-6.52.91-2.57.5-5.79 4.06-2.61 4.36" className="a"/>
										<path d="M67.59 101a2.27 2.27 0 0 1-1-.2 3.34 3.34 0 0 1-1.39-1.55 2.86 2.86 0 0 1-1.86-1 1.86 1.86 0 0 1-.49-1.55.62.62 0 0 1 0-.13A2.42 2.42 0 0 1 61 95.34a2.77 2.77 0 0 1-.18-2.11 1.94 1.94 0 0 1-1.07-1.46c-.24-1.41.51-2.69 2.34-4a16.36 16.36 0 0 1 4.2-2.25.5.5 0 0 1 .65.27.49.49 0 0 1-.27.65 15.3 15.3 0 0 0-4 2.14c-2 1.44-2 2.44-1.94 3.07a.92.92 0 0 0 .79.8.52.52 0 0 1 .4.27.51.51 0 0 1 0 .48 1.88 1.88 0 0 0 0 1.71 1.56 1.56 0 0 0 1.46.73.56.56 0 0 1 .37.13.51.51 0 0 1 .17.35v.68a.88.88 0 0 0 .26.85 2 2 0 0 0 1.46.66.51.51 0 0 1 .51.42 2.15 2.15 0 0 0 1 1.2c.76.39 3.33.11 12.06-6 .23-.16 23.25-16.21 28.3-18.23a.51.51 0 0 1 .65.28.51.51 0 0 1-.28.65c-4.32 1.73-23.56 14.94-28.09 18.12C73.62 99 69.71 101 67.59 101z" className="b"/>
										<path d="M64.05 87.56c-1.49-.14-1.75-.93-1.77-1.39-.08-1.55 2.42-3.58 4.33-4a17.35 17.35 0 0 1 3-.3 9.76 9.76 0 0 0 3.39-.55c2.84-1 25.57-13.48 27.29-15.14a.52.52 0 0 1 .76-.34.6.6 0 0 1 .25.52c-.17 1.7-27.68 15.8-27.95 15.9a10.84 10.84 0 0 1-3.8.65 16.59 16.59 0 0 0-2.8.28c-1.66.32-3.58 2.07-3.53 2.92 0 .3.48.41.86.45a.5.5 0 0 1 .46.54.52.52 0 0 1-.49.46z" className="b"/>
										<path d="M12.79 69.58a16 16 0 0 0-3.95-2.46c-2-.88-3.28-.79-4.15-.07a1.45 1.45 0 0 0-.44 1.68 2.45 2.45 0 0 0-1.92 1.07 2.12 2.12 0 0 0 .11 2.2c-.77.49-1.08.37-1.4 1.23a2.5 2.5 0 0 0 .2 2 2.66 2.66 0 0 0-.74 1.86C.64 79.56 8.66 83.39 12 85c4 1.88 26 12.3 29.83 15.33L47 89.47c0 1-25-14.28-27.25-16.15-2.08-1.73-2.18-3-4-5.19-1.72-2-6.4-3-5.07-.09" className="a"/>
										<path d="M41.86 100.78a.5.5 0 0 1-.31-.1c-3.68-2.9-24.39-12.79-29.73-15.27C3.86 81.7.11 79.07 0 77.12a3.37 3.37 0 0 1 .64-2A2.89 2.89 0 0 1 .57 73a1.83 1.83 0 0 1 1.1-1.19l.11-.06a2.43 2.43 0 0 1 .13-2.25 2.74 2.74 0 0 1 1.74-1.21 1.92 1.92 0 0 1 .72-1.66c1.11-.91 2.59-.91 4.67 0a16.29 16.29 0 0 1 4.05 2.51.5.5 0 1 1-.61.79 15.5 15.5 0 0 0-3.84-2.39C6.41 66.6 5.5 67 5 67.44a.93.93 0 0 0-.3 1.09.49.49 0 0 1 0 .47.5.5 0 0 1-.42.23 1.92 1.92 0 0 0-1.49.83 1.57 1.57 0 0 0 .1 1.63.52.52 0 0 1 .07.39.45.45 0 0 1-.22.32 5.6 5.6 0 0 1-.59.33.89.89 0 0 0-.61.65A2 2 0 0 0 1.67 75a.52.52 0 0 1-.11.66A2.12 2.12 0 0 0 1 77.07c.05.84 1.57 2.93 11.24 7.43.25.12 25.67 12 29.93 15.39a.5.5 0 0 1 .08.7.47.47 0 0 1-.39.19z" className="b"/>
										<path d="M47 90c-2.48 0-27.4-16.1-27.62-16.28a10.81 10.81 0 0 1-2.46-3 16.32 16.32 0 0 0-1.64-2.29c-1.11-1.28-3.58-2.07-4.3-1.6-.25.16-.11.62.05 1a.51.51 0 0 1-.25.67.51.51 0 0 1-.66-.25c-.62-1.36-.07-2 .32-2.23 1.31-.85 4.31.3 5.59 1.78a17.67 17.67 0 0 1 1.74 2.42 9.83 9.83 0 0 0 2.25 2.72c2.37 1.93 24.5 15.4 26.8 16.06a.63.63 0 0 1 .18 0 .5.5 0 0 1 .48.52.61.61 0 0 1-.32.48z" className="b"/>
										<path d="M43.68 15.06a15.68 15.68 0 0 0 4.1-2.2c1.77-1.3 2.33-2.44 2.14-3.55a1.44 1.44 0 0 0-1.24-1.22 2.44 2.44 0 0 0 0-2.19 2.12 2.12 0 0 0-1.95-1c0-.92.22-1.12-.36-1.83a2.47 2.47 0 0 0-1.86-.84 2.63 2.63 0 0 0-1.2-1.57c-2.2-1.12-9.53 3.92-12.57 6.05C27.1 9.26 7.1 23.06 2.55 24.88l6.8 9.85C8.47 34.18 34.22 20.22 37 19.21c2.54-.94 3.73-.37 6.52-.91 2.58-.5 5.79-4.06 2.62-4.36" className="a"/>
										<path d="M2.55 25.38a.5.5 0 0 1-.19-1c4.32-1.69 23.57-14.9 28.1-18.08 7.18-5 11.34-7 13.08-6.09a3.36 3.36 0 0 1 1.4 1.55 2.88 2.88 0 0 1 1.86 1 1.85 1.85 0 0 1 .48 1.55v.12a2.46 2.46 0 0 1 1.88 1.24 2.77 2.77 0 0 1 .18 2.11 1.92 1.92 0 0 1 1.07 1.46c.24 1.41-.5 2.69-2.33 4a16.36 16.36 0 0 1-4.2 2.25.5.5 0 0 1-.66-.27.49.49 0 0 1 .27-.65 15.43 15.43 0 0 0 4-2.14c2-1.44 2.05-2.44 2-3.07a.92.92 0 0 0-.8-.8.52.52 0 0 1-.4-.27.51.51 0 0 1 0-.48 2 2 0 0 0 0-1.71 1.59 1.59 0 0 0-1.46-.73.53.53 0 0 1-.38-.12.53.53 0 0 1-.17-.36 4.69 4.69 0 0 1 0-.68.91.91 0 0 0-.28-.83 2 2 0 0 0-1.45-.65.53.53 0 0 1-.51-.42 2.16 2.16 0 0 0-1-1.2C42.33.72 39.77 1 31 7.12c-.2.16-23.22 16.21-28.26 18.23z" className="b"/>
										<path d="M9.35 35.23a.42.42 0 0 1-.26-.08.58.58 0 0 1-.26-.52c.17-1.69 27.68-15.79 28-15.89a10.76 10.76 0 0 1 3.79-.65 16.69 16.69 0 0 0 2.81-.28c1.65-.32 3.57-2.07 3.53-2.92 0-.3-.48-.41-.87-.45a.5.5 0 1 1 .09-1c1.49.14 1.75.93 1.78 1.39.07 1.55-2.42 3.58-4.34 3.95a18.32 18.32 0 0 1-3 .3 9.8 9.8 0 0 0-3.48.59c-2.84 1.06-25.57 13.48-27.3 15.15a.36.36 0 0 1-.07.17.47.47 0 0 1-.42.24z" className="b"/>
										<path d="M97.05 31.21a15.91 15.91 0 0 0 4 2.45c2 .88 3.28.79 4.15.07a1.45 1.45 0 0 0 .44-1.68 2.43 2.43 0 0 0 1.87-1.05 2.12 2.12 0 0 0-.11-2.18c.77-.5 1.08-.38 1.4-1.23a2.5 2.5 0 0 0-.2-2 2.68 2.68 0 0 0 .74-1.86c-.14-2.47-8.16-6.29-11.53-7.86C93.78 14 71.83 3.53 68 .5l-5.15 10.81c0-1 25 14.28 27.25 16.15 2.08 1.73 2.18 3.05 4.05 5.2 1.72 2 6.4 3 5.08.08" className="a"/>
										<path d="M103.5 34.8a7 7 0 0 1-2.7-.68 16.72 16.72 0 0 1-4-2.51.5.5 0 1 1 .61-.8 15.21 15.21 0 0 0 3.84 2.39c2.23 1 3.14.55 3.63.15a.93.93 0 0 0 .3-1.09.51.51 0 0 1 0-.48.5.5 0 0 1 .42-.23 1.89 1.89 0 0 0 1.49-.83 1.57 1.57 0 0 0-.1-1.63.51.51 0 0 1-.07-.38.45.45 0 0 1 .22-.32c.23-.15.43-.25.59-.34a.89.89 0 0 0 .61-.65 2 2 0 0 0-.16-1.59.51.51 0 0 1 .11-.65 2.16 2.16 0 0 0 .56-1.44c0-.85-1.57-2.94-11.24-7.44-.25-.11-25.66-12-29.93-15.39a.49.49 0 0 1-.08-.7.49.49 0 0 1 .7-.08C71.94 3 93 13 98 15.38c8 3.7 11.7 6.33 11.81 8.28a3.35 3.35 0 0 1-.64 2 2.89 2.89 0 0 1 .07 2.11 1.84 1.84 0 0 1-1.1 1.2l-.11.05a2.43 2.43 0 0 1-.13 2.25 2.8 2.8 0 0 1-1.74 1.22 1.89 1.89 0 0 1-.72 1.65 3 3 0 0 1-1.94.66z" className="b"/>
										<path d="M98.2 35.05A6.73 6.73 0 0 1 93.77 33 17.66 17.66 0 0 1 92 30.57a9.83 9.83 0 0 0-2.25-2.72C87.45 25.91 65.32 12.44 63 11.78a.38.38 0 0 1-.18 0 .5.5 0 0 1-.49-.52.61.61 0 0 1 .32-.48c1.53-.7 27.52 16.08 27.75 16.27a10.66 10.66 0 0 1 2.46 3 17.85 17.85 0 0 0 1.64 2.29c1.11 1.27 3.58 2.06 4.3 1.59.25-.16.11-.62 0-1a.5.5 0 0 1 .25-.66.5.5 0 0 1 .66.24c.62 1.37.07 2-.32 2.24a2.19 2.19 0 0 1-1.19.3z" className="b"/>
										<path d="M12.74 63.15a.5.5 0 0 1-.47-.33l-1.57-4.35h-.54L10 62.61a.5.5 0 0 1-.5.48H4.74a.51.51 0 0 1-.5-.51l.11-5c0-1.66.07-3.33.11-5v-2.5c0-.84 0-1.68.09-2.53a.5.5 0 0 1 .32-.44 12.81 12.81 0 0 1 1.57-.49 14.84 14.84 0 0 1 3.13-.45c.57-.02 1.07 0 1.62 0a9.22 9.22 0 0 1 2.57.36A6.85 6.85 0 0 1 16 47.66a5.72 5.72 0 0 1 1.59 1.89 5.63 5.63 0 0 1 .6 2.65 7.79 7.79 0 0 1-.16 1.66 5.12 5.12 0 0 1-.52 1.42 4.89 4.89 0 0 1-.91 1.19 7.74 7.74 0 0 1-.91.75l2.39 4.27a.48.48 0 0 1 0 .45.49.49 0 0 1-.36.28l-4.95 1zm-2.41-9.07a3 3 0 0 0 .59-.1 2.39 2.39 0 0 0 .73-.3 1.53 1.53 0 0 0 .48-.5 1.21 1.21 0 0 0 .18-.68 2.08 2.08 0 0 0-.11-.69 1.42 1.42 0 0 0-.27-.5 1.29 1.29 0 0 0-.44-.31 1.67 1.67 0 0 0-.67-.12 2 2 0 0 0-.35 0z" className="c"/>
										<path d="M11.24 46.62a8.54 8.54 0 0 1 2.43.34 6.66 6.66 0 0 1 2.08 1 5.25 5.25 0 0 1 1.44 1.73 5.05 5.05 0 0 1 .55 2.42 7.34 7.34 0 0 1-.15 1.55 4.51 4.51 0 0 1-.47 1.34 4.67 4.67 0 0 1-.82 1.08 7.34 7.34 0 0 1-1.23.94l2.63 4.67-5 1L11 58H9.68l-.2 4.59H4.74c0-1.68.08-3.34.11-5l.11-5v-2.51c0-.83 0-1.67.09-2.52a15.53 15.53 0 0 1 1.52-.47c.5-.12 1-.22 1.5-.29a15.25 15.25 0 0 1 1.53-.14h1.59m-1.43 8h.26a4.09 4.09 0 0 0 1-.12 2.9 2.9 0 0 0 .88-.38 2.06 2.06 0 0 0 .64-.64 1.82 1.82 0 0 0 .25-1 2.86 2.86 0 0 0-.13-.85 1.92 1.92 0 0 0-.36-.67 1.84 1.84 0 0 0-.61-.44 2.33 2.33 0 0 0-.87-.16 3.11 3.11 0 0 0-.43 0l-.4.08-.18 4.1m1.43-9H9.6c-.53 0-1.09.08-1.62.15a14.75 14.75 0 0 0-1.61.31 15.09 15.09 0 0 0-1.62.51 1 1 0 0 0-.65.88c0 .85-.08 1.71-.09 2.55v2.51c0 1.67-.08 3.33-.11 5l-.11 5a1 1 0 0 0 .29.72 1 1 0 0 0 .71.3h4.69a1 1 0 0 0 1-1l.13-2.94L11.8 63a1 1 0 0 0 .94.66.62.62 0 0 0 .19 0l5-1a1 1 0 0 0 .71-.57 1 1 0 0 0 0-.91l-2.18-3.88a8 8 0 0 0 .61-.53 5.92 5.92 0 0 0 1-1.31 5.81 5.81 0 0 0 .57-1.56 8.69 8.69 0 0 0 .17-1.76 6.09 6.09 0 0 0-.66-2.88 6.26 6.26 0 0 0-1.72-2.06A7.36 7.36 0 0 0 14 46a9.45 9.45 0 0 0-2.71-.39zm-.38 7.86l.14-2.05a1.07 1.07 0 0 1 .34.07.65.65 0 0 1 .26.19.73.73 0 0 1 .18.31 1.8 1.8 0 0 1 .08.54.84.84 0 0 1-.1.42 1 1 0 0 1-.33.33 1.87 1.87 0 0 1-.52.23z" className="b"/>
										<path d="M18.4 63.26a.51.51 0 0 1-.36-.15.54.54 0 0 1-.14-.36l.42-15.49a.48.48 0 0 1 .16-.35.51.51 0 0 1 .34-.13l5.26.24a.5.5 0 0 1 .48.52l-.31 7.39h1.43v-7.79a.47.47 0 0 1 .15-.35.5.5 0 0 1 .35-.14l5 .13a.5.5 0 0 1 .49.49l.35 15a.49.49 0 0 1-.47.51l-5.53.27a.52.52 0 0 1-.35-.14.48.48 0 0 1-.15-.36V58.4H24l-.14 4.34a.49.49 0 0 1-.5.48z" className="c"/>
										<path d="M26.2 47.15l5 .13.35 15-5.5.27-.05-4.61h-2.51l-.16 4.82H18.4l.42-15.48 5.24.24-.33 7.91h2.45v-8.28m0-1a1 1 0 0 0-.7.28 1 1 0 0 0-.3.71v7.29h-.41l.29-6.87a1 1 0 0 0-.95-1l-5.25-.24a1 1 0 0 0-.68.27 1 1 0 0 0-.32.7l-.46 15.45a1 1 0 0 0 .28.72 1 1 0 0 0 .72.3h4.93a1 1 0 0 0 1-1l.13-3.85H25v3.66a1 1 0 0 0 .31.71 1 1 0 0 0 .69.28l5.51-.27a1 1 0 0 0 .95-1l-.35-15a1 1 0 0 0-1-1l-5-.13z" className="b"/>
										<path d="M39.25 62.18a7.44 7.44 0 0 1-3.82-1A7 7 0 0 1 33.91 60a7.59 7.59 0 0 1-1.16-1.54 7.33 7.33 0 0 1-.74-1.8 7.46 7.46 0 0 1-.27-2 8.43 8.43 0 0 1 .25-2 7.71 7.71 0 0 1 .71-1.84 8.2 8.2 0 0 1 1.12-1.6 7.77 7.77 0 0 1 1.48-1.32 7.1 7.1 0 0 1 1.79-.82 6.78 6.78 0 0 1 2-.3 8.75 8.75 0 0 1 3.09.53 6.6 6.6 0 0 1 4 3.92 8.34 8.34 0 0 1 .55 3.1 8.22 8.22 0 0 1-.25 2.05 7.86 7.86 0 0 1-.71 1.86 7.36 7.36 0 0 1-1.13 1.6 6.88 6.88 0 0 1-1.5 1.24 7.26 7.26 0 0 1-3.89 1.1zm0-9.56a1.66 1.66 0 0 0-.72.15 1.46 1.46 0 0 0-.53.39 1.6 1.6 0 0 0-.35.59 2.32 2.32 0 0 0-.13.75 2.71 2.71 0 0 0 .12.79A2.3 2.3 0 0 0 38 56a1.69 1.69 0 0 0 .5.46 1.27 1.27 0 0 0 .66.16 1.61 1.61 0 0 0 .71-.15 1.67 1.67 0 0 0 .53-.42 2.09 2.09 0 0 0 .35-.64 2.28 2.28 0 0 0 .13-.78 2.87 2.87 0 0 0-.11-.77 2 2 0 0 0-.33-.64 1.54 1.54 0 0 0-.49-.42 1.29 1.29 0 0 0-.7-.18z" className="c"/>
										<path d="M39.12 47.28a8.23 8.23 0 0 1 2.91.49 6.35 6.35 0 0 1 2.25 1.42 6.27 6.27 0 0 1 1.44 2.22 8 8 0 0 1 .51 2.92 8.16 8.16 0 0 1-.23 1.93 7.3 7.3 0 0 1-.67 1.74 7.21 7.21 0 0 1-1 1.5 6.75 6.75 0 0 1-1.4 1.16 7 7 0 0 1-1.69.75 7.18 7.18 0 0 1-3.83 0 7.38 7.38 0 0 1-1.68-.71 6.84 6.84 0 0 1-1.42-1.1 6.76 6.76 0 0 1-1.07-1.43 7.62 7.62 0 0 1-.7-1.69 7.34 7.34 0 0 1 0-3.76 7.28 7.28 0 0 1 .6-1.72 7.78 7.78 0 0 1 1-1.5 7.12 7.12 0 0 1 1.39-1.18 6.91 6.91 0 0 1 1.65-.77 6.54 6.54 0 0 1 1.89-.27m0 9.82a2.18 2.18 0 0 0 .93-.2 2.22 2.22 0 0 0 .7-.55 2.69 2.69 0 0 0 .44-.8 2.94 2.94 0 0 0 .15-.94 2.89 2.89 0 0 0-.14-.92 2.45 2.45 0 0 0-.4-.79 2 2 0 0 0-.65-.56 1.87 1.87 0 0 0-.9-.22 2.27 2.27 0 0 0-.93.19 2.38 2.38 0 0 0-.7.51 2.3 2.3 0 0 0-.44.76 2.58 2.58 0 0 0-.16.92 3.33 3.33 0 0 0 .14.93 2.54 2.54 0 0 0 .39.83 2.13 2.13 0 0 0 .66.61 1.78 1.78 0 0 0 .91.23m0-10.82a7.46 7.46 0 0 0-2.18.32 7.84 7.84 0 0 0-3.49 2.23 9.11 9.11 0 0 0-1.19 1.7 8.28 8.28 0 0 0-.75 2 8.44 8.44 0 0 0-.27 2.12 8.08 8.08 0 0 0 .29 2.15 7.92 7.92 0 0 0 .79 1.92 7.57 7.57 0 0 0 1.23 1.64 7.4 7.4 0 0 0 1.63 1.26 7.9 7.9 0 0 0 1.91.81A7.76 7.76 0 0 0 45 60.17a8.4 8.4 0 0 0 1.21-1.69 8.89 8.89 0 0 0 .75-2 9.21 9.21 0 0 0 .26-2.17 8.83 8.83 0 0 0-.58-3.28 7.16 7.16 0 0 0-4.27-4.21 9.26 9.26 0 0 0-3.26-.56zm0 9.82a.76.76 0 0 1-.4-.09 1.07 1.07 0 0 1-.35-.32 1.79 1.79 0 0 1-.25-.54 2.1 2.1 0 0 1-.1-.65 1.81 1.81 0 0 1 .1-.58 1.22 1.22 0 0 1 .25-.43 1.14 1.14 0 0 1 .37-.27 1.29 1.29 0 0 1 .51-.1.83.83 0 0 1 .41.09 1.27 1.27 0 0 1 .35.3 1.54 1.54 0 0 1 .24.48 2.16 2.16 0 0 1 .09.62 1.77 1.77 0 0 1-.1.61 1.37 1.37 0 0 1-.27.49 1.06 1.06 0 0 1-.37.29 1 1 0 0 1-.48.1z" className="b"/>
										<path d="M46.43 62.93a.51.51 0 0 1-.37-.16.48.48 0 0 1-.13-.38l.36-3.74a156.3 156.3 0 0 0 .54-7.45c.06-1.24.09-2.49.09-3.72a.5.5 0 0 1 .48-.5l5.26-.22a.5.5 0 0 1 .35.14.47.47 0 0 1 .15.35l.4-.31a4 4 0 0 1 .84-.46 2.81 2.81 0 0 1 1-.19 5.85 5.85 0 0 1 1.07.09 3.13 3.13 0 0 1 .93.34 2.7 2.7 0 0 1 .76.68l.21.31.22-.21a4.85 4.85 0 0 1 .84-.63 3.72 3.72 0 0 1 1-.42 3.87 3.87 0 0 1 1.16-.16 4.16 4.16 0 0 1 2.06.48A4.2 4.2 0 0 1 65 48a5.91 5.91 0 0 1 .86 1.7 13.58 13.58 0 0 1 .44 1.91 18.45 18.45 0 0 1 .19 1.94v1.74c0 1.06 0 2.13-.1 3.17s-.14 2.09-.23 3.15a.49.49 0 0 1-.47.45l-5.69.27a.52.52 0 0 1-.37-.16.5.5 0 0 1-.12-.41c.17-1.27.32-2.55.45-3.82a34.55 34.55 0 0 0 .2-3.8v-.41-.67c0-.25 0-.5-.08-.77a6.55 6.55 0 0 0-.12-.71 2.09 2.09 0 0 0-.13-.38.2.2 0 0 0-.08.08 1.32 1.32 0 0 0-.24.52 3.47 3.47 0 0 0-.11.73V55.1c0 1.14 0 2.3-.08 3.42s-.13 2.27-.21 3.42a.5.5 0 0 1-.48.46l-5.24.2a.52.52 0 0 1-.37-.16.5.5 0 0 1-.12-.41c.17-1.27.31-2.54.44-3.81a36.8 36.8 0 0 0 .19-3.78v-.43-.7a7.55 7.55 0 0 0-.08-.79 6.74 6.74 0 0 0-.12-.74c0-.14-.07-.25-.11-.35a.88.88 0 0 0-.2.35 3.76 3.76 0 0 0-.16.66c0 .26-.06.52-.08.77s0 .49 0 .71v.52l-.24 8a.5.5 0 0 1-.5.48z" className="c"/>
										<path d="M61.56 46.79a3.68 3.68 0 0 1 1.82.42 3.85 3.85 0 0 1 1.25 1.09 5.62 5.62 0 0 1 .78 1.57 10.72 10.72 0 0 1 .42 1.82 17.53 17.53 0 0 1 .17 1.89v1.72c0 1.05 0 2.09-.09 3.13s-.15 2.09-.24 3.14l-5.66.27c.17-1.28.32-2.56.46-3.84a35.33 35.33 0 0 0 .2-3.85v-.42-.69c0-.25 0-.53-.07-.8a7 7 0 0 0-.13-.76 2.64 2.64 0 0 0-.21-.57c-.08-.14-.17-.22-.28-.22a.74.74 0 0 0-.61.29 2 2 0 0 0-.33.7 4 4 0 0 0-.12.83V55.08c0 1.13 0 2.27-.08 3.4s-.13 2.26-.21 3.4l-5.22.2c.17-1.28.32-2.55.45-3.83a37.63 37.63 0 0 0 .19-3.83v-.45-.71c0-.26 0-.54-.08-.83s-.08-.55-.14-.79a2.3 2.3 0 0 0-.2-.58q-.12-.24-.3-.24a.6.6 0 0 0-.46.22 1.45 1.45 0 0 0-.3.55 4 4 0 0 0-.18.76c0 .28-.07.54-.09.81s0 .51 0 .73v.5l-.24 8h-5.63l.36-3.73c.12-1.25.22-2.5.32-3.74s.16-2.49.22-3.74.09-2.5.09-3.74l5.24-.22v1.27c.16-.2.35-.41.55-.62a4.9 4.9 0 0 1 .66-.56 3.06 3.06 0 0 1 .73-.4 2.05 2.05 0 0 1 .81-.16 4.71 4.71 0 0 1 1 .09 2.2 2.2 0 0 1 .78.28 2.07 2.07 0 0 1 .61.54 3.3 3.3 0 0 1 .46.88c.24-.26.48-.5.71-.72a4.57 4.57 0 0 1 .76-.57 3.47 3.47 0 0 1 .86-.36 3.64 3.64 0 0 1 1-.14M61.58 45.75a4.87 4.87 0 0 0-1.3.17 4.7 4.7 0 0 0-1.1.48 5 5 0 0 0-.72.52 3.14 3.14 0 0 0-.8-.67 3.65 3.65 0 0 0-1.09-.4 6.69 6.69 0 0 0-1.16-.1 3.13 3.13 0 0 0-1.17.23 3.9 3.9 0 0 0-.9.48 1 1 0 0 0-.65-.24h-.06l-5.23.22a1 1 0 0 0-1 1c0 1.22 0 2.47-.09 3.69s-.13 2.49-.22 3.72-.2 2.5-.32 3.71l-.36 3.74a1 1 0 0 0 1 1.09H52a1 1 0 0 0 .88-.53 1 1 0 0 0 .57.18l5.22-.2a1 1 0 0 0 .69-.31 1 1 0 0 0 .68.27l5.66-.27a1 1 0 0 0 1-.91c.09-1.06.17-2.11.23-3.16s.1-2.13.1-3.2V53.5a19.63 19.63 0 0 0-.2-2 12.11 12.11 0 0 0-.46-2 6.3 6.3 0 0 0-.93-1.85 4.75 4.75 0 0 0-1.57-1.38 4.66 4.66 0 0 0-2.3-.54z" className="b"/>
										<path d="M72.74 63.53c-.47 0-.95 0-1.45-.05s-1-.1-1.51-.18a14.06 14.06 0 0 1-1.49-.3 9.14 9.14 0 0 1-1.41-.54.51.51 0 0 1-.28-.46V47.82a.5.5 0 0 1 .31-.47c.43-.17.88-.33 1.36-.47a14.76 14.76 0 0 1 1.46-.35 16.05 16.05 0 0 1 2.92-.29 13 13 0 0 1 1.64.1 9.63 9.63 0 0 1 1.63.35 7.18 7.18 0 0 1 1.47.64 5.09 5.09 0 0 1 1.25 1 4.63 4.63 0 0 1 .84 1.41 5.2 5.2 0 0 1 .3 1.83 4.28 4.28 0 0 1-.2 1.31A3.75 3.75 0 0 1 79 54a3.45 3.45 0 0 1-.93.85l.24.14a4.34 4.34 0 0 1 1.13 1 4.27 4.27 0 0 1 .72 1.31 4.67 4.67 0 0 1 .26 1.55A3.83 3.83 0 0 1 79 61.93a5.16 5.16 0 0 1-1.43.83 9.54 9.54 0 0 1-1.6.48 12.25 12.25 0 0 1-1.66.23q-.87.06-1.57.06zm0-5.21a2.1 2.1 0 0 0 .41 0 1.05 1.05 0 0 0 .35-.13.72.72 0 0 0 .24-.25.8.8 0 0 0 .08-.4.86.86 0 0 0-.09-.43.7.7 0 0 0-.23-.25 1 1 0 0 0-.32-.12 2.27 2.27 0 0 0-.42-.05h-.13v1.65zm-.08-4.81a1.92 1.92 0 0 0 .58-.16.9.9 0 0 0 .4-.3.71.71 0 0 0 .13-.48.6.6 0 0 0-.06-.29 1 1 0 0 0-.19-.22.84.84 0 0 0-.27-.13.77.77 0 0 0-.26 0 1 1 0 0 0-.28 0h-.06z" className="c"/>
										<path d="M72.63 46.71a14.08 14.08 0 0 1 1.58.09 9.8 9.8 0 0 1 1.54.33 7.37 7.37 0 0 1 1.37.6 4.51 4.51 0 0 1 1.12.91A4 4 0 0 1 79 49.9a4.68 4.68 0 0 1 .27 1.65 3.66 3.66 0 0 1-.18 1.16 3.08 3.08 0 0 1-.5 1 3.16 3.16 0 0 1-.81.73 3.56 3.56 0 0 1-1.07.45 4.38 4.38 0 0 1 1.31.55 3.68 3.68 0 0 1 1 .88 3.75 3.75 0 0 1 .64 1.16 4.27 4.27 0 0 1 .23 1.39 3.31 3.31 0 0 1-1.24 2.7 4.55 4.55 0 0 1-1.29.75 8.73 8.73 0 0 1-1.53.46 10.49 10.49 0 0 1-1.59.22c-.53 0-1 .06-1.49.06s-.93 0-1.42-.05-1-.09-1.45-.17a11.57 11.57 0 0 1-1.44-.33A7.32 7.32 0 0 1 67.1 62V47.81c.41-.16.85-.32 1.31-.45a12.79 12.79 0 0 1 1.4-.36 12 12 0 0 1 1.43-.21 13.34 13.34 0 0 1 1.39-.07M72.1 54a5.3 5.3 0 0 0 .63 0 2.57 2.57 0 0 0 .72-.2 1.5 1.5 0 0 0 .59-.44 1.21 1.21 0 0 0 .24-.8 1 1 0 0 0-.13-.54 1.31 1.31 0 0 0-.33-.37 1.23 1.23 0 0 0-.41-.21 1.62 1.62 0 0 0-.41-.06 1.59 1.59 0 0 0-.43.06l-.4.15L72.1 54m.6 4.78a3.13 3.13 0 0 0 .5 0 1.37 1.37 0 0 0 .52-.2 1.18 1.18 0 0 0 .4-.4 1.21 1.21 0 0 0 .16-.67 1.25 1.25 0 0 0-.16-.68 1.13 1.13 0 0 0-.39-.42 1.46 1.46 0 0 0-.5-.2 3.36 3.36 0 0 0-.51-.05 3.18 3.18 0 0 0-.62.07v2.51l.32.06a1.73 1.73 0 0 0 .32 0m-.07-13.11c-.48 0-1 0-1.49.07s-1 .13-1.52.22a15.12 15.12 0 0 0-1.51.37 13.71 13.71 0 0 0-1.41.49 1 1 0 0 0-.62.93L66.1 62a1 1 0 0 0 .56.9 9 9 0 0 0 1.5.57 12.35 12.35 0 0 0 1.54.35 14.79 14.79 0 0 0 3.04.24c.48 0 1 0 1.56-.06a13.07 13.07 0 0 0 1.7-.27 9.7 9.7 0 0 0 1.69-.51 5.61 5.61 0 0 0 1.56-.91 4.34 4.34 0 0 0 1.6-3.47 5.33 5.33 0 0 0-.28-1.71 4.9 4.9 0 0 0-.81-1.47 4.54 4.54 0 0 0-.89-.86 4.51 4.51 0 0 0 .47-.51A4.27 4.27 0 0 0 80 53a4.71 4.71 0 0 0 .23-1.47 5.67 5.67 0 0 0-.33-2A5.17 5.17 0 0 0 79 48a5.47 5.47 0 0 0-1.37-1.11 8.21 8.21 0 0 0-1.57-.69 10.72 10.72 0 0 0-1.72-.37 14 14 0 0 0-1.7-.1zm.5 7.13v-.43h.08v.07a.55.55 0 0 1 0 .18.45.45 0 0 1-.13.1zm-.06 4.93v-.55h.11l.08.09a1 1 0 0 1 0 .17.92.92 0 0 1 0 .16.16.16 0 0 1-.08.06.33.33 0 0 1-.12.05z" className="b"/>
										<path d="M87.55 63.53a.52.52 0 0 1-.36-.16.48.48 0 0 1-.13-.4l.06-.56-.34.14a4 4 0 0 1-.78.18 3.35 3.35 0 0 1-.63.05h-.12a4.22 4.22 0 0 1-1.59-.33 5.27 5.27 0 0 1-1.34-.83 6.42 6.42 0 0 1-1.08-1.18 8.39 8.39 0 0 1-.79-1.4 7.51 7.51 0 0 1-.49-1.5 6.54 6.54 0 0 1-.18-1.5v-2.07c0-.72.08-1.44.14-2.16s.16-1.43.27-2.14a18.13 18.13 0 0 1 .41-2.05.49.49 0 0 1 .48-.38l2.72.12H86.48A.51.51 0 0 1 87 48l-.5 1.92a32.86 32.86 0 0 0-.75 3.83 15.23 15.23 0 0 0-.12 1.92v.64a4 4 0 0 0 .11.76 1.8 1.8 0 0 0 .22.58c0 .07.07.08.12.08a.48.48 0 0 0 .38-.2 2.82 2.82 0 0 0 .49-.82 7.25 7.25 0 0 0 .41-1.31q.18-.8.3-1.62c.08-.57.15-1.14.2-1.72S88 51 88 50.44v-1.38-1-.8a.46.46 0 0 1 .13-.39.45.45 0 0 1 .36-.16h5.02a.49.49 0 0 1 .49.56c-.33 2.59-.61 5.17-.84 7.7s-.46 5.13-.67 7.72a.51.51 0 0 1-.46.46z" className="c"/>
										<path d="M93.59 47.26q-.5 3.87-.85 7.71c-.23 2.56-.46 5.13-.67 7.73l-4.52.3.2-1.7a2.38 2.38 0 0 1-.51.44 2.53 2.53 0 0 1-.62.3 3.17 3.17 0 0 1-.69.17 3.6 3.6 0 0 1-.56 0h-.11a3.9 3.9 0 0 1-1.41-.21 4.89 4.89 0 0 1-1.21-.75 5.74 5.74 0 0 1-1-1.09 8.12 8.12 0 0 1-.74-1.31 7.3 7.3 0 0 1-.47-1.41 6.74 6.74 0 0 1-.15-1.44v-2a35.75 35.75 0 0 1 .4-4.24c.11-.69.24-1.37.4-2l2.7.12h2.7l-.5 1.93c-.16.65-.32 1.28-.45 1.93s-.24 1.31-.32 2a16.19 16.19 0 0 0-.12 2v.66a6 6 0 0 0 .12.85 2.52 2.52 0 0 0 .28.73.61.61 0 0 0 .55.32 1 1 0 0 0 .75-.36 3.35 3.35 0 0 0 .58-1 8.57 8.57 0 0 0 .44-1.4 24.58 24.58 0 0 0 .51-3.41c.05-.59.09-1.14.11-1.65l.06-1.4v-1-.42-.43h5.07M93.56 46.23H88.59a1 1 0 0 0-.73.31 1 1 0 0 0-.26.79v3.06c0 .51-.07 1-.12 1.62a26.06 26.06 0 0 1-.49 3.26 7.33 7.33 0 0 1-.38 1.24 2.77 2.77 0 0 1-.26.49 3.84 3.84 0 0 1-.09-.68v-.61a16.44 16.44 0 0 1 .11-1.86 24.54 24.54 0 0 1 .75-3.76c.17-.63.31-1.24.48-1.85a1.14 1.14 0 0 0 0-.33 1 1 0 0 0-1-1h-2.66c-.9 0-1.8-.07-2.69-.12a1 1 0 0 0-1 .75c-.17.67-.31 1.38-.42 2.1a38.16 38.16 0 0 0-.41 4.36c-.03.72 0 1.43 0 2.09a7.52 7.52 0 0 0 .19 1.61 8.44 8.44 0 0 0 .39 1.54 9.49 9.49 0 0 0 .84 1.49A7.46 7.46 0 0 0 82 62a6 6 0 0 0 1.47.91 4.89 4.89 0 0 0 1.79.37h.12a5.49 5.49 0 0 0 .7-.05 3.86 3.86 0 0 0 .49-.1 1 1 0 0 0 .27.59 1 1 0 0 0 .72.31h.08l4.51-.33a1 1 0 0 0 .93-.91c.21-2.61.44-5.21.67-7.72s.51-5.1.84-7.68a1 1 0 0 0-1-1.12zm0 2z" className="b"/>
										<path d="M98.73 63.42a6.22 6.22 0 0 1-1.29-.16 13.08 13.08 0 0 1-1.35-.37c-.45-.15-.89-.3-1.31-.47l-1.11-.48a.5.5 0 0 1-.28-.51l.48-4.32a.5.5 0 0 1 .28-.39.54.54 0 0 1 .22 0 .48.48 0 0 1 .26.07 7.14 7.14 0 0 0 1.94.8 8.74 8.74 0 0 0 2.12.27h.48a2.14 2.14 0 0 0 .44-.08.58.58 0 0 0 .28-.15v-.09a.41.41 0 0 0-.17-.15 2.74 2.74 0 0 0-.37-.11l-.46-.06h-.79a5.26 5.26 0 0 1-1.9-.33 4.22 4.22 0 0 1-1.5-1 4.29 4.29 0 0 1-1-1.5 5.07 5.07 0 0 1-.34-1.91A5.59 5.59 0 0 1 94 49.9a5.82 5.82 0 0 1 1.49-1.9 7 7 0 0 1 2.17-1.2 7.84 7.84 0 0 1 2.5-.41h1.15a11.72 11.72 0 0 1 1.19.15 8.87 8.87 0 0 1 1.16.26 6.27 6.27 0 0 1 1.1.42.48.48 0 0 1 .28.49l-.41 4.47a.5.5 0 0 1-.5.46.41.41 0 0 1-.16 0 13.9 13.9 0 0 0-1.51-.41 7.9 7.9 0 0 0-1.5-.16h-.79l-.45.07a2.42 2.42 0 0 0-.35.11.36.36 0 0 0-.13.11c0 .06.09.1.22.13a1.89 1.89 0 0 0 .49 0H101.67a4.94 4.94 0 0 1 1.76.42 4 4 0 0 1 2.21 2.39 5.4 5.4 0 0 1 .29 1.78 6.63 6.63 0 0 1-.57 2.82 5.65 5.65 0 0 1-1.58 2 6.6 6.6 0 0 1-2.3 1.13 10.15 10.15 0 0 1-2.75.39z" className="c"/>
										<path d="M100.16 46.88h1.12a10.57 10.57 0 0 1 1.13.14 10 10 0 0 1 1.11.25 6.07 6.07 0 0 1 1 .39l-.42 4.47a14.39 14.39 0 0 0-1.57-.43 8.14 8.14 0 0 0-1.6-.17h-.85l-.5.08a2.37 2.37 0 0 0-.45.15 1 1 0 0 0-.32.25.5.5 0 0 0-.11.36.5.5 0 0 0 .18.38 1.11 1.11 0 0 0 .44.19 2.77 2.77 0 0 0 .6.06h1.69a4.36 4.36 0 0 1 1.58.37 3.73 3.73 0 0 1 1.2.85 3.47 3.47 0 0 1 .75 1.26 4.9 4.9 0 0 1 .26 1.61 6 6 0 0 1-.53 2.61 4.9 4.9 0 0 1-1.43 1.81 5.92 5.92 0 0 1-2.12 1 10 10 0 0 1-2.62.34 5.22 5.22 0 0 1-1.18-.15 13.41 13.41 0 0 1-1.31-.35 20.96 20.96 0 0 1-2.35-.93l.48-4.32a7.7 7.7 0 0 0 2.08.85 8.72 8.72 0 0 0 2.24.29h.5a2.61 2.61 0 0 0 .57-.1 1.36 1.36 0 0 0 .46-.25.61.61 0 0 0 .18-.47.52.52 0 0 0-.13-.36.87.87 0 0 0-.34-.24 2.16 2.16 0 0 0-.47-.15l-.52-.07h-.83a4.74 4.74 0 0 1-1.72-.3 3.87 3.87 0 0 1-1.33-.84 3.8 3.8 0 0 1-.87-1.32 4.76 4.76 0 0 1-.3-1.73 5 5 0 0 1 .52-2.32 5.46 5.46 0 0 1 1.4-1.76 6.13 6.13 0 0 1 2-1.1 7.14 7.14 0 0 1 2.34-.39m0-1a8.24 8.24 0 0 0-2.66.44 7.44 7.44 0 0 0-2.33 1.28 6.51 6.51 0 0 0-1.65 2.07 6.08 6.08 0 0 0-.63 2.78 5.68 5.68 0 0 0 .37 2.1 5 5 0 0 0 1 1.62 1 1 0 0 0-.38.1 1 1 0 0 0-.55.79l-.49 4.31a1 1 0 0 0 .57 1 22.99 22.99 0 0 0 2.47.98c.46.15.95.28 1.4.38a6.59 6.59 0 0 0 1.4.17 11.08 11.08 0 0 0 2.88-.37 7 7 0 0 0 2.48-1.23 6 6 0 0 0 1.72-2.16 7.05 7.05 0 0 0 .62-3 5.8 5.8 0 0 0-.32-1.94 4.57 4.57 0 0 0-1-1.61 3.85 3.85 0 0 0-.56-.51l.08-.05a1 1 0 0 0 .45-.75l.42-4.47a1 1 0 0 0-.56-1 8.7 8.7 0 0 0-1.18-.44 12.48 12.48 0 0 0-2.46-.43c-.42-.03-.8 0-1.18 0zM11.85 45l-2.8.36-.34-1.28H7.43l-.28 1.28-2.88-.28 2.24-7.52 3.14-.15zm-3.34-2.67l-.43-2-.41 2zM16.91 42.46L16.68 45l-4.75.37.18-8.05H15l-.42 5.17zM23.75 40.25a2.86 2.86 0 0 1-.16 1 2.29 2.29 0 0 1-.45.74 2.49 2.49 0 0 1-.67.54 4.63 4.63 0 0 1-.82.36 5.24 5.24 0 0 1-.91.2 7.12 7.12 0 0 1-.92.07v2.4H17.2v-3.7-1.26-1.37-1.39a10.44 10.44 0 0 1 1.45-.32 10.24 10.24 0 0 1 1.49-.11 5.07 5.07 0 0 1 .86.07 4.71 4.71 0 0 1 .84.22 4.19 4.19 0 0 1 .73.38 2.59 2.59 0 0 1 .59.55 2.52 2.52 0 0 1 .4.72 2.83 2.83 0 0 1 .19.9zm-2.5.19a.75.75 0 0 0-.23-.57.8.8 0 0 0-.58-.2 1 1 0 0 0-.24 0h-.24l-.07 1.65h.31a1.07 1.07 0 0 0 .39-.07 1 1 0 0 0 .33-.19.89.89 0 0 0 .24-.3.8.8 0 0 0 .09-.32zM30.76 45.23l-2.82.13v-2.38h-1.31l-.08 2.47H24l.21-7.93 2.69.13-.17 4.05H28v-4.24l2.57.06zM38.41 45l-2.8.36-.33-1.28H34l-.28 1.28-2.88-.28 2.25-7.52 3.13-.15zm-3.34-2.64l-.43-2-.41 2z" className="b"/>
									</svg>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
					<div className='copyright'>
						<p>&copy; Alpha Rhombus | 2019</p>
					</div>
				</footer>
			</React.Fragment>
		)
	}
}

export default Footer