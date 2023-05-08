import { Button } from '../Button';
import { ImageContainer } from '../ImageContainer';
import logo from '../../assets/pibjColored.png';

export function Header() {
	return (
		<div className="flex flex-row align-middle bg-slate-100">
			<div className="basis-1/4 m-auto">
				<ImageContainer imageName={logo} />
			</div>
			<div className="basis-2/4 m-auto">
				<h2 className="text-blue-900 text-4xl">
					ChurchHub - Membership PIBJ
				</h2>
			</div>
			<div className="basis-1/6 m-auto float-right">
				<Button btnTextContent="Add Member" />
			</div>
		</div>
	);
}