import { useSpring } from 'react-spring';

function useScaling() {
	const [properties, set] = useSpring<{ scale: number }>(() => ({
		scale: 1,
	}));

	const handleScaleUp = () => {
		set({ scale: 1.1 });
	};

	const handleScaleDown = () => {
		set({ scale: 1 });
	};

	const getStyling = () =>
		`scale(${properties.scale.interpolate((scale) => scale)})`;

	return [getStyling, handleScaleUp, handleScaleDown] as const;
}

export default useScaling;
