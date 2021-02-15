//
//	jballands/react-parallax-button
//	© 2018, 2021 Jon Ballands
//
//	Adapted from:
//	https://github.com/jballands/jonathanballands.me/blob/master/posts/AppleTVParallax/AppleTVIcon.jsx
//

import React, { ReactNode } from 'react';
import { animated } from 'react-spring';
import useScaling from './useScaling';

interface ParallaxButtonProps {
	children: ReactNode;
	dropShadowSpread?: number;
	dropShadowDepth?: number;
	shadow?: boolean;
	onClick?: () => unknown;
	parallaxMultiplier?: number;
	rotationAngleDegrees?: number;
	shadowOpacity?: number;
	[_: string]: any;
}

function ParallaxButton({
	children,
	dropShadowSpread = 45,
	dropShadowDepth = 45,
	shadow = true,
	parallaxMultiplier = 0.03,
	rotationAngleDegrees = 15,
	shadowOpacity = 0.4,
	style = {},
	...otherProps
}: ParallaxButtonProps) {
	const [scale, handleMouseMove, handleMouseLeave] = useScaling();

	return (
		<div
			{...otherProps}
			style={{
				position: 'relative',
				...style
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<animated.div style={scale}>{children}</animated.div>
		</div>
	);
}

export default ParallaxButton;
