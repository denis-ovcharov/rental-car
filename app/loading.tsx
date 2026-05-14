import { ColorRing } from 'react-loader-spinner';

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center py-20">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          colors={['#5b85e1', '#5687a7', '#597390', '#463966', '#5a9cbd']}
        />
      </div>
    </>
  );
}
