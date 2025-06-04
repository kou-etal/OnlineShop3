<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;

class ProfileApiController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'ユーザーネームまたはパスワードが間違っています'], 401);
        }
     Auth::login($user);
        return response()->json(['message' => 'ログイン成功', 'user' => $user]);
    }
    public function edit(Request $request){
        return response()->json([
            'user' => $request->user(),
        ]);
    }

    public function logout(){
        dd(Auth::user());
        Auth::logout();
        return response()->json(['message' => 'ログアウト成功']);
    }
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return response()->json([
            'message'=>'更新しました'
        ]);
    }

    public function destroy(Request $request){
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message'=>'削除しました'
        ]);
    }
    public function index()
    {
        $userData = User::all();

        return response()->json([
            'userData' => $userData
        ]);
    }
}
