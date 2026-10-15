Add-Type -AssemblyName System.Drawing

# Sheet 7 has frames around sec 63 to 71.
# Let's inspect all frames on sheet 6 and 7 to find bright kitchen / dining scenes:
# Sheet 6 is sec 54 to 62:
# 0: sec 54, 1: sec 55, 2: sec 56, 3: sec 57, 4: sec 58, 5: sec 59, 6: sec 60, 7: sec 61, 8: sec 62
# Sheet 7 is sec 63 to 71.
# Let's check frame (sheet 6, row 0, col 1) sec 55
# Let's replace thumb-6 with sec 60 (sheet 6, row 2, col 0) or sec 61 (sheet 6, row 2, col 1)

$frameW = 320
$frameH = 180

function CropFrame($sheetNum, $col, $row, $outName) {
    $srcImg = [System.Drawing.Image]::FromFile("sheet_$sheetNum.jpg")
    $srcX = $col * 320
    $srcY = $row * 180
    $srcRect = [System.Drawing.Rectangle]::new($srcX, $srcY, 320, 180)
    $destBitmap = [System.Drawing.Bitmap]::new(640, 360)
    $destRect = [System.Drawing.Rectangle]::new(0, 0, 640, 360)
    $g = [System.Drawing.Graphics]::FromImage($destBitmap)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $destBitmap.Save("public/$outName", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $destBitmap.Dispose()
    $srcImg.Dispose()
}

# Let's crop frame from sheet 6 row 2 col 1 (sec 61) as candidate for thumb-6
CropFrame 6 1 2 "residential-thumb-6.jpg"

