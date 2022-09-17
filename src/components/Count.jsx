import React, { useState } from 'react';

const Count = () => {
	const [count, setCount] = useState(0);

	const 
	return (
		<>
			<span>{count}</span>
			<button>increment</button>
			<button>decrement</button>
		</>
	);
};

export default Count;
