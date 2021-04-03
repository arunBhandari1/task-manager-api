const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "assinment-database"
const id = new mongodb.ObjectID().getTimestamp()


function fetch(student)
{
    MongoClient.connect(connectionURL, {useNewUrlParser:true},(error,client)=>
    {
        if (error)
        {
          return  console.log("Unable to connect to database")
        }
        console.log("connected correctyl")
        
        const db = client.db(databaseName)
    })
}


// MongoClient.connect(connectionURL, {useNewUrlParser:true},(error,client)=>{
//     if (error){
//       return  console.log("Unable to connect to database")
//     }
//     console.log("connected correctyl")


//     const db = client.db(databaseName)
  
     
//      //inserting many documents
//     db.collection("student").insertMany(
//         [
//           {
            
//             name: "Sam",
//             GPA: 3.0,
//             major:"Computer Science",
//             age: 23
//          },
//          {
          
//             name:"John",
//             GPA: 3.5,
//             major:"Math",
//             age:24
//          }
//          ], 
//     (error,result) => {
//            if (error) 
//            {
//             return console.log("Unable to insert student")
//            }
       
//        console.log(result.ops)
//     })

//         //    fetching document
//     db.collection('student').findOne({name:"John",age:24}, (error,student)=> {
//         if (error)
//         {
//             return console.log("Unable to fetch")
//         }
//         console.log(student)
//     })
        
//         //fetching documents
//     db.collection('student').find({name:"John",age:24}).toArray((error,students)=> {
//         if (error)
//         {
//             return console.log("Unable to fetch")
//         }
//         console.log(students)
//     })

//         //fetching many documents
//     db.collection('student').find({name:"John",age:24}).count((error,students)=> {
//         if (error)
//         {
//             return console.log("Unable to fetch")
//         }
//         console.log("Number of documents: "+students)
//     })


//         //update promise
//    db.collection('student').updateOne({
//         _id: new mongodb.ObjectId("603bd4b5e5fa9fd9125bd12d")
//     },
//     {
//         $set: {
//             name: "Michael"

//         }
//     }).then((result)=> {
//         console.log(result)
//     }).catch((error) => 
//     {
//         console.log(error)
//     })
//         //
//     //deleteMany
//     db.collection('student').deleteMany({
//         age:22
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })