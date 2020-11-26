// AUTOTRAP GEOJSON RECORDTYPE.

// - Autotraps will always be point data.
// - Data to be submitted as an array of GeoJSON Features.

[
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [175.16870, -41.02806]
        },
        "properties": {
            "datetime": "2020-11-23T18:14:31+00:00",
            // Date/Time is ISO 8601 in UTC
            "operator": "Paul Smith",
            // Either the individual operator, or the company engaged to deploy the autotraps.
            "payload": {
                "recordtype": "autotrap",
                "action": "triggered",
                // Common values: ["triggered","deployed","checked"]
                "animal": "possum",
                // Common values: ["possum", "rat", "stoat", "ferret", "weasel","pig","deer","other"]
                "project": "Molesworth Research"
                // An agreed upon reference for the project, could be an ID or just a short description.
            }
        }
    }
]