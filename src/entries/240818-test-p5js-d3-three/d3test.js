console.log("D3 test script running");
function createBarChart() {
    const data = [30, 80, 45, 60, 20, 90, 50];
    const svg = d3.select("body").append("svg")
        .attr("width", 500)
        .attr("height", 300);
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d) => 300 - d)
        .attr("width", 65)
        .attr("height", (d) => d)
        .attr("fill", "teal");
}
function createSimpleCircle() {
    const svg = d3.select("body").append("svg")
        .attr("width", 500)
        .attr("height", 300)
        .style("border", "1px solid black");
    svg.append("circle")
        .attr("cx", 250)
        .attr("cy", 150)
        .attr("r", 100)
        .attr("fill", "blue");
    if (svg.empty()) {
        console.error("Failed to create SVG element.");
    }
    else {
        console.log("SVG element created successfully.");
    }
}
// Call the functions directly in the global scope
createBarChart();
createSimpleCircle();
