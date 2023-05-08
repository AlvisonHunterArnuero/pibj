export type DarkButtonProps = {
	btnTextContent: string;
};
export function Button({ btnTextContent = 'Click Me' }: DarkButtonProps) {
	return (
		<button
			type="button"
			className="flex uppercase self-center justify-center align-middle text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
		>
			{btnTextContent}
		</button>
	);
}
