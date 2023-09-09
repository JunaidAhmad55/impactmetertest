export function Text({ title = "", restStyle='' , children=<></> }) {
	return (
		<div className={`text-gray-600 text-lg ${restStyle}`}>
					{title}	
                    {children}
		</div>
	);
}
