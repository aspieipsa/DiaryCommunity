@echo off 

echo. 
echo This utility wipes and rebuilds the diary app database.
echo.

echo  %time:~0,-3%: 1/5 Deleting existing JSON files...
echo. 
REM Delete existing JSON files.
IF EXIST *.json (
    del /f *.json
    echo. 
    echo  %time:~0,-3%: JSON files deleted.
) ELSE (
   echo  %time:~0,-3%: No JSON files found. 
)
echo. 

echo  %time:~0,-3%: 2/5 Creating new JSON files...
echo. 
REM Create new JSON files.
node generateJSONFiles.js 
echo.
echo  %time:~0,-3%: New JSON files created.
echo. 

echo  %time:~0,-3%: 3/5 Wiping database...
echo. 
REM Wipe database.
mongo wipeDatabase.js
echo.
echo  %time:~0,-3%: Database wiped.
echo. 

echo  %time:~0,-3%: 4/5 Importing JSON files into the database...
echo. 
REM Import the new JSON files into the database.
mongoimport --db diary --file users.json
mongoimport --db diary --file entries.json
mongoimport --db diary --file comments.json
echo.
echo  %time:~0,-3%: Import complete.
echo. 

echo  %time:~0,-3%: 5/5 Building data association...
echo. 
REM Associate users, entries, and comments with each other.
mongo buildAssociations.js 
echo.
echo  %time:~0,-3%: Building finished.
echo.
echo %time:~0,-3%: Database rebuilt.

prompt
@echo on