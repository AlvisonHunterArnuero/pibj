import { Link, useParams } from 'react-router-dom';
import male from '../../assets/male.png'
import female from '../../assets/female.png';
export function MemberDetails() {
   const {memberId} = useParams();
   const arrDetails = memberId?.split("|")
   console.log(arrDetails)
	return (
		<>
			<div className="flex flex-row items-center justify-center">
				<div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg p-10 shadow dark:bg-gray-800 dark:border-gray-700">
					<div className="flex flex-col items-center pb-6">
						<img
							className="w-24 h-24 mb-3 rounded-full shadow-lg mt-8"
							src={
								arrDetails && arrDetails[3].toLowerCase() === 'masculino'
									? male
									: female
							}
							alt=""
						/>
						<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
							{arrDetails && arrDetails[0]}
						</h5>
						<span className="text-sm text-green-500 dark:text-gray-400">
							{arrDetails && arrDetails[9]}
							{'  |  '}
							{arrDetails &&
								Number(new Date().getFullYear()) -
									Number(arrDetails[1].substring(0, 4).trim())}{' '}
							años
						</span>
						<div className="flex mt-4 space-x-3 md:mt-6 w-1/2 !text-blue-400">
							<span className="text-sm text-green-400 dark:text-gray-400">
								{arrDetails && arrDetails[2]} - {arrDetails && arrDetails[4]}
							</span>
						</div>
						<div className="flex mt-4 space-x-3 md:mt-6">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Telefono:{' '}
								<span className="text-white">
									{arrDetails && arrDetails[5]}
								</span>
							</span>
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Estado Civil:{' '}
								<span className="text-white">
									{arrDetails && arrDetails[6]}
								</span>
							</span>
						</div>
						<div className="flex mt-4 space-x-3 md:mt-6">
							<span className="text-sm text-yellow-500 dark:text-gray-400">
								Bautizado:{' '}
								<span className="text-white">
									{arrDetails && arrDetails[3] ? 'Si' : 'No'}
								</span>
							</span>
							<span className="text-sm text-gray-500 dark:text-gray-400">
								Miembro:{' '}
								<span className="text-white">
									{arrDetails && arrDetails[8].substring(0, 4).trim()}
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="text-white bg-blue-500 w-1/6 h-12 m-auto my-4 p-3 rounded-lg">
				<Link to={'/'}>Menu Principal</Link>
			</div>
		</>
	);
}


	// birthDate: string;
	// memberSince: string;