import banner1440 from '/src/assets/banner-1440.jpg'
import banner375 from '/src/assets/banner-375.jpg'

export default function Banner() {
  return (
    <figure className="relative grid h-[311.4px] w-full items-end">
      <picture className="absolute -z-10">
        <source srcSet={banner375} media="(max-width: 376px)" />
        <img src={banner1440} alt="白頭翁 (Chinese bulbul)" />
      </picture>
      <figcaption className="grid justify-items-end text-white">
        <p className="w-[285.28px] text-end text-5xl font-bold">
          白頭翁 (Chinese bulbul)
        </p>
        <p className="text-center text-lg">
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
          年。
        </p>
      </figcaption>
    </figure>
  )
}
