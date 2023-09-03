//Used to sort JSON objects imported from AWS DynamoDB due to issue displaying data in graph
// Only keeping in to show usage of DynamoDB, likley this will be moved to MySQL at somepoint.
function GetSortOrder(prop) {
    return function(a,b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (b[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}