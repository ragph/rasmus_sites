<?php
// Set the content type to application/json
header('Content-Type: application/json');

// URL of the XML source
$xmlUrl = 'https://www.buffalopartners.com/xml/jackpots?=bfp23072';

// Fetch the XML data
$xmlData = file_get_contents($xmlUrl);

// Check if the data was fetched successfully
if ($xmlData === false) {
    echo json_encode(['error' => 'Failed to fetch XML data.']);
    exit;
}

// Load the XML data
$xml = simplexml_load_string($xmlData);

// Check if the XML was loaded successfully
if ($xml === false) {
    echo json_encode(['error' => 'Failed to parse XML data.']);
    exit;
}

// Convert the XML object to JSON
$jsonData = json_encode($xml);

// Check if the JSON conversion was successful
if ($jsonData === false) {
    echo json_encode(['error' => 'Failed to convert XML to JSON.']);
    exit;
}

// Output the JSON data
echo $jsonData;
?>