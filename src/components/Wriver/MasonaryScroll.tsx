import React, { useEffect, useState } from "react";
import "./MasonryScroll.scss"; // new SCSS file

type ImgData = {
  src: string;
  width: number;
  height: number;
  ratio: number; // width / height
};

export default function MasonryScroll() {
  const imagePaths = [
    "/BusinessView/Chirmee/1.jpg",
    "/BusinessView/Chirmee/2.jpg",
    "/BusinessView/Chirmee/6.jpg",
    "/BusinessView/Chirmee/7.jpg",
    "/BusinessView/Chirmee/8.jpg",
    "/BusinessView/Chirmee/21.jpg",
    "/BusinessView/Chirmee/22.jpg",
    "/BusinessView/Chirmee/23.jpg",
    "/BusinessView/Chirmee/30.jpg",
    "/BusinessView/Chirmee/31.jpg",
    "/BusinessView/Chirmee/35.jpg",
    "/BusinessView/Chirmee/18.jpg",
    "/BusinessView/Chirmee/20.jpg",
    "/BusinessView/Chirmee/11.jpg",
  ];

  const [columns, setColumns] = useState<{ type: string; imgs: ImgData[] }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const promises = imagePaths.map(
        (src) =>
          new Promise<ImgData>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              resolve({
                src,
                width: img.width,
                height: img.height,
                ratio: img.width / img.height,
              });
            };
            img.onerror = () => {
              resolve({ src, width: 1, height: 1, ratio: 1 });
            };
          })
      );
      const loaded = await Promise.all(promises);

      const horizontals = [...loaded]
        .filter((img) => img.ratio > 1)
        .sort((a, b) => b.ratio - a.ratio);

      let horizIndex = 0;
      let i = 0;
      const cycle = ["C", "A", "B"];
      const cols: { type: string; imgs: ImgData[] }[] = [];

      while (i < loaded.length) {
        for (let offset = 0; offset < cycle.length && i < loaded.length; offset++) {
          const type = cycle[offset];

          if ((type === "A" || type === "B") && i + 1 < loaded.length) {
            cols.push({ type, imgs: [loaded[i], loaded[i + 1]] });
            i += 2;
          } else if (type === "C" && i + 2 < loaded.length) {
            let topImg: ImgData;
            if (horizIndex < horizontals.length) {
              topImg = horizontals[horizIndex];
              horizIndex++;
              const idx = loaded.findIndex((x) => x.src === topImg.src);
              if (idx !== -1) loaded.splice(idx, 1);
            } else {
              topImg = loaded[i];
              i++;
            }
            const bottom1 = loaded[i];
            const bottom2 = loaded[i + 1];
            cols.push({ type: "C", imgs: [topImg, bottom1, bottom2] });
            i += 2;
          } else {
            cols.push({ type: "A", imgs: [loaded[i]] });
            i++;
          }
        }
      }

      setColumns(cols);
    };

    loadImages();
  }, []);

  return (
    <div className="masonry-scroll">
      <div className="masonry-track">
        {columns.map((col, idx) => {
          if (col.type === "A") {
            return (
              <div key={idx} className="col col-a">
                <img src={col.imgs[0].src} className="img img-top" />
                {col.imgs[1] && <img src={col.imgs[1].src} className="img img-bottom" />}
              </div>
            );
          }

          if (col.type === "B") {
            return (
              <div key={idx} className="col col-b">
                <img src={col.imgs[0].src} className="img img-top-large" />
                {col.imgs[1] && <img src={col.imgs[1].src} className="img img-bottom-small" />}
              </div>
            );
          }

          if (col.type === "C") {
            return (
              <div key={idx} className="col col-c">
                <img src={col.imgs[0].src} className="img img-wide" />
                <div className="col-c-bottom">
                  <img src={col.imgs[1].src} className="img img-half left" />
                  <img src={col.imgs[2].src} className="img img-half right" />
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
