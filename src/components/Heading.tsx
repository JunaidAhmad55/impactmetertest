export function Heading({ title = "", restStyle='' }) {
	return (
		<div className={`flex items-center text-2xl font-bold text-black-500 mt-8 ${restStyle}`}>
					{title}	
		</div>
	);
}
