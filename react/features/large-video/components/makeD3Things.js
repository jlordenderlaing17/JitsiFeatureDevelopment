import { select } from 'd3-selection';
import * as d3 from 'd3'

export const makeALine = (node, color, x1, y1, x2, y2, width, dash, opacity, id, itsClass, transition, rad) => {
    let timedTransition = d3.transition().duration(transition)
    let lineMade = select(node)
                        .append("line")
                        .attr("stroke", color)
                        .attr('x1', x1)
                        .attr('y1', y1)
                        .attr('x2', x2)
                        .attr('y2', y2)
                        .attr('stroke-width', width)
                        .attr('stroke-dasharray', dash)
                        .attr('opacity', opacity)
                        .attr('id', id)
                        .attr("class", itsClass)
                        .attr('stroke-linecap', rad)
    return lineMade;
}

export const makeACircle = (node, color, cx, cy, r, opacity, id, itsClass, mouseover, mouseout, click, transition) => {
    let timedTransition = d3.transition().duration(transition)
    let circleMade = select(node)
                        .append('circle')                        
                        .attr('fill', color)
                        .attr("cx", cx)
                        .attr('cy', cy)
                        .attr('r', r)
                        .attr('opacity', opacity)
                        .attr("id", id)
                        .attr("class", itsClass)
                        .on('mouseover', mouseover)
                        .on('mouseout', mouseout)
                        .on('click', click)
                        .transition(timedTransition) 
    return circleMade;

}

export const makeSomeText = (node, color, x, y, sizeAndFont, text, opacity, id, itsClass, bold, anchor) => {    
    let someText = select(node)
                        .append('text')                       
                        .attr('fill', color)
                        .attr('x', x)
                        .attr('y', y)
                        .style("font", sizeAndFont)
                        .text(text)
                        .attr('opacity', opacity)
                        .attr('id', id)
                        .attr('class', itsClass)
                        .attr("text-anchor", anchor)
                        .style('font-weight', bold)
    return someText;

}

export const makeARect = (node, color, x, y, width, height, opacity, id, itsClass, roundX, roundY, mouseover, mouseout, click ) => {
    let rectMade = select(node)
        .append('rect')                      
        .attr('fill', color)
        .attr('x', x)
        .attr('y', y)
        .attr("width", width)
        .attr('height', height)
        .attr('opacity', opacity)
        .attr('id', id)
        .attr('class', itsClass)
        .attr('rx', roundX)
        .attr('ry', roundY)
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)
        .on('click', click)
    
  
    return rectMade;

}

