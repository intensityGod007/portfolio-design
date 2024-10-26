import React from 'react'
import profileImage from "../assets/profile_image.jpg"
import resume from "../assets/resume.pdf"

function ProfileCard() {

	const onButtonClick = () => {
		const pdfUrl = resume;
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "document.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className='flex justify-center h-screen items-center w-full'>
			<div className='border rounded-[30px] py-5 px-8 overflow-hidden mr-10 backdrop-blur-xl'>
				<div className='profile-inner h-full'>
					<div className='flex flex-col justify-center'>
						<h4 className='font-extrabold text-2xl mb-5 text-center'>Kunal Singh Varkha</h4>
						<div className='flex justify-center'>
							<img src={profileImage} alt="profile-image" className='max-w-52 rounded-[30px]' />
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<div className='text-center mt-12'>
							<p className='font-light text-lg mb-[0.375rem]'>Data Analyst</p>
							<a href="mailto:kunalsinghvarkha@gmail.com" className='font-medium text-lg mb-1 cursor-pointer block'>kunalsinghvarkha@gmail.com</a>
							<a href="tel:+917303408466" className='font-medium text-lg block'>+91 7303408466</a>
						</div>
						<div className='flex items-center justify-center gap-4 mt-7'>
							<a href="http://www.linkedin.com/in/kunal-singh-varkha-633650243" target="_blank" className='rounded-3xl text-[#0077b5] border border-[#0077b5] p-2 group bg-transparent duration-500  hover:bg-[#0077b5]'>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin duration-500 group-hover:text-white" viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
								</svg>
							</a>
						</div>
						<button onClick={onButtonClick} className='flex justify-center items-center bg-[#28e98c] px-[24px] py-[11px] text-sm font-semibold text-black border border-[#28e98c] rounded-full mt-6 hover:bg-transparent hover:text-[#28e98c] duration-300' target='_blank'>
							Resume
							<div className='ml-2'>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
									<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
									<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCard
