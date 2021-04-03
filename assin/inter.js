const yargs = require('yargs')
const fun= require('./function')
yargs.version('1.1.0')

yargs.command({
    command: '' ,
    describe: 'Add two numbers ' ,
    builder:{
        a:{
            describe: 'first  number',
            demandOption:true    ,   //demands title
            type:'number' 
        },
        b:{
            describe: 'Second number',
            demandOption:true    ,   //demands title
            type:'number' 
        }
    },
    
    handler(argv) {
     console.log("Result: "+ argv.a +" + " +argv.b +" = "+ fun.addNum(argv.a,argv.b)) 
    }
 })
 yargs.command({
    command: 'sub' ,
    describe: 'Substract two numbers ' ,
    builder:{
        a:{
            describe: 'first  number',
            demandOption:true    ,   //demands title
            type:'number' 
        },
        b:{
            describe: 'Second number',
            demandOption:true    ,   //demands title
            type:'number' 
        }
    },
    
    handler(argv) {
     console.log("Result: "+ argv.a +" - " +argv.b +" = "+ fun.subNum(argv.a,argv.b)) 
    }
 })
 yargs.command({
    command: 'mult' ,
    describe: 'Mulitply two numbers ' ,
    builder:{
        a:{
            describe: 'first  number',
            demandOption:true    ,   //demands title
            type:'number' 
        },
        b:{
            describe: 'Second number',
            demandOption:true    ,   //demands title
            type:'number' 
        }
    },
    
    handler(argv) {
     console.log("Result: "+ argv.a +" * " +argv.b +" = "+ fun.multNum(argv.a,argv.b)) 
    }
 })
 yargs.command({
    command: 'div' ,
    describe: 'Divide two numbers ' ,
    builder:{
        a:{
            describe: 'first  number',
            demandOption:true    ,   //demands title
            type:'number' 
        },
        b:{
            describe: 'Second number',
            demandOption:true    ,   //demands title
            type:'number' 
        }
    },
    
    handler(argv) {
        debugger
     console.log("Result: "+ argv.a +" / " +argv.b +" = "+ fun.divNum(argv.a,argv.b)) 
    }
 })

 yargs.command({
    command: 'history' ,
    describe: 'Shows all previous calculations' ,
    
    
    handler(argv) {
    debugger
     console.log(fun.printHistory()) 
    
    }
 })

 yargs.command({
    command: 'clear' ,
    describe: 'Shows all previous calculations' ,
    
    
    handler(argv) {
     console.log(fun.clearHistory()) 
    }
 })

 

yargs.parse();