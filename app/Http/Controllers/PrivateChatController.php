<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\PrivateMessageSent;

class PrivateChatController extends Controller
{
    public function send(Request $request)
    {
        $message = $request->input('input');
        $toUserId = $request->input('targetUserId');
        $fromUserId = auth()->id();

        event(new PrivateMessageSent($message, $fromUserId, $toUserId));

        return response()->json(['status' => 'Message sent!']);
    }
}
