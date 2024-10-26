import React from 'react'

function Intro() {
	return (
		<section id='home' className='flex justify-end w-full my-10'>
			<div className="flex w-3/4">
				<section className='flex flex-col pt-16 w-full'>
					<h4 className='text-5xl'>
						Hello,
						<span className='text-green-400'> I am</span>
					</h4>
					<h1 className='text-6xl'>Kunal Singh Varkha.</h1>
				</section>
			</div>
		</section>
	)
}

export default Intro
