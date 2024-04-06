export type TeamCardProps = {
  role: string;
  name: string;
  imgUrl: string;
};
export function TeamCard({ role, name, imgUrl }: TeamCardProps) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full filter grayscale hover:filter-none transition duration-300"
        src={imgUrl}
        alt={name}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{name}</a>
      </h3>
      <p>{role}</p>
    </div>
  );
}
