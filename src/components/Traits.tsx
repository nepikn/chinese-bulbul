export default function Traits() {
  const traitItems = [
    [
      '外觀',
      '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。',
    ],
    [
      '棲地',
      '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。',
    ],
    [
      '食性',
      '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。',
    ],
  ].map(([trait, description]) => (
    <li key={trait} className="flex">
      <div className="">
        <h3 className="relative mr-[42px] w-[1em] text-4xl font-bold">
          {trait}
          <div className="border-decor/60 absolute left-full top-full aspect-square w-[25px] -translate-x-1/2 -translate-y-1/2 rounded-full border-8" />
        </h3>
      </div>
      <p className="w-[223.4px] lg:w-auto">{description}</p>
    </li>
  ));

  return (
    <section className="bg-background grid justify-center pb-[68px] pt-[50px] lg:pb-[133px] lg:pt-[58px]">
      <ul className="grid w-[302.24px] items-start justify-between gap-[51px] lg:mx-[50px] lg:w-auto lg:grid-flow-col lg:gap-0 xl:gap-[79px]">
        {traitItems}
      </ul>
    </section>
  );
}
