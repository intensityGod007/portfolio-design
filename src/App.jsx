// import './App.css'
import { Intro, AboutMe, Skills, ProfileCard, Experience, MissionVission, Contact, Projects, PortMenu } from "./components"

function App() {
	return (
		<div className='flex w-full justify-between'>
			<div>
				<PortMenu />
			</div>
			<div className='flex overflow-hidden w-2/6 fixed'>
				<ProfileCard />
			</div>
			<div className='flex justify-center'>
				<div className='flex flex-col w-4/6'> {/* container */}
					<Intro />
					<AboutMe />
					<Skills />
					<Projects />
					<Experience />
					<MissionVission />
					<Contact />
				</div>
			</div>
		</div>
	)
}

export default App
