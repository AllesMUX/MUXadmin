

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
}