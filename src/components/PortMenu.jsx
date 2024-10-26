import React from 'react'

function PortMenu() {
	return (
		<div className='flex flex-col fixed z-[5] right-0 top-1/3 gap-1'>
			<a href="#home" className='rounded-full duration-300 group'>
				<div className='flex items-center justify-end'>
					<p className='mb-0 text-white overflow-hidden opacity-0 mt-0 pr-2 duration-300 whitespace-nowrap transform group-hover:text-[#28e98c] group-hover:opacity-100 group-hover:-translate-x-1'>Home</p>
					<div className='flex w-10 h-10 rounded-full bg-[#2c2c2c80] justify-center items-center duration-300 ease-out group-hover:text-[#28e98c] group-hover:bg-transparent'>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='mb-[2px]'>
							<path d="M4.58626 20.1666H8.25293H13.7529H17.4196C18.4307 20.1666 19.2529 19.3443 19.2529 18.3332V10.0832C19.2529 9.84032 19.1567 9.60657 18.9843 9.43515L11.651 2.10182C11.2926 1.7434 10.7133 1.7434 10.3548 2.10182L3.02151 9.43515C2.84918 9.60657 2.75293 9.84032 2.75293 10.0832V18.3332C2.75293 19.3443 3.57518 20.1666 4.58626 20.1666ZM9.1696 18.3332V13.7499H12.8363V18.3332H9.1696ZM4.58626 10.4627L11.0029 4.04607L17.4196 10.4627L17.4205 18.3332H14.6696V13.7499C14.6696 12.7388 13.8473 11.9166 12.8363 11.9166H9.1696C8.15851 11.9166 7.33626 12.7388 7.33626 13.7499V18.3332H4.58626V10.4627Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
						</svg>
					</div>
				</div>
			</a>
			<a href="#about" className='rounded-full duration-300 group'>
				<div className='flex items-center justify-end'>
					<p className='mb-0 text-white overflow-hidden opacity-0 mt-0 pr-2 duration-300 whitespace-nowrap transform group-hover:text-[#28e98c] group-hover:opacity-100 group-hover:-translate-x-1'>About</p>
					<div className='flex w-10 h-10 rounded-full bg-[#2c2c2c80] justify-center items-center duration-300 ease-out group-hover:text-[#28e98c] group-hover:bg-transparent'>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41667 6.41659C6.41667 3.88934 8.47275 1.83325 11 1.83325C13.5273 1.83325 15.5833 3.88934 15.5833 6.41659C15.5833 8.94383 13.5273 10.9999 11 10.9999C8.47275 10.9999 6.41667 8.94383 6.41667 6.41659ZM11 9.16658C9.48122 9.16658 8.25 7.93537 8.25 6.41659C8.25 4.8978 9.48122 3.66659 11 3.66659C12.5188 3.66659 13.75 4.8978 13.75 6.41659C13.75 7.93537 12.5188 9.16658 11 9.16658Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
							<path d="M19.25 18.3333V19.2499H17.4167V18.3333C17.4167 15.806 15.3606 13.7499 12.8333 13.7499H9.16667C6.63942 13.7499 4.58333 15.806 4.58333 18.3333V19.2499H2.75V18.3333C2.75 14.7958 5.62833 11.9166 9.16667 11.9166H12.8333C16.3708 11.9166 19.25 14.7958 19.25 18.3333Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
						</svg>
					</div>
				</div>
			</a>
			<a href="#projects" className='rounded-full duration-300 group'>
				<div className='flex items-center justify-end'>
					<p className='mb-0 text-white overflow-hidden opacity-0 mt-0 pr-2 duration-300 whitespace-nowrap transform group-hover:text-[#28e98c] group-hover:opacity-100 group-hover:-translate-x-1'>Credentials</p>
					<div className='flex w-10 h-10 rounded-full bg-[#2c2c2c80] justify-center items-center duration-300 ease-out group-hover:text-[#28e98c] group-hover:bg-transparent'>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3335 4.58333H10.463L8.89825 3.01858C8.72683 2.84625 8.49308 2.75 8.25016 2.75H3.66683C2.65575 2.75 1.8335 3.57225 1.8335 4.58333V17.4167C1.8335 18.4278 2.65575 19.25 3.66683 19.25H18.3335C19.3446 19.25 20.1668 18.4278 20.1668 17.4167V6.41667C20.1668 5.40558 19.3446 4.58333 18.3335 4.58333ZM3.66683 17.4167V6.41667H10.0835H11.0002H18.3335L18.3353 17.4167H3.66683Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
						</svg>
					</div>
				</div>
			</a>
			<a href="#experience" className='rounded-full duration-300 group'>
				<div className='flex items-center justify-end'>
					<p className='mb-0 text-white overflow-hidden opacity-0 mt-0 pr-2 duration-300 whitespace-nowrap transform group-hover:text-[#28e98c] group-hover:opacity-100 group-hover:-translate-x-1'>Experience</p>
					<div className='flex w-10 h-10 rounded-full bg-[#2c2c2c80] justify-center items-center duration-300 ease-out group-hover:text-[#28e98c] group-hover:bg-transparent'>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3333 5.49992H15.5833V3.66659C15.5833 2.6555 14.7611 1.83325 13.75 1.83325H8.24998C7.2389 1.83325 6.41665 2.6555 6.41665 3.66659V5.49992H3.66665C2.65556 5.49992 1.83331 6.32217 1.83331 7.33325V17.4166C1.83331 18.4277 2.65556 19.2499 3.66665 19.2499H18.3333C19.3444 19.2499 20.1666 18.4277 20.1666 17.4166V7.33325C20.1666 6.32217 19.3444 5.49992 18.3333 5.49992ZM13.75 3.66659V5.49992H8.24998V3.66659H13.75ZM7.33331 7.33325H14.6666H18.3333V10.0833H3.66665V7.33325H7.33331ZM3.66665 17.4166V11.9166H9.16665V13.7499H12.8333V11.9166H18.3333L18.3342 17.4166H3.66665Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
						</svg>
					</div>
				</div>
			</a>
			<a href="#contact" className='rounded-full duration-300 group'>
				<div className='flex items-center justify-end'>
					<p className='mb-0 text-white overflow-hidden opacity-0 mt-0 pr-2 duration-300 whitespace-nowrap transform group-hover:text-[#28e98c] group-hover:opacity-100 group-hover:-translate-x-1'>Contact</p>
					<div className='flex w-10 h-10 rounded-full bg-[#2c2c2c80] justify-center items-center duration-300 ease-out group-hover:text-[#28e98c] group-hover:bg-transparent'>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3335 3.66675H3.66683C2.65575 3.66675 1.8335 4.489 1.8335 5.50008V16.5001C1.8335 17.5112 2.65575 18.3334 3.66683 18.3334H18.3335C19.3446 18.3334 20.1668 17.5112 20.1668 16.5001V5.50008C20.1668 4.489 19.3446 3.66675 18.3335 3.66675ZM18.3335 5.50008V5.9685L11.0002 11.6729L3.66683 5.96941V5.50008H18.3335ZM3.66683 16.5001V8.29041L10.4373 13.5567C10.6023 13.6859 10.8012 13.7501 11.0002 13.7501C11.1991 13.7501 11.398 13.6859 11.563 13.5567L18.3335 8.29041L18.3353 16.5001H3.66683Z" fill="#ffffff" className='group-hover:fill-[#28e98c]'></path>
						</svg>
					</div>
				</div>
			</a>
		</div>
	)
}

export default PortMenu
