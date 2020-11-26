// Field Data Interoperability Specification

// We use GeoJSON specification as our starting point. 
// GeoJSON allows us to ingest different geometry types within the same structure.

// The geojson structure allows for individual features (i.e. single calls to an api), or arrays of features (i.e. bulk calls).
// It is a commonly understood geospatial format, and is well supported in a large number of software stacks, it's also just JSON so can be interpreted with ease by any number of libraries. 

[
    {
        "type": "Feature",
        // geometry could be Point, Line, Polygon. Anything that is valid within RFC7946.
        "geometry": {
            "type": "Point",
            "coordinates": [175.16870, -41.02806]
        },
        // we utilise the properties object to provide payload data. 
        "properties": {
            // datetime, correlation, operator, and payload are common, regardless of the recordtype being ingested.
            "datetime": "2020-11-23T18:14:31+00:00",
            // correlation allows for the provider to send an id from their system and have it returned in the acknoledgement with the id from our system. This allows for update and delete actions.
            "operator": "Paul Smith",
            // Payloads contain actions and descriptions of recordtypes, recordtypes being the high-level datapoint we are ingesting (field devices, hazards, incidents, animal scans etc)
            "payload": {
                "correlation": 45684,
                "recordtype": "hazard",
                // each recordtype will be given a set of available actions and valid descriptions. Actions translate into database actions i.e. record = insert, update = insert or update, remove = insert or update, delete = delete. 
                // the mapping depends on how we want to interpret change, i.e. is it a row per action or a row per device/event. 
                "action": "record",
                "description": "tomo"
            }
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [175.16870, -41.02806]
        },
        "properties": {
            "datetime": "2020-11-23T19:12:31+00:00",

            "operator":"Paul Smith",
            "payload": {
                "correlation": 45685,
                "recordtype": "device",
                "action": "deploy",
                "description": "leg-hold",
                // some payloads will have additional attributes, like activity so that the record can be related to contracted work
                "activity": 51535
            }
        }
    }
]