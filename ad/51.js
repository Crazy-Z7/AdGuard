let Zoo = JSON.parse($response.body);

let item = [
 "userBootstrapConfigResp", 
 "operationResourceDTO",
 
];
if (Zoo) {
  item.forEach((i) => {
delete Zoo[i];
});
}
$done({ body: JSON.stringify(Zoo) });
