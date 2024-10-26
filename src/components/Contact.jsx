import React from 'react'

function Contact() {
	return (
		<section id='contact' className='flex justify-end w-full'>
			<div className="flex w-3/4">
				<section className='flex flex-col pt-16 w-full'>
					<h2 className='text-4xl mb-4'>Let's <span className='text-green-400'>Connect</span></h2>
					<p className='text-gray-300 font-medium text-lg'>Are you seeking a strategic mind to help navigate your business challenges, or do you want to discuss innovative approaches to finance and management consulting? Let’s connect! I’d love to collaborate on projects that push the boundaries of success. Reach out to me via LinkedIn or email, and let’s explore how we can achieve impactful results together.</p>
					<div className='flex mt-6 justify-center'>
						<div className='w-1/2 flex px-3'>
							<a href="mailto:kunalsinghvarkha@gmail.com" className='block w-full border border-[#565656] rounded-2xl py-4 px-6 bg-transparent duration-300 mb-6 hover:bg-[#5656565c] hover:border-[#5656565c] group'>
								<div className='flex items-center gap-4'>
									<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M30 6.16357H6C4.3455 6.16357 3 7.50907 3 9.16357V27.1636C3 28.8181 4.3455 30.1636 6 30.1636H30C31.6545 30.1636 33 28.8181 33 27.1636V9.16357C33 7.50907 31.6545 6.16357 30 6.16357ZM30 9.16357V9.93007L18 19.2646L6 9.93157V9.16357H30ZM6 27.1636V13.7296L17.079 22.3471C17.349 22.5586 17.6745 22.6636 18 22.6636C18.3255 22.6636 18.651 22.5586 18.921 22.3471L30 13.7296L30.003 27.1636H6Z" fill="#28E98C"></path>
									</svg>
									<p className='font-medium text-xl text-white/50'>Mail Me</p>
								</div>
								<p className='font-extrabold text-lg duration-300 overflow-hidden group-hover:text-[#28e98c]'>kunalsinghvarkha@gmail.com</p>
							</a>
						</div>
						<div className='w-1/2 flex px-3'>
							<a href="tel:+917303408466" className='block w-full border border-[#565656] rounded-2xl py-4 px-6 bg-transparent duration-300 mb-6 hover:bg-[#5656565c] hover:border-[#5656565c] group'>
								<div className='flex items-center gap-4'>
									<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M24.849 33.1621C24.8565 33.1621 24.8835 33.1621 24.891 33.1621C25.683 33.1621 26.4315 32.8501 26.9985 32.2831L31.0665 28.2151C31.653 27.6286 31.653 26.6806 31.0665 26.0941L25.0665 20.0941C24.48 19.5076 23.532 19.5076 22.9455 20.0941L20.5545 22.4851C19.446 22.1551 17.3775 21.4051 16.0665 20.0941C14.7555 18.7831 14.0055 16.7146 13.6755 15.6061L16.0665 13.2151C16.653 12.6286 16.653 11.6806 16.0665 11.0941L10.0665 5.09407C9.50402 4.53157 8.50802 4.53157 7.94552 5.09407L3.87902 9.16207C3.30902 9.73207 2.98802 10.5151 3.00002 11.3146C3.03452 13.4506 3.60002 20.8696 9.44702 26.7166C15.294 32.5636 22.713 33.1276 24.849 33.1621ZM9.00752 8.27557L12.8865 12.1546L10.947 14.0941C10.5885 14.4511 10.4355 14.9671 10.5405 15.4621C10.5765 15.6346 11.457 19.7251 13.947 22.2151C16.437 24.7051 20.5275 25.5856 20.7 25.6216C21.1995 25.7266 21.711 25.5736 22.068 25.2151L24.0075 23.2756L27.8865 27.1546L24.8775 30.1621C23.0055 30.1306 16.6005 29.6281 11.568 24.5941C6.51902 19.5451 6.03002 13.1176 6.00002 11.2831L9.00752 8.27557ZM29.9985 16.6621H32.9985C32.9985 8.96707 27.189 3.16357 19.4835 3.16357V6.16357C25.5765 6.16357 29.9985 10.5781 29.9985 16.6621Z" fill="#28E98C"></path>
										<path d="M19.4985 12.1636C22.653 12.1636 23.9985 13.5091 23.9985 16.6636H26.9985C26.9985 11.8261 24.336 9.16357 19.4985 9.16357V12.1636V12.1636Z" fill="#28E98C"></path>
									</svg>
									<p className='font-medium text-xl text-white/50'>Call Me</p>
								</div>
								<p className='font-extrabold text-lg duration-300 overflow-hidden group-hover:text-[#28e98c]'>+91 7303408466</p>
							</a>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Contact
