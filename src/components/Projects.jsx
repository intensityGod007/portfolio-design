import React from 'react'
import blogging from '../assets/blogging.jpg'
import projects from '../assets/projects.jpg'

function Projects() {
	return (
		<section id='projects' className='flex justify-end w-full'>
			<div className="flex w-3/4">
				<section className='flex flex-col pt-16 w-full'>
					<h2 className='text-4xl pb-4'>My <span className='text-green-400'>Credentials</span></h2>
					<div className='flex justify-start gap-5'>
						<div>
							<div className='flex flex-col border rounded-2xl bg-transparent duration-300 p-2 relative group hover:border-[#28e98c] hover:'>
								<div className='h-auto relative block'>
									<img src={blogging} className='w-[600px] h-[255px] rounded-t-2xl object-cover' />
								</div>
								<div className='p-4 flex-auto'>
									<h5 className='mb-3 overflow-hidden text-ellipsis h-14 font-semibold text-2xl'>Blogs</h5>
									<div className='flex items-center justify-between'>
										<a href="https://drive.google.com/drive/folders/1XccGm2QE1bx37PnH7vXCkd8SYtjckXJm?usp=drive_link" target='_blank' className='text-white border rounded-full duration-300 font-semibold px-6 py-1 group-hover:text-[#28e98c] group-hover:border-[#28e98c]'>See My Work</a>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className='flex flex-col border rounded-2xl bg-transparent duration-300 p-2 relative group hover:border-[#28e98c]'>
								<div className='h-auto relative block'>
									<img src={projects} className='w-[600px] h-[255px] rounded-t-2xl object-cover'/>
								</div>
								<div className='p-4 flex-auto'>
									<h5 className='mb-3 overflow-hidden text-ellipsis h-14 font-semibold text-2xl'>Projects</h5>
									<div className='flex items-center justify-between'>
										<a href="https://drive.google.com/drive/folders/1n-fiich_KylpNE8B9eABbKd1_N-vNTr6?usp=drive_link" target='_blank' className='text-white border rounded-full duration-300 font-semibold px-6 py-1 group-hover:text-[#28e98c] group-hover:border-[#28e98c]'>See My Work</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Projects
