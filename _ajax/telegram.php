<?php

require_once 'env.php';

if (empty($_POST) || empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(400);
    echo "Empty POST data";
    die();
}

$apiToken = env('TELEGRAM_BOT_TOKEN');
$chatId = env('TELEGRAM_CHAT_ID');

if (!$apiToken || !$chatId) {
    http_response_code(500);
    echo "Configuration error";
    die();
}

$data = [
    'chat_id' => $chatId,
    'text' => "Name: {$_POST['name']}, email: {$_POST['email']}, message: {$_POST['message']}",
];

$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));

$result = json_decode($response, true);

if ($result['ok']) {
    http_response_code(200);
    echo "ok";
} else {
    http_response_code(400);
    echo "Some error";
}
