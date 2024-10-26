import React from 'react'
import { Card } from '../components'

function Skills() {
	return (
		<section id='skills' className='flex justify-end w-full'>
			<div className="flex w-3/4">
				<section className='flex flex-col pt-16 w-full'>
					<h2 className='text-4xl pb-4'>Key <span className='text-green-400'>Skills</span></h2>
					<div className='grid grid-cols-3 grid-rows-3 gap-4'>
						<Card
							heading={"Strategic Business Consulting"}
							content={"Expertise in analyzing and crafting strategic plans for business growth, resource optimization, and market expansion."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Financial Analysis & Modeling"}
							content={"Competent in financial forecasting, budgeting, and creating data-driven financial models to support business decisions."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Client Relationship Management"}
							content={"Proven ability to build and nurture client relationships, leading to business development and sales growth."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Operational Efficiency"}
							content={"Demonstrated success in implementing cost-saving measures and improving business processes for better performance."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Technical Competence"}
							content={"Proficient in accounting software (Tally, Busy), MS Office Suite, and digital marketing tools, supporting both operations and marketing initiatives."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Leadership & Collaboration"}
							content={"Skilled in managing cross-functional teams, ensuring efficient project execution and delivering results under pressure."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
						<Card
							heading={"Blogging & Thought Leadership"}
							content={"Regularly write blogs on finance, business strategy, and industry trends, sharing insights and fostering professional conversations."}
							classname={'backdrop-blur-xl hover:backdrop-blur-3xl'}
						/>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Skills
