import React from "react"
import PropTypes from "prop-types"
import { Accordion, Icon, Input, Form, Button, Modal, Label } from 'semantic-ui-react'

class Header extends React.Component{

	componentDidMount() {
		const landing = document.querySelector('.landing')
		const landingLogin = document.querySelector('.login')
		const site = document.querySelector('.site')
		const header = document.querySelector('.main-header')
		const headerContainer = header.querySelector('.container')
		const searchBar = site.querySelector('.search-bar')

    if (landing && site && header) {
			site.appendChild(landing)
			headerContainer.appendChild(landingLogin)
		}
		
		if (searchBar) {
			headerContainer.appendChild(searchBar)
		}

		let last_known_scroll_position = 0;
		let scrollpop = 210; // when vertical scroll position is equal to "scrollpop" add the "scroll" class to header
		let ticking = false;

		if (!landing) {
			function doSomething(scroll_pos) {
				if (scroll_pos > scrollpop && header.className.includes('scroll') === false) {
					header.classList.add('scroll')
				} else if (scroll_pos <= scrollpop && header.className.includes('scroll') === true) {
					header.classList.remove('scroll')
				}
				
				return null;
			}
	
			window.addEventListener('scroll', function(e) {
				last_known_scroll_position = window.scrollY;
	
				if (!ticking) {
					window.requestAnimationFrame(function() {
						doSomething(last_known_scroll_position);
						ticking = false;
					});
	
					ticking = true;
				}
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				
				<header className="main-header">
					<div className="container">
						<div className="nav">
						{ this.props.current_user &&
							<a rel="nofollow" data-method="delete" href="/users/sign_out"><Icon circular inverted name='log out' /> Logout</a>
						}
						</div>
						<a href="/home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 832 203" className="logo">
							<circle cx="101.5" cy="101.5" r="101.5" className="emblem-bg" />
							<path d="M71 89.8l-36.7 13 36.7 13v16.8l-56.7-20.9V93.9L71 73v16.8zM111.3 46.2h19.4l-38 108.3H73.4l37.9-108.3zM188.7 93.9v17.7L132 132.5v-16.8l36.7-13-36.7-13V73l56.7 20.9z" className="emblem-icon"/>
							<g className="text">
								<path d="M238 89.1a51.8 51.8 0 0 1-16.4-7l8.2-18.4c4.3 2.7 8.9 4.9 13.7 6.3 5 1.6 10.2 2.4 15.4 2.4 9.6 0 14.4-2.4 14.4-7.2 0-2.5-1.4-4.4-4.1-5.6-4.3-1.7-8.7-3-13.2-3.9a136 136 0 0 1-16.6-4.6c-4.4-1.6-8.3-4.3-11.4-7.9-3.2-3.6-4.8-8.5-4.8-14.6-.1-5.2 1.5-10.3 4.4-14.6 2.9-4.3 7.3-7.8 13.1-10.3 5.8-2.5 13-3.8 21.5-3.8 5.8 0 11.5.7 17.1 2a54 54 0 0 1 14.9 5.7l-7.7 18.5c-8.4-4.5-16.6-6.8-24.5-6.8-5 0-8.6.7-10.8 2.2a6.53 6.53 0 0 0-3.4 5.7c0 2.4 1.4 4.1 4 5.3 4.2 1.6 8.6 2.8 13 3.7 5.7 1.1 11.2 2.7 16.7 4.6 4.4 1.6 8.3 4.3 11.5 7.8 3.2 3.6 4.9 8.4 4.9 14.5 0 5.1-1.5 10.2-4.4 14.4-3 4.3-7.4 7.7-13.2 10.3-5.8 2.6-13 3.9-21.4 3.8-7.1.2-14.1-.7-20.9-2.5zM342.8 66.1V90H324V65.8l-25.4-42.4h19.9l15.8 26.4L350 23.5h18.2l-25.4 42.6zM436 23.5V90h-15.5l-29.4-35.5V90h-18.4V23.5h15.5l29.4 35.4V23.5H436zM463.5 38.4H443V23.5h59.6v14.9h-20.3V90h-18.8V38.4zM550.8 77h-28.1l-5.2 13h-19.2l29.4-66.5h18.5L575.6 90H556l-5.2-13zm-5.5-13.9l-8.5-21.3-8.5 21.3h17z" />
								<path d="M619.3 90l-13.8-20.7L592 90h-21.5l24.2-33.6-23.2-32.9h21.2L606 42.7l13.1-19.2h20.3l-23.1 32.1L641 90h-21.7z" />
								<path d="M238 194.1c-5.8-1.4-11.4-3.8-16.4-7.1l8.2-18.4c4.3 2.7 8.9 4.9 13.7 6.3 5 1.6 10.2 2.4 15.4 2.4 9.6 0 14.4-2.4 14.4-7.2 0-2.5-1.4-4.4-4.1-5.6-4.3-1.7-8.7-3-13.2-3.8a136 136 0 0 1-16.6-4.6c-4.4-1.6-8.3-4.3-11.4-7.9-3.2-3.6-4.8-8.5-4.8-14.6-.1-5.2 1.5-10.3 4.4-14.6 2.9-4.3 7.3-7.7 13.2-10.3 5.8-2.5 13-3.8 21.4-3.8 5.8 0 11.5.7 17.1 2a54 54 0 0 1 14.9 5.7l-7.7 18.5c-8.4-4.5-16.6-6.8-24.5-6.8-5 0-8.6.7-10.8 2.2a6.53 6.53 0 0 0-3.4 5.7c0 2.4 1.4 4.1 4 5.3 4.2 1.6 8.6 2.8 13 3.7 5.7 1.1 11.2 2.7 16.7 4.6 4.4 1.6 8.3 4.3 11.5 7.8 3.2 3.6 4.9 8.4 4.9 14.6 0 5.1-1.5 10.2-4.4 14.4-3 4.3-7.4 7.7-13.2 10.3s-13 3.9-21.4 3.9c-7.1 0-14.1-.9-20.9-2.7z" />
								<path d="M322.2 191.8c-17-8.9-23.5-29.9-14.6-46.9 3.3-6.2 8.4-11.3 14.6-14.6a43.2 43.2 0 0 1 38.7 0c17 8.9 23.5 29.9 14.6 46.9-3.3 6.3-8.4 11.4-14.6 14.6-12.2 6-26.5 6-38.7 0zm28.7-13.8c2.8-1.6 5.1-4 6.6-6.8 3.2-6.4 3.2-13.9 0-20.3-1.5-2.8-3.8-5.2-6.6-6.8-5.8-3.2-12.8-3.2-18.6 0-2.8 1.6-5.1 4-6.6 6.8-3.2 6.4-3.2 13.9 0 20.3 1.5 2.8 3.8 5.2 6.6 6.8 5.7 3.2 12.8 3.2 18.6 0zM389.4 127.1h19.2v52.7H441V195h-51.6v-67.9zM455.7 188.1c-5.6-5.5-8.4-13.3-8.4-23.4v-37.6h19.2v37.1c0 10.9 4.3 16.3 12.9 16.3 8.6 0 12.9-5.4 12.8-16.3v-37.1h18.9v37.6c0 10.1-2.8 17.9-8.4 23.4s-13.4 8.2-23.5 8.2-17.9-2.7-23.5-8.2zM537.5 142.3h-20.8v-15.2h60.8v15.2h-20.8V195h-19.2v-52.7zM584.6 127.1h19.2V195h-19.2v-67.9zM632.4 191.8c-17-8.9-23.5-29.9-14.6-46.9 3.3-6.2 8.4-11.3 14.6-14.6a43.2 43.2 0 0 1 38.7 0 34.73 34.73 0 0 1 0 61.5c-12.2 6-26.5 6-38.7 0zm28.7-13.8c2.8-1.6 5.1-4 6.6-6.8 3.2-6.4 3.2-13.9 0-20.3-1.5-2.8-3.8-5.2-6.6-6.8-5.8-3.2-12.8-3.2-18.6 0-2.8 1.6-5.1 4-6.6 6.8-3.2 6.4-3.2 13.9 0 20.3 1.5 2.8 3.8 5.2 6.6 6.8 5.7 3.2 12.8 3.2 18.6 0zM764.2 127.1V195h-15.8l-30-36.2V195h-18.8v-67.9h15.8l30 36.2v-36.2h18.8zM785.6 194.3c-4.5-1.1-8.8-2.9-12.6-5.4l6.3-14.2c3.3 2.1 6.8 3.7 10.6 4.9 3.8 1.2 7.8 1.8 11.8 1.8 7.4 0 11.1-1.8 11.1-5.5 0-1.9-1.1-3.4-3.2-4.3-3.3-1.3-6.7-2.3-10.1-3-4.3-.9-8.6-2.1-12.8-3.5-3.4-1.2-6.4-3.3-8.8-6.1-2.5-2.8-3.7-6.5-3.7-11.3 0-4 1.1-7.9 3.4-11.2 2.6-3.6 6.1-6.3 10.1-7.9 4.5-1.9 10-2.9 16.5-2.9 4.4 0 8.9.5 13.2 1.5 4 .9 7.9 2.4 11.5 4.4l-5.9 14.3c-6.5-3.5-12.7-5.2-18.8-5.2-3.8 0-6.6.6-8.3 1.7-1.6.9-2.6 2.6-2.6 4.4 0 1.8 1 3.2 3.1 4.1 3.2 1.2 6.6 2.2 10 2.8 4.4.9 8.7 2.1 12.8 3.5 3.4 1.3 6.4 3.3 8.8 6 2.5 2.8 3.7 6.5 3.7 11.2 0 3.9-1.1 7.8-3.4 11.1-2.6 3.5-6.1 6.3-10.2 7.9-5.2 2.1-10.8 3.1-16.5 3-5.3-.1-10.7-.7-16-2.1z" />
							</g>
						</svg></a>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 80" className="wave">
						<path d="M0 80H1920V0s0 4-157 36C1360 121 87-17 0 57Z" />
					</svg>
				</header>
			</React.Fragment>
		)
	}
}

export default Header