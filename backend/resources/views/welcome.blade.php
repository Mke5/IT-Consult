<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'MyIT Consult') }} - Admin Panel</title>
    <meta http-equiv="refresh" content="0;url=/admin">
</head>
<body>
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif;">
        <div style="text-align: center;">
            <h1>MyIT Consult</h1>
            <p>Redirecting to admin panel...</p>
            <p><a href="/admin">Click here if you are not redirected</a></p>
        </div>
    </div>
</body>
</html>
