import { useSpring } from 'react-spring';

function useScaling() {
	const [props, set] = useSpring(() => ({
		transform: 'scale(1)'
	}));

	const handleScaleUp = () => {
		set({
			transform: 'scale(1.1)'
		});
	};

	const handleScaleDown = () => {
		set({
			transform: 'scale(1)'
		});
	};

	return [props, handleScaleUp, handleScaleDown] as const;
}

export default useScaling;
