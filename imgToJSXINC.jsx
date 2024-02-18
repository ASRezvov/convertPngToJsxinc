#target photoshop

var readFileAsBinaryString = function(){
    var file = File(readFilePath() + activeDocument.name);
    file.open ("r");
    file.encoding = "binary";
    var imageAsString = file.read();
    file.close();
    var fileWithCode = File(readFilePath()+readFileName()+".jsxinc");
    fileWithCode.open ("w");
    fileWithCode.write (imageAsString.toSource ());
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