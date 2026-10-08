Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\screenshot_ref.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

function Make-Transparent-Sticker($x, $y, $w, $h, $outName) {
    if ($x + $w -gt $bmp.Width) { $w = $bmp.Width - $x }
    if ($y + $h -gt $bmp.Height) { $h = $bmp.Height - $y }
    
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    
    # Check pixels and copy with transparency
    for ($i = 0; $i -lt $w; $i++) {
        for ($j = 0; $j -lt $h; $j++) {
            $px = $bmp.GetPixel($x + $i, $y + $j)
            # Brown background check: R in 60-120, G in 35-75, B in 20-55 and low saturation/diff
            $isBrown = ($px.R -ge 55 -and $px.R -le 115) -and ($px.G -ge 30 -and $px.G -le 80) -and ($px.B -ge 15 -and $px.B -le 60)
            if ($isBrown) {
                $cropped.SetPixel($i, $j, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } else {
                $cropped.SetPixel($i, $j, $px)
            }
        }
    }
    
    $outPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\$outName"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Processed $outName"
}

# Accurate coordinate crops from 292x759:
# 1. Teddy bear
Make-Transparent-Sticker 125 135 65 78 "sticker_teddy.png"

# 2. Stick figures holding hands (top)
Make-Transparent-Sticker 188 75 98 105 "sticker_stick_friends.png"

# 3. Stick figures holding hands (bottom)
Make-Transparent-Sticker 105 530 96 115 "sticker_stick_friends2.png"

# 4. Ticket To Happiness (dusty pink)
Make-Transparent-Sticker 212 342 76 52 "sticker_ticket_happiness.png"

# 5. Ticket To Anywhere (cream vintage)
Make-Transparent-Sticker 122 322 83 48 "sticker_ticket_anywhere.png"

# 6. THESE MEMORIES MAKE ME SMILE
Make-Transparent-Sticker 210 190 78 48 "sticker_ticket_memories.png"

# 7. Envelope with red heart
Make-Transparent-Sticker 145 224 62 88 "sticker_envelope.png"

# 8. Red satin ribbon bow (top)
Make-Transparent-Sticker 22 98 100 95 "sticker_bow_red.png"

# 9. Red satin ribbon bow (middle)
Make-Transparent-Sticker 48 358 74 95 "sticker_bow_red2.png"

# 10. Burgundy lace butterfly (middle)
Make-Transparent-Sticker 45 308 48 42 "sticker_butterfly.png"

# 11. Red orchid flower branch
Make-Transparent-Sticker 68 230 60 88 "sticker_flower_branch.png"

# 12. "my girl" vintage newsprint heart
Make-Transparent-Sticker 140 372 65 65 "sticker_mygirl.png"

# 13. "You're perfect." oval badge
Make-Transparent-Sticker 202 448 82 32 "sticker_perfect.png"

# 14. "your friendship means the world to me." note
Make-Transparent-Sticker 184 480 102 55 "sticker_friendship_note.png"

# 15. Spotify pink heart icon
Make-Transparent-Sticker 120 488 45 45 "sticker_spotify.png"

# 16. Audio waveform pink player
Make-Transparent-Sticker 216 648 72 30 "sticker_waveform.png"

# 17. Band-aid with red heart
Make-Transparent-Sticker 0 465 48 185 "sticker_bandaid.png"

# 18. Red wax seal heart (top)
Make-Transparent-Sticker 128 20 42 35 "sticker_wax_seal.png"

$bmp.Dispose()
