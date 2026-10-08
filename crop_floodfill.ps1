Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\screenshot_ref.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-FloodFill-Sticker($x, $y, $w, $h, $outName) {
    if ($x + $w -gt $bmp.Width) { $w = $bmp.Width - $x }
    if ($y + $h -gt $bmp.Height) { $h = $bmp.Height - $y }
    
    $cropped = [System.Drawing.Bitmap]::new($w, $h)
    for ($i = 0; $i -lt $w; $i++) {
        for ($j = 0; $j -lt $h; $j++) {
            $cropped.SetPixel($i, $j, $bmp.GetPixel($x + $i, $y + $j))
        }
    }
    
    $visited = New-Object 'bool[,]' $w, $h
    $queue = [System.Collections.Generic.Queue[System.Drawing.Point]]::new()
    
    # Seed perimeter
    for ($i = 0; $i -lt $w; $i++) {
        $queue.Enqueue([System.Drawing.Point]::new($i, 0)); $visited[$i, 0] = $true
        $queue.Enqueue([System.Drawing.Point]::new($i, ($h - 1))); $visited[$i, ($h - 1)] = $true
    }
    for ($j = 0; $j -lt $h; $j++) {
        if (-not $visited[0, $j]) { $queue.Enqueue([System.Drawing.Point]::new(0, $j)); $visited[0, $j] = $true }
        if (-not $visited[($w - 1), $j]) { $queue.Enqueue([System.Drawing.Point]::new(($w - 1), $j)); $visited[($w - 1), $j] = $true }
    }
    
    $dx = @(1, -1, 0, 0)
    $dy = @(0, 0, 1, -1)
    
    while ($queue.Count -gt 0) {
        $pt = $queue.Dequeue()
        $px = $cropped.GetPixel($pt.X, $pt.Y)
        
        # Stop at white/cream sticker border
        $isWhiteBorder = ($px.R -ge 210 -and $px.G -ge 205 -and $px.B -ge 195)
        if ($isWhiteBorder) {
            continue
        }
        
        # Outside pixel becomes transparent
        $cropped.SetPixel($pt.X, $pt.Y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        
        for ($k = 0; $k -lt 4; $k++) {
            $nx = $pt.X + $dx[$k]
            $ny = $pt.Y + $dy[$k]
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
                if (-not $visited[$nx, $ny]) {
                    $visited[$nx, $ny] = $true
                    $queue.Enqueue([System.Drawing.Point]::new($nx, $ny))
                }
            }
        }
    }
    
    $outPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\$outName"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Flood-filled $outName"
}

# 1. Teddy bear
Crop-FloodFill-Sticker 126 136 65 76 "sticker_teddy.png"

# 2. Stick figures holding hands (top)
Crop-FloodFill-Sticker 188 75 98 105 "sticker_stick_friends.png"

# 3. Stick figures holding hands (bottom)
Crop-FloodFill-Sticker 105 530 96 115 "sticker_stick_friends2.png"

# 4. Ticket To Happiness (dusty pink)
Crop-FloodFill-Sticker 212 342 76 52 "sticker_ticket_happiness.png"

# 5. Ticket To Anywhere (cream vintage)
Crop-FloodFill-Sticker 122 322 83 48 "sticker_ticket_anywhere.png"

# 6. THESE MEMORIES MAKE ME SMILE
Crop-FloodFill-Sticker 210 190 78 48 "sticker_ticket_memories.png"

# 7. Envelope with red heart
Crop-FloodFill-Sticker 145 224 62 88 "sticker_envelope.png"

# 8. Red satin ribbon bow (top)
Crop-FloodFill-Sticker 22 98 100 95 "sticker_bow_red.png"

# 9. Red satin ribbon bow (middle)
Crop-FloodFill-Sticker 48 358 74 95 "sticker_bow_red2.png"

# 10. Burgundy lace butterfly (middle)
Crop-FloodFill-Sticker 45 308 48 42 "sticker_butterfly.png"

# 11. Red orchid flower branch
Crop-FloodFill-Sticker 68 230 60 88 "sticker_flower_branch.png"

# 12. "my girl" vintage newsprint heart
Crop-FloodFill-Sticker 140 372 65 65 "sticker_mygirl.png"

# 13. "You're perfect." oval badge
Crop-FloodFill-Sticker 202 448 82 32 "sticker_perfect.png"

# 14. "your friendship means the world to me." note
Crop-FloodFill-Sticker 184 480 102 55 "sticker_friendship_note.png"

# 15. Spotify pink heart icon
Crop-FloodFill-Sticker 120 488 45 45 "sticker_spotify.png"

# 16. Audio waveform pink player
Crop-FloodFill-Sticker 216 648 72 30 "sticker_waveform.png"

# 17. Band-aid with red heart
Crop-FloodFill-Sticker 0 465 48 185 "sticker_bandaid.png"

# 18. Red wax seal heart (top)
Crop-FloodFill-Sticker 128 20 42 35 "sticker_wax_seal.png"

$bmp.Dispose()
