import React from 'react'

function Card({
	heading,
	content,
	classname,
}) {
	return (
		<div className={`flex flex-col rounded-2xl border-2 p-4 border-gray-700 transition duration-150 ease-out hover:ease-in hover:scale-105 ${classname}`}>
			<span className='font-bold text-xl'>{heading}</span>
			<p>{content}</p>
		</div>
	)
}

export default Card
