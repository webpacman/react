<?php

require_once 'env.php';

$result = [
    'status' => 'error',
    'code' => 'unknown',
    'message' => 'Unknown error',
];

if (empty($_POST) || empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    $result['code'] = 'empty_data';
    $result['message'] = 'Empty POST data';
    http_response_code(400);
    echo json_encode($result);
    die();
}

$apiToken = env('TELEGRAM_BOT_TOKEN');
$chatId = env('TELEGRAM_CHAT_ID');

if (!$apiToken || !$chatId) {
    $result['code'] = 'configuration';
    $result['message'] = 'Configuration error';
    http_response_code(500);
    echo json_encode($result);
    die();
}

$data = [
    'chat_id' => $chatId,
    'text' => "Name: {$_POST['name']}, email: {$_POST['email']}, message: {$_POST['message']}",
];

try {
    $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));

    $result = json_decode($response, true);

    if ($result['ok']) {
        $result['status'] = 'success';
        $result['code'] = 'success';
        $result['message'] = 'Message sent successfully';
    } else {
        $result['code'] = 'telegram';
        $result['message'] = 'Error from Telegram';
    }
} catch (Exception $e) {
    http_response_code(500);
    $result['code'] = 'error';
    $result['message'] = 'Error sending message: ' . $e->getMessage();
    die();
}

http_response_code(200);
echo json_encode($result);
