Add-Type -AssemblyName System.Drawing

# 8 segments from video JuAa0bUDrGQ (total 109 sec):
# 1 sec = ~1 frame (110 frames total across 109s)
# Each sheet is 3x3 frames, frame width = 320, height = 180
# Frame index = sheetIndex * 9 + (row * 3 + col)
# We want 8 distinct real scenes from this home tour:
# Segment 1: Living room entry (sec ~2 -> frame 2 -> Sheet 0, index 2: row 0, col 2)
# Segment 2: Living area overview (sec ~14 -> frame 14 -> Sheet 1, index 5: row 1, col 2)
# Segment 3: TV Unit / Lounge (sec ~28 -> frame 28 -> Sheet 3, index 1: row 0, col 1)
# Segment 4: Dining area & bar (sec ~42 -> frame 42 -> Sheet 4, index 6: row 2, col 0)
# Segment 5: Modular Kitchen (sec ~56 -> frame 56 -> Sheet 6, index 2: row 0, col 2)
# Segment 6: Master Bedroom (sec ~70 -> frame 70 -> Sheet 7, index 7: row 2, col 1)
# Segment 7: Walk-in Wardrobe (sec ~85 -> frame 85 -> Sheet 9, index 4: row 1, col 1)
# Segment 8: Balcony / Bathroom (sec ~98 -> frame 98 -> Sheet 10, index 8: row 2, col 2)

$targets = @(
    @{ id = 1; sec = 2;  sheet = 0; col = 2; row = 0; name = "residential-thumb-1.jpg" },
    @{ id = 2; sec = 14; sheet = 1; col = 2; row = 1; name = "residential-thumb-2.jpg" },
    @{ id = 3; sec = 28; sheet = 3; col = 1; row = 0; name = "residential-thumb-3.jpg" },
    @{ id = 4; sec = 42; sheet = 4; col = 0; row = 2; name = "residential-thumb-4.jpg" },
    @{ id = 5; sec = 56; sheet = 6; col = 2; row = 0; name = "residential-thumb-5.jpg" },
    @{ id = 6; sec = 70; sheet = 7; col = 1; row = 2; name = "residential-thumb-6.jpg" },
    @{ id = 7; sec = 85; sheet = 9; col = 1; row = 1; name = "residential-thumb-7.jpg" },
    @{ id = 8; sec = 98; sheet = 10; col = 2; row = 2; name = "residential-thumb-8.jpg" }
)

$frameW = 320
$frameH = 180

foreach ($t in $targets) {
    $sheetFile = "sheet_$($t.sheet).jpg"
    $srcImg = [System.Drawing.Image]::FromFile($sheetFile)
    
    $srcX = $t.col * $frameW
    $srcY = $t.row * $frameH
    $srcRect = [System.Drawing.Rectangle]::new($srcX, $srcY, $frameW, $frameH)
    
    # We upscale to 640x360 for high quality display on retina screens
    $destBitmap = [System.Drawing.Bitmap]::new(640, 360)
    $destRect = [System.Drawing.Rectangle]::new(0, 0, 640, 360)
    
    $g = [System.Drawing.Graphics]::FromImage($destBitmap)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $outPath = "public/$($t.name)"
    $destBitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    Write-Host "Created $outPath from sheet_$($t.sheet) at x=$srcX, y=$srcY (sec $($t.sec))"
    
    $g.Dispose()
    $destBitmap.Dispose()
    $srcImg.Dispose()
}

