import React from 'react'

function MissionVission() {
	return (
		<>
			<section className='flex justify-end w-full'>
				<div className="flex w-3/4">
					<section className='flex flex-col gap-5 pt-16 w-full'>
						<hr className='h-px my-8 bg-gray-200 border-0 dark:bg-white/30'/>
						<div className='flex flex-col justify-center'>
							<h4 className='text-4xl font-semibold italic pb-4 text-center'>My Vision</h4>
							<p className='text-lg font-semibold text-center'>"To drive growth and efficiency by applying strategic insights and financial expertise, enabling businesses to unlock their full potential and navigate complex market challenges."</p>
						</div>
						<div className='flex flex-col justify-center mt-4'>
							<h4 className='text-4xl font-semibold italic pb-4 text-center'>My Mission</h4>
							<p className='text-lg font-semibold text-center'>"To become a trusted advisor in the consulting and finance industry, known for my innovative problem-solving skills and ability to deliver transformative business solutions."</p>
						</div>
						<hr className='h-px my-8 bg-gray-200 border-0 dark:bg-white/30'/>
					</section>
				</div>
			</section>
		</>
	)
}

export default MissionVission
