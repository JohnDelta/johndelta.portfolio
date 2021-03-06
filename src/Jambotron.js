import React from 'react';
import './Jambotron.css';

class Jambotron extends React.Component {
	constructor() {
		super();
		this.state = {
			currentImg : 0
		};
		this.imageSlider = this.imageSlider.bind(this);
	}

	componentDidMount() {
		this.imageSlider();
	}
	
	imageSlider() {
		var images = document.querySelectorAll(".showcase .background-img img");
		images[0].style.opacity = 1;
		
		setInterval(() => {
			this.setState({
				currentImg: this.state.currentImg + 1
			});
			if(this.state.currentImg >= images.length) {
				this.setState({
					currentImg: 0
				});
			}

			images.forEach((image) => {
				image.style.transitionDuration = "4s";
				image.style.zIndex = "0";
				image.style.opacity = "0";
			});
			images[this.state.currentImg].style.transitionDuration = "2s";
			images[this.state.currentImg].style.zIndex = "10";
			images[this.state.currentImg].style.opacity = "1";
		}, 6000);
	}

	render() {
		return (
			<div className="Jambotron">
				<div className="bg" />
				<div className="showcase">
					<div className="background-img">
						<img src={require('./images/responsive-template-filled1.png')} alt="projects i created!" />
						<img src={require('./images/responsive-template-filled2.png')} alt="projects i created!" />
						<img src={require('./images/responsive-template-filled3.png')} alt="projects i created!" />
						<img src={require('./images/responsive-template-filled4.png')} alt="projects i created!" />
					</div>
					<h1 className="title">Hi I'm John, a Software Engineer</h1>
					<h2 className="subtitle">Recent graduate with an Integrated Master's Degree in Informatics and Computer
						Engineering</h2>
				</div>
				<a className="show-work" href="#work">
					<p>See my Work</p>
					<i className="fa fa-angle-down" />
				</a>
			</div>
		);
	}
};

export default Jambotron;