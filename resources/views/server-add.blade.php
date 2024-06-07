@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Add new server') }}</div>

                <div class="card-body">
                  <form id="serverForm" novalidate>
                      <div class="form-group">
                          <label for="protocol">Protocol</label>
                          <select class="form-control" id="protocol" required>
                              <option value="http">HTTP</option>
                              <option value="https">HTTPS</option>
                          </select>
                          <div class="invalid-feedback">Please select a protocol.</div>
                      </div>
                      <div class="form-group mt-2">
                          <label for="ipv4">IPv4 Address</label>
                          <input type="text" class="form-control" id="ipv4" placeholder="Enter IPv4 address" required>
                          <div class="invalid-feedback">Please enter a valid IPv4 address.</div>
                      </div>
                      <div class="form-group mt-2">
                          <label for="port1">App Port</label>
                          <input type="number" class="form-control" id="port" placeholder="Enter App Port" required>
                          <div class="invalid-feedback">Please enter a valid port number (1-65535).</div>
                      </div>
                      <div class="form-group mt-2">
                          <label for="port2">Worker Port</label>
                          <input type="number" class="form-control" id="worker_port" placeholder="Worker Port" required>
                          <div class="invalid-feedback">Please enter a valid port number (1-65535).</div>
                      </div>
                      <button type="submit" class="btn btn-primary mt-4">Add new server <i class="bi bi-magic"></i></button>
                  </form>
                </div>
            </div>
        </div>
    </div>
</div>
@vite(['resources/js/server-add.js'])
@endsection
