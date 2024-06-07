<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ServerApiController;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $serverKeys = [];
        $serverApi = new ServerApiController();
        $request = new Request();
        $request->replace(['method' => 'servers_list']);
        $servers = $serverApi->SendApiRequest($request);
        if($servers) {
            foreach($servers['data'] as $server) {
                $serverKeys[] = $server['key'];
            }
            return view('home', [
                'servers' => $servers['data'],
                'server_keys' => $serverKeys,
            ]);
        }
        return view('offline'); 

    }
}
