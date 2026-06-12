Add-Type -AssemblyName System.IO.Compression.FileSystem
$doc = '产品及应用2026.5.25.docx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($doc)
$entry = $zip.GetEntry('word/document.xml')
$sr = $entry.Open()
$txt = New-Object System.IO.StreamReader($sr)
$content = $txt.ReadToEnd()
$txt.Close()
$sr.Close()
$zip.Dispose()
$lines = $content -split "`n"
for ($i=0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match 'embed="(rId[0-9]+)"' -or $lines[$i] -match 'blip' -or $lines[$i] -match 'drawing' ) {
        $start = [Math]::Max(0,$i-2)
        $end = [Math]::Min($lines.Length-1,$i+2)
        Write-Output "--- line $i ---"
        for ($j=$start; $j -le $end; $j++) { Write-Output $lines[$j] }
    }
}
