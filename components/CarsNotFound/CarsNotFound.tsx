import { TbCarOff } from 'react-icons/tb';

export default function CarsNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <TbCarOff className="text-gray" size={120} />
        <h2 className="font-semibold text-2xl text-main">No cars found</h2>
        <p className="text-gray text-base max-w-100">
          We couldn&apos;t find any cars matching your filters. Try adjusting or
          clearing your search.
        </p>
      </div>
    </>
  );
}
