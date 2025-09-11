import React from "react";
import { Pencil } from "lucide-react";
import "./MasonryScroll_Edit.scss";

export default function MasonryScroll_Edit() {
  // You can determine dark mode based on your app's theme state
  // This is a placeholder - replace with your actual dark mode logic
  const isDarkMode = false; // Replace with your dark mode state logic

  const images = [
    "/BusinessView/Wriver/1.jpg",
    "/BusinessView/Wriver/2.jpg",
    "/BusinessView/Wriver/6.jpg",
    "/BusinessView/Wriver/7.jpg",
    "/BusinessView/Wriver/8.jpg",
    "/BusinessView/Wriver/21.jpg",
    "/BusinessView/Wriver/18.jpg",
    "/BusinessView/Wriver/20.jpg",
    "/BusinessView/Wriver/11.jpg",
    "/BusinessView/Wriver/22.jpg",
    "/BusinessView/Wriver/23.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/30.jpg",
    "/BusinessView/Wriver/35.jpg",
  ];

  const handleEditClick = (imageIndex: number) => {
    // Add your edit functionality here
    console.log(`Edit image at index: ${imageIndex}`);
  };

  const generateColumns = () => {
    const cols: { type: string; imgs: string[]; indices: number[] }[] = [];
    let i = 0;

    const cycle = ["C", "A", "B"];
    let startIndex = 0;

    while (i < images.length) {
      for (
        let offset = 0;
        offset < cycle.length && i < images.length;
        offset++
      ) {
        const type = cycle[(startIndex + offset) % cycle.length];

        if ((type === "A" || type === "B") && i + 1 < images.length) {
          cols.push({
            type,
            imgs: [images[i], images[i + 1]],
            indices: [i, i + 1],
          });
          i += 2;
        } else if (type === "C" && i + 2 < images.length) {
          cols.push({
            type,
            imgs: [images[i], images[i + 1], images[i + 2]],
            indices: [i, i + 1, i + 2],
          });
          i += 3;
        } else {
          cols.push({
            type: "A",
            imgs: [images[i]],
            indices: [i],
          });
          i++;
        }
      }
    }
    return cols;
  };

  const columns = generateColumns();

  return (
    <div className={`edit-container ${isDarkMode ? "dark" : ""}`}>
      <div className="edit-layout">
        {columns.map((col, idx) => {
          if (col.type === "A") {
            return (
              <div key={idx} className="edit-column column-a">
                <div className="image-wrapper height-35">
                  <img
                    src={col.imgs[0]}
                    className="edit-image"
                    alt={`Edit image ${col.indices[0]}`}
                  />
                  <button
                    className="edit-button"
                    onClick={() => handleEditClick(col.indices[0])}
                  >
                    <Pencil className="edit-icon" />
                  </button>
                </div>
                {col.imgs[1] && (
                  <div className="image-wrapper height-65">
                    <img
                      src={col.imgs[1]}
                      className="edit-image"
                      alt={`Edit image ${col.indices[1]}`}
                    />
                    <button
                      className="edit-button"
                      onClick={() => handleEditClick(col.indices[1])}
                    >
                      <Pencil className="edit-icon" />
                    </button>
                  </div>
                )}
              </div>
            );
          }

          if (col.type === "B") {
            return (
              <div key={idx} className="edit-column column-b">
                <div className="image-wrapper height-65">
                  <img
                    src={col.imgs[0]}
                    className="edit-image"
                    alt={`Edit image ${col.indices[0]}`}
                  />
                  <button
                    className="edit-button"
                    onClick={() => handleEditClick(col.indices[0])}
                  >
                    <Pencil className="edit-icon" />
                  </button>
                </div>
                {col.imgs[1] && (
                  <div className="image-wrapper height-35">
                    <img
                      src={col.imgs[1]}
                      className="edit-image"
                      alt={`Edit image ${col.indices[1]}`}
                    />
                    <button
                      className="edit-button"
                      onClick={() => handleEditClick(col.indices[1])}
                    >
                      <Pencil className="edit-icon" />
                    </button>
                  </div>
                )}
              </div>
            );
          }

          if (col.type === "C") {
            return (
              <div key={idx} className="edit-column column-c">
                <div className="image-wrapper height-50">
                  <img
                    src={col.imgs[0]}
                    className="edit-image"
                    alt={`Edit image ${col.indices[0]}`}
                  />
                  <button
                    className="edit-button"
                    onClick={() => handleEditClick(col.indices[0])}
                  >
                    <Pencil className="edit-icon" />
                  </button>
                </div>
                <div className="split-container">
                  <div className="split-wrapper split-left">
                    <img
                      src={col.imgs[1]}
                      className="split-image"
                      alt={`Edit image ${col.indices[1]}`}
                    />
                    <button
                      className="split-button"
                      onClick={() => handleEditClick(col.indices[1])}
                    >
                      <Pencil className="split-icon" />
                    </button>
                  </div>
                  <div className="split-wrapper split-right">
                    <img
                      src={col.imgs[2]}
                      className="split-image"
                      alt={`Edit image ${col.indices[2]}`}
                    />
                    <button
                      className="split-button"
                      onClick={() => handleEditClick(col.indices[2])}
                    >
                      <Pencil className="split-icon" />
                    </button>
                  </div>
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
