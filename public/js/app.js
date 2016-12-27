var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

//jQuery('.room-title').text(room);
var $roomn = jQuery('.room-title');
$roomn.append('<p><strong>Room name: </strong><font color = "red" face="Comic Sans MS"><i>' + room + '</i></font></p>');

socket.on('connect', function () {
    console.log('Connected to socket.io server!');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    var $messages = jQuery('.messages');
    var $message = jQuery('<li class="list-group-item"></li>')
    
    console.log('New message:');
    console.log(message.text);
    
    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('HH:mm') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
    $messages.append($message);
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function () {
    event.preventDefault();
    
    var $message = $form.find('input[name = message]');
    
    socket.emit('message', {
        name: name,
        text: $message.val()
    });
    
    $message.val('');
});