@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                    <input type="text" v-model="newMsg" @keyup.enter="go">
                    <button @click="leave">Leave</button>
                    <ul>
                        <li v-for="msg in msgs">@{{ msg.id }} -> @{{ msg.msg }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
