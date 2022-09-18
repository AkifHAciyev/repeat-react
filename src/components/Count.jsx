import React, { useState } from 'react';

const Count = () => {
	const [count, setCount] = useState(0);

	let handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<>
			<span>{count}</span>
			<button onClick={handleIncrement}>increment</button>
			<button onClick={handleDecrement}>decrement</button>
		</>
	);
};

export default Count;
