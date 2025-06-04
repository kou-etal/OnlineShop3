<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product'; // 明示的にテーブル指定
    protected $primaryKey = 'id'; // 主キー
    public $timestamps = false;  // タイムスタンプ無効
    protected $fillable = ['name', 'price', 'image', 'detail']; // 保存可能なカラム

    // お気に入り（逆参照）
    public function favorites()
    {
        return $this->hasMany(Favorite::class, 'product_id', 'id');
    }

    // 購入詳細（逆参照）
    public function purchaseDetails()
    {
        return $this->hasMany(PurchaseDetail::class, 'product_id', 'id');
    }
}
?>
