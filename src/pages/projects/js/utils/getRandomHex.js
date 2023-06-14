const getRandomHex = () => {
    const hexCodeArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = '';
    
    for (let i = 0 ; i < 6 ; i++) {
     const randomHexIndex =Math.floor(Math.random()* hexCodeArray.length);
     hexCode += hexCodeArray[randomHexIndex];
    }
 
    return `#${hexCode}`;
 };
 
 module.exports = { getRandomHex }