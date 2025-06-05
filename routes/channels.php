<?php

use Illuminate\Support\Facades\Broadcast;

/*Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});*/


Broadcast::channel('chat', function () {
    return true;
});

Broadcast::channel('chat.{user1}.{user2}', function ($user, $user1, $user2) {
     \Log::info('Broadcast check', [
        'auth_user_id' => $user->id,
        'channel_user1' => $user1,
        'channel_user2' => $user2,
     ]);

    return true;//(int) $user->id === (int) $user1 || (int) $user->id === (int) $user2;
});
