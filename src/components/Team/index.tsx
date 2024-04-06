import { Link } from 'react-router-dom';
import logo from '../../assets/pibjColored.png'
import { TeamCard } from '../TeamCard';
import img01 from '../../assets/team/img01.jpg'
import img04 from '../../assets/team/img04.jpg'
import img05 from '../../assets/team/img05.jpg'
import img07 from '../../assets/team/img07.jpg'
import img08 from '../../assets/team/img08.jpg'
import imgFemale from '../../assets/team/imgFemale.jpg'
import imgMale from '../../assets/team/imgMale.jpg'
import img10 from '../../assets/team/img10.jpg'
import img11 from '../../assets/team/img11.jpg'
import img12 from '../../assets/team/img12.jpg'

interface TeamMember {
	name: string;
	role: string;
	img: string;
	id: string;
}

const TeamMembers: TeamMember[] = [
	{ name: "Gilberto Solano", role: "Pastor", img: `${img01}`, id: "pibj01" },
	{ name: "Manuel Bojorge", role: "Presidente Diaconos", img: `${imgMale}`, id: "pibj02" },
	{ name: "Enmanuel Arias", role: "Presidente Hombres", img: `${imgMale}`, id: "pibj03" },
	{ name: "Jairo Cruz Castro", role: "Lider de Jovenes", img: `${img04}`, id: "pibj04" },
	{ name: "Jairo Cruz Valero", role: "Presidente Matrimonios", img: `${img05}`, id: "pibj05" },
	{ name: "Karla Bonilla", role: "Secretaria General", img: `${imgFemale}`, id: "pibj06" },
	{ name: "Francisco Luna", role: "Encargado de Finanzas", img: `${img07}`, id: "pibj07" },
	{ name: "Omar Matus", role: "Estudio Biblico", img: `${img08}`, id: "pibj08" },
	{ name: "Margarita Marenco", role: "Escuela Dominical", img: `${imgFemale}`, id: "pibj09" },
	{ name: "Candida Narvaez", role: "Presidente Mujeres", img: `${img10}`, id: "pibj10" },
	{ name: "Onice Acevedo", role: "Directora de Alabanza", img: `${img11}`, id: "pibj11" },
	{ name: "Alvison Hunter", role: "Coordinador Juvenil", img: `${img12}`, id: "pibj12" },
]

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
						{TeamMembers.map(({ name, role, img, id }) => (
							<TeamCard
								key={id}
								role={role}
								name={name}
								imgUrl={img}
							/>
						))}
					</div>
				</div>
			</section>
			<div className="flex flex-row items-center justify-between my-6 gap-2">
				<Link className='m-auto max-w-full p-4 rounded-lg w-full' to={'/'}>
					<span className="text-white m-auto p-4 rounded-lg max-w-full bg-black hover:bg-gray-100 hover:text-black">
					Menu Principal
				</span></Link>
			</div>
		</>
	);
}
