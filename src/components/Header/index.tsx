import { ImageContainer } from '../ImageContainer';
import logo from '../../assets/pibjColored.png';
export function Header() {
	return (
		<div className="my-2 inline-flex flex-row align-middle bg-slate-200 header-bg-img border w-full">
			<div className="float-left p-4">
				<ImageContainer imageName={logo} />
			</div>
		</div>
	);
}
