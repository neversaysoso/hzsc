Add-Type -AssemblyName System.IO.Compression.FileSystem
$doc = '产品及应用2026.5.25.docx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($doc)
$entry = $zip.GetEntry('word/document.xml')
$sr = $entry.Open()
$reader = New-Object System.IO.StreamReader($sr)
$xml = [xml]$reader.ReadToEnd()
$reader.Close()
$sr.Close()
$zip.Dispose()
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$paras = $xml.SelectNodes('//w:body/w:p',$ns)
$count = 0
foreach ($p in $paras) {
    $texts = $p.SelectNodes('.//w:t',$ns) | ForEach-Object { $_.InnerText }
    $line = ($texts -join '')
    if ($line.Trim() -ne '') {
        $count++
        Write-Output (($count.ToString()) + "`t" + $line)
    }
    if ($count -ge 200) { break }
}
