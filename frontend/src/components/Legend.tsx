import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const Legend = () => {
  const map = useMap();

  // fix scales 
  useEffect(() => {
    // get color depending on population density value
    const getColor = d => {
      return d > 500000 ? '#800026' :
         d > 100000 ? '#BD0026' :
         d > 50000  ? '#E31A1C' :
         d > 10000  ? '#FC4E2A' :
         d > 5000   ? '#FD8D3C' :
         d > 1000   ? '#FEB24C' :
         d > 0      ? '#FED976' :
                      '#32a74fff';;
    };

    const legend = new L.Control({ position: "bottomright" } as L.ControlOptions);

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = [  0, 1000, 10000,100000,500000];
      let labels: string[] = [];
      let from;
      let to;

      for (let i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
            getColor(from + 1) +
            '"></i> ' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
  });
  return null;
};

export default Legend;