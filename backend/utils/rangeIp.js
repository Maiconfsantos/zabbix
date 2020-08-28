const InbReportConn = require('../config/databases/inbreport')


const checkDatainRange = async function(IP){
    return new Promise(async function(resolve, reject){

        const query = "SELECT connection_type, city FROM inbreports.range_ip where initial_ip <= '"+IP+"' and final_ip >= '"+IP+"'"
        await InbReportConn.query(query, function (err, rows) {
            if (err) reject(err)
            let string = JSON.stringify(rows)

            if (string.length > 2){
                var json =  JSON.parse(string);
                json = {...json[0]}
            }
            else
                var json = {
                    connection_type: 'Não localizado',
                    city: 'Não localizado'
                }
            resolve(json)

        });
  
     }) 
}

module.exports = {
    checkDatainRange
}
