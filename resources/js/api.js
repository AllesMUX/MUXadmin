

export default class MUXapi {
  async _sendApiRequest(data){
    const params = new URLSearchParams(data);
    const response = await fetch(`/api?${params}`);
    return await response.json();
  }
  async ServersList() {
    return await this._sendApiRequest({
      method: 'servers_list'
    });
  }
  async ServersListHealth() {
    return await this._sendApiRequest({
      method: 'servers_list_health'
    });
  }
  async AddServer(protocol, addr, port, worker_port) {
    return await this._sendApiRequest({
      method: 'server_add',
      protocol: protocol,
      addr: addr,
      port: port,
      worker_port: worker_port
    });
  }
  async RemoveServer(key) {
    return await this._sendApiRequest({
      method: 'server_delete',
      key: key
    });
  }
}