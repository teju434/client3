$endpoints = @(
    "/styles.css", 
    "/stickers.js", 
    "/script.js", 
    "/assets/photo_portrait.jpg", 
    "/assets/photo_mirror.jpg", 
    "/assets/photo_friends_outdoor.jpg", 
    "/assets/photo_friends_hug.jpg", 
    "/assets/photo_nature_smile.jpg"
)

foreach ($ep in $endpoints) {
    try {
        $r = Invoke-WebRequest -Uri ("http://localhost:8085" + $ep) -UseBasicParsing
        Write-Host "$ep -> $($r.StatusCode) ($($r.Content.Length) bytes)"
    } catch {
        Write-Host "$ep -> FAILED: $_"
    }
}
