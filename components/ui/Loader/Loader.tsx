import { ColorRing } from 'react-loader-spinner';

type LoaderProps = {
  height?: number;
  width?: number;
  colors?: [string, string, string, string, string];
};

export default function Loader({
  height = 120,
  width = 120,
  colors = ['#5b85e1', '#5687a7', '#597390', '#463966', '#5a9cbd'],
}: LoaderProps) {
  return (
    <div className="flex justify-center items-center py-20">
      <ColorRing
        visible={true}
        height={height}
        width={width}
        ariaLabel="color-ring-loading"
        colors={colors}
      />
    </div>
  );
}
