import React, { ReactNode } from 'react';

interface LayerProps {
	children: ReactNode;
}

function Layer({ children }: LayerProps) {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: `100%`,
				width: `100%`
			}}
		>
			{children}
		</div>
	);
}

export default Layer;
