import { Link, useLocation, useParams } from 'react-router-dom';
import male from '../../assets/male.png'
import female from '../../assets/female.png';
export function MemberDetails() {
	const { memberId } = useParams();
	const location = useLocation();
	console.log(location.state);
	return (
		<>
			{' '}
			<h1 className="uppercase text-zinc-300 font-semibold text-2xl my-2">
				{memberId}
			</h1>
			<div className="flex flex-row items-center justify-center">
				{location && (
					<div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-10 shadow dark:bg-gray-800 dark:border-gray-700">
						<div className="flex flex-col items-center pb-6">
							<img
								className="w-24 h-24 mb-3 rounded-full shadow-lg mt-8"
								src={
									location?.state.gender.toLowerCase() === 'masculino'
										? male
										: female
								}
								alt=""
							/>
							<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
								{location?.state.fullName}
							</h5>
							<span className="text-sm text-green-500 dark:text-gray-400">
								{location?.state.churchRole}
								{'  |  '}
								{location?.state.birthDate &&
									Number(new Date().getFullYear()) -
										Number(
											location?.state.birthDate.substring(0, 4).trim()
										)}{' '}
								años
							</span>
							<div className="flex mt-4 space-x-3 md:mt-6 w-1/2 !text-blue-400">
								<span className="text-sm text-green-400 dark:text-gray-400">
									Direccion:
									<span className="text-white">
										{location?.state.address} - {location?.state.city},
										{location?.state.department}
									</span>
								</span>
							</div>
							<div className="flex mt-4 space-x-3 md:mt-6">
								<span className="text-sm text-gray-500 dark:text-gray-400">
									Telefono:{' '}
									<span className="text-white">{location?.state.phone}</span>
								</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									Estado Civil:{' '}
									<span className="text-white">
										{location?.state.maritalStatus}
									</span>
								</span>
							</div>
							<div className="flex mt-4 space-x-3 md:mt-6">
								<span className="text-sm text-yellow-500 dark:text-gray-400">
									Bautizado:{' '}
									<span className="text-white">
										{location?.state.baptized ? 'Si' : 'No'}
									</span>
								</span>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									Miembro:{' '}
									<span className="text-white">
										{location?.state.memberSince.substring(0, 4).trim()}
									</span>
								</span>
							</div>
							<div className="flex mt-4 space-x-3 md:mt-6">
								<span className="text-sm text-yellow-500 dark:text-gray-400">
									Mentor:{' '}
									<span className="text-white">
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
			<div className="text-white bg-sky-800 w-full md:w-1/4 h-12 m-auto my-4 p-3 rounded-lg">
				<Link to={'/'}>Menu Principal</Link>
			</div>
		</>
	);
}


	// birthDate: string;
	// memberSince: string;