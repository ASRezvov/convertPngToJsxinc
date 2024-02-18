#target photoshop

var readFileAsBinaryString = function(){
    var file = File(readFilePath() + activeDocument.name);
    file.open ("r");
    file.encoding = "binary";
    var imageAsString = file.read();
    file.close();
    var fileWithCode = File(readFilePath()+readFileName()+".jsxinc");
    fileWithCode.open ("w");
    fileWithCode.write (temp.toSource ());
    fileWithCode.close ();
}

var readFileName = function(){
    var fileName = activeDocument.name;
    while ((fileName.charAt(fileName.length-1)!=".")&&(fileName.length>0)){
        fileName = fileName.substring(0,fileName.length-1);
    }
    if (fileName.length==0){
        fileName = activeDocument.name;
    } else {
        fileName = fileName.substring(0,fileName.length-1);
    }
    return fileName;
}

var readFilePath = function(){
    return activeDocument.path+"//";
}


readFileAsBinaryString ();


// var exportTIFF = function(){
//     var tiffSaveOpt = new TiffSaveOptions();
//     tiffSaveOpt.embedColorProfile = true;
//     if (activeDocument.bitsPerChannel==BitsPerChannelType.SIXTEEN){
//         tiffSaveOpt.imageCompression = TIFFEncoding.NONE;
//         var tiffFile = new File (readFilePath()+"//"+readFileName()+"_AcademyPrintExportTIF16.tif");
//         var successMsg = "Файл экспортирован.\r\rМы назвали его ";
//         successMsg += readFileName();
//         successMsg += "_AcademyPrintExportTIF16.tif,\rи положили рядом с вашим рабочим файлом.";
//     } else {
//         tiffSaveOpt.imageCompression = TIFFEncoding.TIFFLZW;
//         var tiffFile = new File (readFilePath()+"//"+readFileName()+"_AcademyPrintExportTIF8.tif");
//         var successMsg = "Файл экспортирован.\r\rМы назвали его ";
//         successMsg += readFileName();
//         successMsg += "_AcademyPrintExportTIF8.tif,\rи положили рядом с вашим рабочим файлом.";
//     }
//     try{
//         activeDocument.saveAs (tiffFile, tiffSaveOpt, true);
//         isExportToTIF = true;
//         academyprintAlert (successMsg, "Экспорт в Tiff.");
//     } catch(someError) {
//         academyprintAlert ("По какой-то причине экспорт Tiff прошёл некорректно.")
//     }
// }



// var inFile = File ("/d/SCR/UIimgTrain/AP_small.png");
// var outFile = File ("/d/SCR/UIimgTrain/AP_small.txt");
// inFile.open ("r");
// inFile.encoding = "binary";
// var temp = inFile.read();
// inFile.close();
// outFile.open ("w");
// outFile.write (temp.toSource ());
// outFile.close ();