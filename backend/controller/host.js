const zabbixCorp = require('../utils/corporativo');

exports.get_host_corp= async (req, res) => {
    try {
        await zabbixCorp.login();
        const hosts = await zabbixCorp.request('host.get', {
            selectInterfaces: 'extend',
        })

        let data = [];

        hosts.map( iten =>{
            hostObject = {
                host: iten.host,
                description: iten.description,
                interfaces: iten.interfaces
            }

            data = [...data, hostObject]
        })

        zabbixCorp.logout()
        res.json(data)
    } catch (error) {
      console.error(error)
    }
}


