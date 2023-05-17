import { Link } from 'react-router-dom';
import logo from '../../assets/pibjColored.png'

export function Team() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
					<div className="mx-auto mb-8 max-w-screen-lg lg:mb-16">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Junta Ministerial - Primera Iglesia Bautista de Jinotepe
						</h2>
						<p>
							<img
								className="mx-auto mb-4 w-80"
								src={logo}
								alt="LOGO PIBJ"
							/>
						</p>
						<p className="text-left font-light text-gray-500 sm:text-xl dark:text-gray-400">
							La junta ministerial de una iglesia bautista se compone de líderes
							encargados de guiar y supervisar las actividades y ministerios de
							la iglesia. Su enfoque principal es promover el crecimiento
							espiritual y el bienestar de los miembros, así como llevar a cabo
							la misión de la iglesia. Toman decisiones estratégicas en áreas
							como servicios religiosos, doctrina, cuidado pastoral, eventos
							comunitarios y administración financiera.
						</p>{' '}
						<br />
						<p className="text-left font-light text-gray-500 sm:text-xl dark:text-gray-400">
							En resumen, la junta ministerial busca el crecimiento espiritual y
							bienestar de los miembros, cumple la misión de la iglesia y
							fomenta una comunidad comprometida, tomando decisiones
							estratégicas y promoviendo principios bíblicos y centrados en
							Cristo.
						</p>
					</div>
					<div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
								alt="Gilberto Solano"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								<a href="#">Gilberto Solano</a>
							</h3>
							<p>Presidente</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
								alt="Manuel Bojorge"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Manuel Bojorge
							</h3>
							<p>Presidente Diaconos</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
								alt="Francisco Luna"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Francisco Luna
							</h3>
							<p>Tesorero</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
								alt="Karla Bonilla"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Karla Bonilla
							</h3>
							<p>Secretaria General</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
								alt="Candida Narvaez"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Candida Narvaez
							</h3>
							<p>Miembro</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
								alt="Nelson Muniz"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Nelson Muniz
							</h3>
							<p>Miembro</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
								alt="Onice Acevedo"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Onice Acevedo
							</h3>
							<p>Directora de alabanza</p>
						</div>
						<div className="text-center text-gray-500 dark:text-gray-400">
							<img
								className="mx-auto mb-4 w-36 h-36 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
								alt="Alvison Hunter"
							/>
							<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Alvison Hunter
							</h3>
							<p>Coordinador Juvenil</p>
						</div>
					</div>
				</div>
			</section>
			<div className="flex flex-row items-center justify-between my-6 gap-2">
				<span className="text-white m-auto p-4 rounded-lg max-w-full basis-3/6 bg-black hover:bg-gray-100 hover:text-black">
					<Link to={'/'}>Menu Principal</Link>
				</span>
			</div>
		</>
	);
}
