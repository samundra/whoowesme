/* eslint-disable */
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// Google sheet ID that contains the localization strings
// These localization strings are fetched and automatically
// parsed and created into { key: value } pair by language script
const SHEET_ID = '1uwAk1xYNKc6S15ytl5OnPYCUKXxF8af4Cd6nFHgQCaM';

const LANGUAGE_NE_PATH = 'src/i18n/languages/ne.ts';
const LANGUAGE_EN_PATH = 'src/i18n/languages/en.ts';
const LANGUAGE_KEYS_PATH = 'src/i18n/languages/keys.ts';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  console.log('Read credentials.json');
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), readSheets);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    console.log('Read token from file ' + TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          'Error while trying to retrieve access token',
          err
        );
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function readSheets(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  sheets.spreadsheets.get(
    {
      spreadsheetId: SHEET_ID,
    },
    (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      console.log('Finished fetching spreadsheet');
      const worksheets = res.data.sheets.map(item => item.properties.title);
      //   worksheets.forEach(item => {
      //     readWorksheet(sheets, item);
      //   });
      const readedWorksheet = worksheets.map(item => {
        return readWorksheet(sheets, item);
      });

      Promise.all(readedWorksheet)
        .then(allResults => {
          var enData = {};
          var thData = {};
          var keyData = {};

          allResults.forEach(worksheetData => {
            enData[worksheetData.worksheetName] = worksheetData.resultsEN;
            thData[worksheetData.worksheetName] = worksheetData.resultsNE;
            keyData[worksheetData.worksheetName] = worksheetData.resultsKey;
          });

          writeLanguageFile(
            '/* eslint-disable */\nexport default ' +
              JSON.stringify(enData, null, 2).replace(/\\\\/g, '\\'),
            LANGUAGE_EN_PATH
          );
          writeLanguageFile(
            '/* eslint-disable */\nexport default ' +
              JSON.stringify(thData, null, 2).replace(/\\\\/g, '\\'),
            LANGUAGE_NE_PATH
          );
          writeLanguageFile(
            '/* eslint-disable */\nconst _keys = ' +
              JSON.stringify(keyData, null, 2).replace(/\\\\/g, '\\') +
              '\n export default _keys;',
            LANGUAGE_KEYS_PATH
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  );
}

function readWorksheet(sheets, worksheetName) {
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: SHEET_ID,
        range: '' + worksheetName + '!A2:D',
      },
      (err, res) => {
        if (err) {
          console.log('The API returned an error: ' + err);
          reject(err);
        }
        console.log('Finished fetching worksheet: ' + worksheetName);

        const rows = res.data.values;
        var resultsEN = {};
        var resultsNE = {};
        var resultsKey = {};

        rows.forEach(item => {
          if (item[1] != null && item[1] !== '') {
            resultsEN[item[1]] = item[2];
            resultsNE[item[1]] = item[3];
            resultsKey[item[1]] = '' + worksheetName + '.' + item[1];
          }
        });

        resolve({
          resultsEN,
          resultsNE,
          resultsKey,
          worksheetName,
        });
      }
    );
  });
}

function writeLanguageFile(str, path) {
  fs.writeFile(path, str, err => {
    if (err) console.error(err);
    console.log('Finished writing file', path);
  });
}
