const zabbixCorp = require('../utils/corporativo');
const { checkDatainRange } = require('../utils/rangeIp')

exports.get_host_corp= async (req, res) => {
    try {
        await zabbixCorp.login();
        const hosts = await zabbixCorp.request('host.get', {
            selectInterfaces: 'extend',
        })

        let data = [];
        let ipRangePromises = [];

        hosts.map( iten =>{
            ipRangePromise = checkDatainRange(iten.interfaces[0].ip)
            ipRangePromises = [...ipRangePromises,ipRangePromise]

            ipRangePromise.then( (Iprangedata) =>{

                hostObject = {
                    host: iten.host,
                    description: iten.description,
                    interfaces: iten.interfaces,
                    Iprangedata
                }
    
                data = [...data, hostObject]

            })
           

            return(ipRangePromises);
        })

        let processed_promise = Promise.all(ipRangePromises)
        processed_promise.then((results) => {
            zabbixCorp.logout()
            res.json(data)
        })

    } catch (error) {
      console.error(error)
    }
}