<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class ServerApiController extends Controller
{
    private string $host;
    private string $port;
    private string $apiKey;
    public function __construct(){
        $this->host = env('MUXAPI_HOST', '127.0.0.1');
        $this->port = env('MUXAPI_PORT', '8558');
        $this->apiKey = env('MUXAPI_KEY');
    }
    public function SendApiRequest(Request $request) {
        try {
	       $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $this->apiKey,
            ])->get("http://{$this->host}:{$this->port}/?".http_build_query($request->query()));
        } catch (\Exception) { // request failed
	       return false;
        }
        return $response->json();
    }
}
