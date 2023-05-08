export type TImageContainerProps = {
	imageName: string;
};
export function ImageContainer({ imageName = '' }: TImageContainerProps) {
	return (
		<img
			className="h-auto max-w-full"
			src={imageName}
			alt="image description"
		/>
	);
}
