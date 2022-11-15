<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$taskText = $data['taskText'];
$taskDate = $data['taskDate'];
$id = $data['id'];

$query = mysqli_query($koneksi,"update user set taskText='$taskText',taskDate='$taskDate' where id='$id'");
 if ($query) {
 	http_response_code(201);
 	$pesan['status'] = 'sukses';
 }else{
 	http_response_code(422);
 	$pesan['status'] = 'gagal';

}

echo json_encode($pesan);
echo mysqli_error($koneksi);


?>