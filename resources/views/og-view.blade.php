<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <link rel="icon" href="{{ isset($settings->app_favicon) && $settings->app_favicon ? $settings->app_favicon : asset('favicon.png') }}?v={{ get_version() }}">

    <meta charset="utf-8">
    <meta name="fragment" content="!">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="{{ __('vuefilemanager.user_sending', ['name' => $metadata['user']]) }}">

    {{--OG Public items--}}
    <meta property="og:url" content="{{ $metadata['url'] }}">
    <meta property="og:description" content="{{ __('vuefilemanager.user_sending', ['name' => $metadata['user']]) }}">

    {{--Show protected og metadata--}}
    @if($metadata['is_protected'])
        <meta property="og:title" content="{{ __('vuefilemanager.protected_file') }}">
        <title>{{ __('vuefilemanager.protected_file') }}</title>
    @endif

    {{--Show public og metadata--}}
    @if(! $metadata['is_protected'])

        @if($metadata['thumbnail'])
            <meta property="og:image" content="{{ $metadata['thumbnail'] }}">
        @endif

        <meta property="og:title" content="{{ $metadata['name'] }} ({{ $metadata['size'] }}) | {{ isset($settings->app_title) && $settings->app_title ? $settings->app_title : 'VueFileManager' }}">
        <title>{{ $metadata['name'] }} ({{ $metadata['size'] }}) | {{ isset($settings->app_title) && $settings->app_title ? $settings->app_title : 'VueFileManager' }}</title>
    @endif

</head>
<body></body>
</html>
