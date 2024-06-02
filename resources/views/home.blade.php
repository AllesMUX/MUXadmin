@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Current Servers') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    @foreach ($servers as $server)
                        <div class="d-flex border-bottom">
                            <div class="d-flex flex-column justify-content-center col-md-2">
                                <div class="d-flex"><span class="fw-bold">ID:</span>&nbsp;{{ $server['key'] }}</div>
                                <div class="d-flex"><span class="fw-bold">Protocol:</span>&nbsp;{{ $server['protocol'] }}</div>
                                <div class="d-flex"><span class="fw-bold">Addr:</span>&nbsp;{{ $server['addr'] }}</div>
                                <div class="d-flex"><span class="fw-bold">Port:</span>&nbsp;{{ $server['port'] }}</div>
                                <div class="d-flex"><span class="fw-bold">Worker Port:</span>&nbsp;{{ $server['worker_port'] }}</div>
                            </div>
                            <div class="d-flex flex-wrap justify-content-end w-100">
                                <div style="height: 150px;">
                                    <canvas id="{{ $server['key'] }}-tasks-chart"></canvas>
                                </div>
                                <div style="height: 150px;">
                                    <canvas id="{{ $server['key'] }}-cpu-chart"></canvas>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
<script>
window.serverKeys = JSON.parse(`{!! json_encode($server_keys) !!}`);
</script>
@endsection
