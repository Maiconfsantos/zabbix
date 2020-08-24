const Zabbix = require('zabbix-promise')
const User = require('./config/password')

const zabbix = new Zabbix({
  url: 'http://zbx-corp.inbtelecom.com.br/api_jsonrpc.php',
  user: User.user,
  password: User.pass
})

const main = async () => {
  try {
    await zabbix.login()
    const host = await zabbix.request('host.get', {
      selectInterfaces: 'extend',
      limit: '1'
    })
    console.log(JSON.stringify(host, null, 2))
    zabbix.logout()
  } catch (error) {
    console.error(error)
  }
}
main()