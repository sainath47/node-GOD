//CONCEPT

// const {Buffer} = require('buffer')

// const memoryContainer = Buffer.alloc(4);

// memoryContainer[0]=0xf4
// memoryContainer[1]=0xf4
// memoryContainer[2]=0xf4
// memoryContainer[3]=0xff

// console.log(memoryContainer)
// console.log(memoryContainer[0])
// console.log(memoryContainer[1])
// console.log(memoryContainer[2])
// console.log(memoryContainer[3])



//EXERCISE

//0100 1000 0110 1001 0010 0001

// const {Buffer} = require('buffer')

// const memoryContainer1 = Buffer.alloc(3)

// memoryContainer1[0]= parseInt(parseInt('01001000', 2),10)
// memoryContainer1[1]= parseInt(parseInt('01101001', 2),10)
// memoryContainer1[2]= parseInt(parseInt('00100001', 2),10)

// //parseInt is basically a function which convert the binary or any format (16,32,..) to a decimal form , so the above logic what it is 
// console.log(memoryContainer1)
// console.log(memoryContainer1[0])
// console.log(memoryContainer1[1])
// console.log(memoryContainer1[2])

// console.log(memoryContainer1.toString('utf-8'))



