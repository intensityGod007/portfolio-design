import React from 'react'

function Experience() {
	return (
		<section id='experience' className='flex justify-end w-full'>
			<div className="flex w-3/4">
				<section className='flex flex-col pt-16 w-full'>
					<h2 className='text-4xl pb-4'>My <span className='text-green-400'>Experience</span></h2>
					<div className='font-medium text-lg'>
						<div className='block' contentEditable={true} role='textbox' aria-multiline='true' spellCheck>
							<li className='font-light'>
								<span className='font-bold'>Business Developer, TranCurators (Nov’22 – Jan’23):</span>
								<br />
								- Developed key client relationships, contributing to a 20% increase in sales performance.
								<br/>
								-  Designed and implemented marketing strategies, boosting LinkedIn traffic and follower count by 500+.								
							</li>
							<li className='font-light'>
								<span className='font-bold'>Business Coordinator, Neha Enterprises (Oct’21 – Dec’21):</span>
								<br />
								- Expanded the business to new regions, increasing turnover by 20% and reducing operational costs by 10%.
								<br/>
								- Managed a team of 20+ employees, ensuring smooth operational workflows and cost-efficient practices.
								
							</li>
							<li className='font-light'>
								<span className='font-bold'>Associate Instructor, VirtusMind Education (July’22 – Sept'22):</span>
								<br />
								- Trained 50+ students in accounting software, focusing on practical applications of financial principles.
								<br/>
								- Provided career counseling and contributed to the emotional well-being of students.								
							</li>
							<li className='font-light'>
								<span className='font-bold'>Account Assistant, CA Firm (Jan’22 – Mar'22):</span>
								<br />
								- Streamlined document management through digitization, improving firm efficiency and reducing manual labor.								
							</li>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Experience
