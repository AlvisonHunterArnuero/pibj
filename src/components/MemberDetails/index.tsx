import { Link, useLocation, useParams } from 'react-router-dom';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
export function MemberDetails() {
	const { memberId } = useParams();
	const location = useLocation();
	return (
		<>
			{' '}
			<h1 className="uppercase text-zinc-200 font-semibold text-2xl my-2">
				{memberId}
			</h1>
			<div className="flex flex-row items-center justify-center">
				{location && (
					<div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-10 shadow dark:bg-gray-800 dark:border-gray-700">
						<div className="flex flex-col items-center pb-6">
							<img
								className="w-28 h-28 mb-3 rounded-full shadow-lg mt-8"
								src={
									location?.state.gender.toLowerCase() === 'masculino'
										? male
										: female
								}
								alt={location?.state.fullName}
							/>
							<h5 className="mb-1 text-xl font-medium !text-sky-300 dark:text-white">
								{location?.state.fullName}
							</h5>
							<span className="text-sm !text-green-500 dark:text-gray-400">
								{location?.state.churchRole}
								{'  |  '}
								{location?.state.birthDate &&
									Number(new Date().getFullYear()) -
										Number(
											location?.state.birthDate.substring(0, 4).trim()
										)}{' '}
								años
							</span>
							<div className="flex mt-4 items-center justify-center space-x-3 md:mt-6 w-full !text-blue-400">
								<span className="text-sm text-center dark:!text-sky-500">
									Direccion:
									<span className="text-neutral-400 font-light">
										{location?.state.address}
										<br />
										{location?.state.city}, {location?.state.department}
									</span>
								</span>
							</div>
							<div className="flex mt-4 items-center justify-center space-x-3 md:mt-6">
								<span className="text-sm !text-sky-500 dark:text-gray-400">
									Telefono:{' '}
									<span className="text-neutral-400">
										{location?.state.phone}
									</span>
								</span>
								<span className="text-sm !text-sky-500 dark:text-gray-400">
									Estado Civil:{' '}
									<span className="text-neutral-400">
										{location?.state.maritalStatus}
									</span>
								</span>
							</div>
							<div className="flex mt-4 items-center justify-center space-x-3 md:mt-6">
								<span className="text-sm !text-sky-500 dark:text-gray-400">
									Bautizado:{' '}
									<span className="text-neutral-400">
										{location?.state.baptized ? 'Si' : 'No'}
									</span>
								</span>
								<span className="text-sm !text-sky-500 dark:text-gray-400">
									Miembro:{' '}
									<span className="text-neutral-400">
										{location?.state.memberSince.substring(0, 4).trim()}
									</span>
								</span>
							</div>
							<div className="flex mt-4 items-center justify-center space-x-3 md:mt-6">
								<span className="text-sm !text-sky-500 dark:text-gray-400">
									Mentor:{' '}
									<span className="text-neutral-400">
										{location?.state.mentor
											? location?.state.mentor
											: 'No Asignado'}
									</span>
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="flex flex-row items-center justify-between my-6 gap-2">
				<span className="text-white m-auto p-4 rounded-lg max-w-full basis-3/6 bg-black hover:bg-gray-100 hover:text-black">
					<Link to={'/'}>Menu Principal</Link>
				</span>
				<span className="text-white m-auto p-4 rounded-lg max-w-full basis-3/6 bg-gray-600 hover:bg-gray-900">
					<Link to={'/team'}>Equipo Ministerial</Link>
				</span>
			</div>
		</>
	);
}
