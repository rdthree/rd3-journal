//import * as d3 from "d3";
const sketchId = "d3-chart-circle"
function createBarChart(containerId = sketchId) {
    const data = [30, 80, 45, 60, 20, 90, 50];
    const svg = d3.select(`#${containerId}`).append("svg")
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
function createSimpleCircle(containerId = sketchId) {
    const svg = d3.select(`#${containerId}`).append("svg")
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
//createBarChart();
//createSimpleCircle();

// Automatically execute functions when the script loads
document.addEventListener('DOMContentLoaded', () => {
    createBarChart();
    createSimpleCircle();
});

// Export functions for potential external use
//window.createBarChart = createBarChart;
//window.createSimpleCircle = createSimpleCircle;

console.log("D3 test script running");