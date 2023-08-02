const path = require("path");
const process = require("process");
const fs = require("fs");
const os = require("os");

const folder = process.argv[2]; // 터미널 값 받기
const workingDir = path.join(__dirname + "/pictures", folder); // 폴더 위치
console.log(workingDir);

// !fs.existsSync(workingDir) -> 폴더 존재하는지 확인
if (!folder || !fs.existsSync(workingDir)) {
  return console.error("no folder");
}

// 폴더 생성
const videoDir = path.join(workingDir, "videoDir");
const capturedDir = path.join(workingDir, "capturedDir");
const duplicatedDir = path.join(workingDir, "duplicatedDir");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 파일 확인
fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXX
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) return false;

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, dir) {
  console.log(`move ${file} to ${path.basename(dir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(dir, file);

  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
}
