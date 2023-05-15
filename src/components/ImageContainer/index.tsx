export type TImageContainerProps = {
	imageName: string;
};
export function ImageContainer({ imageName = '' }: TImageContainerProps) {
	return (
		<img
			className="h-auto w-60"
			src={imageName}
			alt="image description"
		/>
	);
}
