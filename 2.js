let prompt = require ("Prompt-Sync");
let prom = prompt();
let mysql = require ("mysql");
let sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass"
});
console.log("   ");
console.log("Enter 1 for viewing the Database  Enter 2 for exiting the Database "  );
let get = prom("Choose your choice : ")
    switch (get)
    {
        case "1":
            sql.query(`SELECT * FROM demo.office`,(err,res)=>{
                if(err){
                    console.log(err);
                }
                console.log("DataBase Connection reached...")
                setTimeout(()=>{
                    console.log("Records in the Database ");
                    return console.log(res);
                },3000);
                })
            break;
        case "2" :
           console.log("Exiting Database ");
    }


    


    
   

    