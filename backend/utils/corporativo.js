const Zabbix = require('zabbix-promise')
const User = require('../config/password')

const zabbix = new Zabbix({
  url: 'http://zbx-corp.inbtelecom.com.br/zabbix/api_jsonrpc.php',
  user: User.user,
  password: User.pass
})



module.exports = zabbix;