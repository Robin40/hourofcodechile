<?php

if(isset($_POST['nombre'])) {

  $nombre = $_POST['nombre'];
  $nombre = iconv('UTF-8', 'windows-1252', html_entity_decode($nombre));

// http://www.setasign.com/products/fpdi/demos/simple-demo/

require_once('include/fpdf17/fpdf.php');
require_once('include/FPDI-1.5.4/fpdi.php');

$pdf = new FPDI();

$pdf->setSourceFile("media/felicitaciones.pdf");
$tplIdx = $pdf->importPage(1);
$size = $pdf->getTemplateSize($tplIdx);

$pdf->AddPage('L', array($size['w'], $size['h']));
$pdf ->useTemplate($tplIdx);
//$pdf->useTemplate($tplIdx, 10, 10, 100);

$pdf-> SetFont('Helvetica', 'B', 30);
$pdf->SetTextColor(0, 0, 0);

$mid_x = $size['w'] / 2;
$str_w = $pdf->GetStringWidth($nombre) / 2;
$pos_x = $mid_x - $str_w;

$pdf->SetXY($pos_x, 65);
$pdf->Write(0, $nombre);

$pdf->Output();

} else {
  header("Location: index.php");
  die();

}