/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ParallaxButton, Layer } from 'react-parallax-button';
import './App.css';

function App() {
	return (
		<div className='container'>
			<h1>react-parallax-button</h1>
			<ParallaxButton style={{ width: `350px`, height: `350px` }}>
				<Layer>
					<img className='layer' src='/this-old-dog-3.png' />
				</Layer>
				<Layer>
					<img className='layer' src='/this-old-dog-2.png' />
				</Layer>
				<Layer>
					<img className='layer' src='/this-old-dog-1.png' />
				</Layer>
			</ParallaxButton>
		</div>
	);
}

export default App;
