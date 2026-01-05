function stateAndRegion(lang) {
  const width = 270;
  const height = 540;

  const svg = d3
    .create("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  // Fit a Mercator projection to the GeoJSON bounds so the map fills the SVG
  const projection = d3.geoMercator().fitSize([width, height], snrData);
  const pathGen = d3.geoPath(projection);

  svg
    .selectAll("path.land")
    .data(snrData.features)
    .join("path")
    .attr("class", "land")
    .attr("d", pathGen)
    .attr("fill", "var(--ptm-bg-inline-code)")
    .attr("stroke", "#777");

  // append <title> child for accessibility (tooltip in many viewers)
  svg
    .selectAll("path.land")
    .append("title")
    .text(function (d) {
      const lan = lang === "mm" ? "ST_MMR" : "ST";
      return (d && d.properties && d.properties[lan]) || "";
    });
  svg.append("style").text(`
        .land {fill: var(--ptm-bg-inline-code);}
        .land:hover {fill: var(--ptm-color-success);}
        .land-border {
        fill: none;
        stroke: #777;
        pointer-events: none;
        }
    `);
  // Append the SVG element.
  document.getElementById("snr").append(svg.node());
}

(function () {
  const snr = document.getElementById("snr");
  const lanEl = document.getElementById("lang");
  let lang = lanEl.value;

  lanEl.addEventListener("change", () => {
    lang = lanEl.value;
    snr.innerHTML = "";
    stateAndRegion(lang);
  });
  stateAndRegion(lang);
})();
