
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

// var socket = require('socket.io-client')(window.location.hostname + '');

const app = new Vue({
    el: '#app',
    data: {
    	user: {},
        msgs: [],
        newMsg: '',
        // socket: null
    },
    methods: {
    	go() {
    		this.check();
    		axios.get('/go?msg=' + this.newMsg).then(function(data) {
    			console.info(data);
    		}).catch(function() {
    			window.alert('go failed');
    		});
	    	this.newMsg = '';
    	},
    	leave() {
    		// Echo.leave('chatroom');
    	},
    	check() {
	    	// console.warn('id', Echo.socketId());
	    	console.warn('id', this.socket.id);
    	}
    },
    mounted() {
    	console.info('start');
 		const socket = require('socket.io-client')(window.location.hostname + ':6001');
   		this.socket = socket;
   		const vm = this;
		this.socket.on('chatroom', function(data) {
			vm.msgs.push(data);
		});

    	// Echo.join('chatroom')
     //        .here((users) => {
     //            console.log('here', users);
     //            this.usersInRoom = users;
     //        })
     //        .joining((user) => {
     //            console.info('join', user);
     //            this.usersInRoom.push(user);
     //        })
     //        .leaving((user) => {
     //            console.warn('leave', user);
     //            this.usersInRoom = this.usersInRoom.filter(u => u != user)
     //        })
     //        .listen('MessagePosted', (msg) => {
     //        	this.msgs.push(msg);
     //        });
    }
});
