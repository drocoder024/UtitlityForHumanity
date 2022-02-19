
const readlineSync=require('readline-sync');

const optionList=
  ['URLEncoder','URL DEcoder','Base64Encoding','Base64DEcoding','md5','EpochConv','RGBToHex','HexToRGB','HeightConverter'];

const URLEncoder =()=>
  {
    const inputURL=readlineSync.question('Please input the URL to be encoded : \n');
    const encodedURL=encodeURI(inputURL);
    console.log(`your encoded URL is ${encodedURL}`);
  }

const URLDecoder =()=>
  {
    const inputURL=readlineSync.question('Please input the URL to be decoded : \n');
    const decodedURL=decodeURI(inputURL);
    console.log(`your decoded URL is ${decodedURL}`);
  }

const Base64Encoding=()=>
  {
    const inputURL=readlineSync.question('Please input the URL to be Encoded : \n');
    const encodedURL=Buffer.from(inputURL).toString('base64');
    console.log(`your Encoded URL is ${encodedURL}`);
  }
const Base64DEcoding =()=>
  {
     const inputURL=readlineSync.question('Please input the URL to be decoded : \n');
    const decodedURL=Buffer.from(inputURL, 'base64').toString('ascii');
    console.log(`your decoded URL is ${decodedURL}`);
  }

const md5=()=> {
   const inputString=readlineSync.question('Please input the URL to be hashed : \n');
  const crypto = require('crypto');
const algo = 'md5'; 
const hash = crypto.createHash(algo).update(inputString).digest('hex');


console.log(`hashed output is ${hash}`);
  
}

const EpochConv=()=>
  {
    const utcSeconds=readlineSync.question('Enter Date to be Converted to local Date : \n');
   const human_date=new Date(parseInt(utcSeconds));
    console.log(human_date.toString());
  }

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

const RGBToHex=()=> {
  const red=readlineSync.question('Enter value for RED :');
  const green=readlineSync.question('Enter value for GREEN :');
  const blue=readlineSync.question('Enter value for BLUE :');

 console.log(` converted value is ${rgbToHex(red,green,blue)}`);
}

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

const HexToRGB=()=>{
  const hex=readlineSync.question('Enter hex value to be converted to RGB :\n');
  console.log(` converted value is ${hexToRgb(hex)}`)
}
const HeightConverter=()=>{
  const height=readlineSync.question('Enter your height in Centimeters \n');

  const inches=Math.round(height/2.54);
  const feet=Math.floor(inches/12);
  const inch=inches%12;
  console.log(`your height in feet is ${feet} feet ${inch} inches`)
  
  
}

function choose(optionList)
  {
 console.log('Which utility service do you want to opt for?\n ');
    for(let i=0;i<optionList.length;i++)
      {
        console.log(`${i+1}: ${optionList[i]}\n`)
      }
    
const pick=readlineSync.question('choose one Option : ')
    console.log(`you have selected ${pick}\n`);
    if(pick==='1')
    {
      URLEncoder();
    }
    else if(pick==='2')
    {
      URLDecoder();
    }
    else if(pick==='3')
    {
      Base64Encoding();
    }
    else if(pick==='4')
    {
      Base64DEcoding();
    }
    else if(pick==='5')
    {
      md5();
    }
    else if(pick==='6')
    {
     EpochConv();
    }
    else if(pick==='7')
    {
     RGBToHex();
    }
     else if(pick==='8')
    {
       HexToRGB();
    }
     else if(pick==='9')
    {
       HeightConverter();    }
    else
     {
       console.log('service unavailable at the moment');
     }

  }

choose(optionList);


