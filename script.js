
// calculate Triangle Area

function calculateTriangleArea(){
    const triangleBase = getInputValueById('triangle-base');
    const triangleHeight = getInputValueById('triangle-height');
    const calculateArea =  0.5 * triangleBase * triangleHeight;
   
    setInnerTextById('triangle-area', calculateArea);
    setInnerTextById('triangle-calc', calculateArea);
}

// calculate Rectangle Area

function calculateRectangleArea(){
    const rectangleWidth = getInputValueById('rectangle-width');
    const rectangleLength = getInputValueById('rectangle-length');

    const calculateRectangle = rectangleWidth * rectangleLength;

    setInnerTextById('rectangle-area', calculateRectangle)
    setInnerTextById('rectangle-calc', calculateRectangle)

}

// calculate parallelogram Area

function calculateParallelogramArea(){
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');
    const calculateParallelogram = parallelogramBase * parallelogramHeight;

    setInnerTextById('parallelogram-area', calculateParallelogram);
    setInnerTextById('parallelogram-calc', calculateParallelogram);
}

// calculate Rhombus Area

function calculateRhombusArea(){
    const rhombusBase = getInputValueById('rhombus-base');  
    const rhombusHeight = getInputValueById('rhombus-height'); 
    
    const rhombusArea = 0.5 * rhombusBase * rhombusHeight;

    setInnerTextById('rhombus-area', rhombusArea);
    setInnerTextById('rhombus-calc', rhombusArea);
}

// calculate pentagon Area


function calculatePentagonArea(){
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');  
    const pentagonApothem = getInputValueById('pentagon-apothem'); 
    
    const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;

    setInnerTextById('pentagon-area', pentagonArea);
    setInnerTextById('pentagon-calc', pentagonArea);
}


// calculate Ellipse Area

function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('Ellipse-minor-radius');

    const ellipseArea = 3.24 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', ellipseArea);
    setInnerTextById('ellipse-calc', ellipseArea);
}

// get Input tValue

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    
    inputField.value = '';
    if( typeof value !== 'number' || isNaN(value)){
        return alert('Please provide a number')
    }
    return value;
}

// set inner text 

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}