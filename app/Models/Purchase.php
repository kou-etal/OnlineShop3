<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $table = 'purchase';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['customer_id', 'created_at', 'total']; // 保存可能なカラム

    // 購入者（リレーション）
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id', 'id');
    }

    // 購入詳細
    public function purchaseDetails()
    {
        return $this->hasMany(PurchaseDetail::class, 'purchase_id', 'id');
    }
}
?>
