<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MessagePosted;
use App\Events\RedisBroadcast;

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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function go()
    {
        event(new RedisBroadcast('chatroom', [
            'id' => time(),
            'msg' => request()->input('msg'),
        ]));
        // broadcast(new MessagePosted(request()->input('msg')));
        return response('ok');
    }

    public function pub()
    {
        event(new RedisBroadcast('hi', [
            'id' => time(),
            'msg' => request()->input('msg'),
        ]));
        return response('ok');
    }
}
