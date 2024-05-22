import banner1440 from '/src/assets/banner-1440.jpg';
import banner375 from '/src/assets/banner-375.jpg';

export default function Banner() {
  return (
    <figure className="relative grid min-h-[311.4px] w-full items-end lg:min-h-[634.21px]">
      <picture className="absolute top-0 -z-10 h-full w-full justify-stretch">
        <source srcSet={banner375} media="(max-width: 1025px)" />
        <img
          src={banner1440}
          alt="白頭翁 (Chinese bulbul)"
          className="h-full w-full object-cover"
        />
      </picture>
      <figcaption className="grid justify-items-end space-y-[10px] p-6 text-white">
        <p className="text-end text-5xl font-bold leading-[1.35] max-sm:max-w-[285.28px] lg:w-auto">
          白頭翁 (Chinese bulbul)
        </p>
        <p className="text-center text-lg">
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
          年。
        </p>
      </figcaption>
    </figure>
  );
}
