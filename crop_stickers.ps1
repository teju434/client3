Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\screenshot_ref.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Image($x, $y, $w, $h, $outName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $outPath = "c:\Users\TEJU\OneDrive\Documents\lee\assets\$outName"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved $outName"
}

# Teddy Bear roughly:
Crop-Image 125 135 70 80 "sticker_teddy_raw.png"
# Stick figures top:
Crop-Image 190 75 95 110 "sticker_stick_friends_raw.png"
# Ticket to Happiness:
Crop-Image 210 345 80 50 "sticker_ticket_happiness_raw.png"
# Ticket to Anywhere:
Crop-Image 120 325 85 50 "sticker_ticket_anywhere_raw.png"
# Memories ticket:
Crop-Image 205 190 85 50 "sticker_ticket_memories_raw.png"
# Envelope with heart:
Crop-Image 145 225 65 95 "sticker_envelope_raw.png"
# Red bow:
Crop-Image 20 95 105 100 "sticker_bow_red_raw.png"
# Butterfly:
Crop-Image 45 310 50 45 "sticker_butterfly_raw.png"
# My girl heart:
Crop-Image 140 375 65 65 "sticker_mygirl_raw.png"
# You're perfect:
Crop-Image 200 450 75 40 "sticker_perfect_raw.png"
# Friendship note:
Crop-Image 180 480 105 55 "sticker_friendship_note_raw.png"

$bmp.Dispose()
